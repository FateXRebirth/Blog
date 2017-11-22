import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Link, withRouter } from 'react-router-dom';
import { Random } from 'meteor/random';
import { Posts } from '../api/posts/posts.js';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { user_logout } from '../actions/auth.js';

class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: {id: '', username: '', email: ''},
            posts: [],
            delete: null
        }                
    }

    handleDelete(id) {
        let value = $('.mini.modal.deleteUser').modal('show');
    }

    handleChange(id, email) {
        let value = $('.ui.form.changeUser').form('validate form');
        if(value) {
            let data = $('.ui.form.changeUser').form('get values');
            userdata = { id: id, username: data.username, email: email, password: data.password }
            Meteor.call('EditUser', id, { username: data.username, password: data.password });
            $('.ui.form.changeUser').form('clear')
            // this.setState(Object.assign({}, this.state.user, { username: data.username }), () => {
            //     console.log(this.state);
            // })
            document.getElementById("username").placeholder = data.username;
        }       
    }

    refresh() {
        Meteor.call('GetPostUsingName', this.state.user.username, (error, result)=> {
            if(result) {
                this.setState( { posts: result })
            } else {
                console.log(error);
            }
        })
    }

    handleCreate(username) {
        let value = $('.ui.form.addPost').form('validate form');
        if(value) {
            let data = $('.ui.form.addPost').form('get values');
            Meteor.call('CreatePost', Random.id(), username, data.title, data.outline, data.content);
            $('.ui.form.addPost').form('clear')
        }
        this.refresh();
    }
    
    componentDidMount() {        
        
        Meteor.call('GetUser', this.props.id, (error, result) => {
            if(result) {
                this.setState( { user : result } );
            } else {
                console.log(error);
            }
        })          

        // Meteor.subscribe('posts.all', this.props.user, () => {
        //     this.setState( { posts: Posts.find().fetch() })        
        // });   

        Meteor.call('GetPostUsingName', this.props.user, (error, result)=> {
            if(result) {
                this.setState( { posts: result })
            } else {
                console.log(error);
            }
        })

        $('.mini.modal.deleteUser').modal({
            closable  : false,
            onDeny    : function(){
                this.setState({ delete: false });
                return true;
            }.bind(this),
            onApprove : function() {
                this.setState({ delete: true });
                return true;
            }.bind(this),
            onHidden : function() {
                if(this.state.delete) {
                    Meteor.call('DeleteUser', this.state.user.id);
                    Meteor.call('DeletePostUsingName', this.state.user.username);
                    this.props.user_logout(null);
                    localStorage.clear();
                    this.props.history.push('/');
                }
            }.bind(this)
        });
            
        $('.ui.form.changeUser').form({
            keyboardShortcuts: false,
            fields: {
                username: { 
                    identifier  : 'username',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your username'
                        }
                    ]
                },
                password: { 
                    identifier  : 'password',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your password'
                        },
                        {
                            type   : 'length[6]',
                            prompt : 'Your password must be at least 6 characters'
                        }
                    ]
                },
                confirmation: {
                    identifier  : 'confirmation',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter the confirmation'
                        },
                        {
                            type   : 'length[6]',
                            prompt : 'The confirmation must be at least 6 characters'
                        },
                        {
                            type   : 'match[password]',
                            prompt : 'Password and confirmation should be same'
                        }
                    ]
                }
            },
            onSuccess: function() {
                return true
            },
            onFailure: function() {
                return false
            }
        }),
        $('.ui.form.addPost').form({
            keyboardShortcuts: false,
            fields: {
                title: { 
                    identifier  : 'title',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter title'
                        }
                    ]
                },
                outline: {
                    identifier: 'outline',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter a outline'
                        },
                        // {
                        //     type   : 'maxLength[50]',
                        //     prompt : 'Your outline cannot be longer than {ruleValue} characters'
                        // }
                    ]
                },
                content: { 
                    identifier  : 'content',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter content'
                        }
                    ]
                }
            },
            onSuccess: function() {
                return true
            },
            onFailure: function() {
                return false
            }
        })            
    }

    render() {
        return(
            <div className="dashboardPage">
                <div className="user">
                    <div className="ui container">
                        <h4 className="ui horizontal divider header">
                            <i className="setting icon"></i>
                            Profile
                        </h4>
                        <div className="ui stacked segment">
                            <div className="ui info message">
                                <div className="header">
                                    Change Your Data
                                </div>
                            </div>
                            <div className="ui form changeUser">
                                <div className="field">
                                    <label>Username</label>
                                    <input type="text" name="username" id="username" placeholder={this.state.user.username}/>
                                </div>
                                <div className="field">
                                    <label>E-mail</label>
                                    <input placeholder={this.state.user.email} readOnly type="email"/>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" placeholder=""/>
                                </div>
                                <div className="field">
                                    <label>Confirmation</label>
                                    <input type="password" name="confirmation" id="confirmation" placeholder=""/>
                                </div>
                                <div className="ui primary button" id="save" onClick={this.handleChange.bind(this, this.state.user.id, this.state.user.email)}>Save</div>
                                <div className="ui success message">
                                    Successfully!
                                </div>
                                <div className="ui error message"></div>
                            </div>
                        </div>
                    </div>
                    <div className="delete">
                        <button className="ui red button" id="account" onClick={this.handleDelete.bind(this,this.state.user.id)}>Delete this account</button>
                    </div>
                </div>
                
                <div className="post">
                    <div className="ui container">
                        <h4 className="ui horizontal divider header">
                            <i className="write icon"></i>
                            Add Post
                        </h4>
                        <div className="ui stacked segment">
                            <div className="ui info message">
                                <div className="header">
                                    Create Your Story
                                </div>
                            </div>
                            <div className="ui form addPost">
                                <div className="field">
                                    <label>Title</label>
                                    <input type="text" name="title" id="title" placeholder="Enter title here"/>
                                </div>
                                <div className="field">
                                    <label>Outline</label>
                                    <input type="text" name="outline" id="outline" placeholder="Enter outline here"/>
                                </div>
                                <div className="field">
                                    <label>Content</label>
                                    <textarea name="content" id="content" placeholder="Enter content here"></textarea>
                                </div>
                                <div className="ui primary button" id="addPost" onClick={this.handleCreate.bind(this, this.state.user.username)}>Create</div>
                                <div className="ui success message">
                                    Successfully!
                                </div>
                                <div className="ui error message" id="addPost-error"></div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="posts">
                    <div className="ui container">
                        <h4 className="ui horizontal divider header">
                            <i className="edit icon"></i>
                            Edit / Delete Posts
                        </h4>
                         <div className="ui stacked segment">
                             <div className="ui info message">
                                <div className="header">
                                    Manage Your Posts
                                </div>
                            </div>
                            <div className="ui cards" id="posts">
                                {this.state.posts.map( (post) => {
                                    return (
                                        <div key={ post.id } className="card">
                                            <div className="content">
                                                <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
                                                <div className="header">
                                                    { post.title }
                                                </div>
                                                <div className="meta">
                                                    { post.createAt }
                                                </div>
                                                <div className="description">
                                                    { post.outline }
                                                </div>
                                            </div>
                                            <div className="extra content">
                                                <div className="ui two buttons">
                                                    <Link to={`/dashboard/edit/${post.id}`} id="editPost" className="ui basic green button">Edit</Link> 
                                                    <Link to={`/dashboard/delete/${post.id}`} id="deletePost" className="ui basic red button">Delete</Link> 
                                                </div>
                                            </div>                                            
                                        </div> 
                                    )             
                                })}                                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({user_logout}, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(Dashboard));