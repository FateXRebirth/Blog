import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { Random } from 'meteor/random';
import { Posts } from '../api/posts/posts.js';

export default class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: {id: '', username: '', email: ''},
            posts: [],
        }                
    }

    handleChange(id, email) {
        let value = $('.ui.form.changeUser').form('validate form');
        if(value) {
            let data = $('.ui.form.changeUser').form('get values');
            userdata = { id: id, username: data.username, email: email, password: data.password }
            Meteor.call('EditUser', id, { username: data.username, password: data.password });
            $('.ui.form.changeUser').form('clear')
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
            Meteor.call('CreatePost', Random.id(), username, data.title, data.content);
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

        Meteor.subscribe('posts.all', this.props.user, () => {
            this.setState( { posts: Posts.find().fetch() })        
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
                                    <input type="text" name="username" placeholder={this.state.user.username}/>
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
                                    <input type="password" name="confirmation" placeholder=""/>
                                </div>
                                <div className="ui primary button" onClick={this.handleChange.bind(this, this.state.user.id, this.state.user.email)}>Save</div>
                                <div className="ui success message">
                                    Successfully!
                                </div>
                                <div className="ui error message"></div>
                            </div>
                        </div>
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
                                    <input type="text" name="title" placeholder=""/>
                                </div>
                                <div className="field">
                                    <label>Content</label>
                                    <textarea name="content"></textarea>
                                </div>
                                <div className="ui primary button" onClick={this.handleCreate.bind(this, this.state.user.username)}>Create</div>
                                <div className="ui success message">
                                    Successfully!
                                </div>
                                <div className="ui error message"></div>
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
                            <div className="ui cards">
                                {this.state.posts.map( (post) => {
                                    return (
                                        <div key={ post.id } className="card">
                                            <div className="content">
                                                <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
                                                <div className="header">
                                                    { post.title }
                                                </div>
                                                <div className="meta">
                                                    2017/08/25
                                                </div>
                                                <div className="description">
                                                    { post.content }
                                                </div>
                                            </div>
                                            <div className="extra content">
                                                <div className="ui two buttons">
                                                    <Link to={`/dashboard/edit/${post.id}`} className="ui basic green button">Edit</Link> 
                                                    <Link to={`/dashboard/delete/${post.id}`} className="ui basic red button">Delete</Link> 
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