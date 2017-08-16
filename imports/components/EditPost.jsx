import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// TODO: fetch post title and content to show in the form

class EditPost extends React.Component {

    handleChange(id) {
        let value = $('.ui.form.editPost').form('validate form');
        if(value) {
            let data = $('.ui.form.editPost').form('get values');
            Meteor.call('EditPost', id, { title: data.title, content: data.content} );
            this.props.history.push('/dashboard');
        }
    }

    componentDidMount() {
        $('.ui.form.editPost').form({
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
        console.log(this.props)
        return(
            <div className="editpostPage">
                <div className="ui container">
                    <h4 className="ui horizontal divider header">
                        <i className="edit icon"></i>
                        Edit Posts
                    </h4>
                    <div className="ui stacked segment">
                        <div className="ui info message">
                            <div className="header">
                                Edit Your Post
                            </div>
                        </div>
                        <div className="ui form editPost">
                            <div className="field">
                                <label>Title</label>
                                <input type="text" name="title" placeholder=""/>
                            </div>
                            <div className="field">
                                <label>Content</label>
                                <textarea name="content"></textarea>
                            </div>
                            <div className="ui primary button" onClick={this.handleChange.bind(this, this.props.match.params.id)}>Change</div>
                            <Link to="/dashboard" className="ui secondary button" >Cancel</Link>
                            <div className="ui success message">
                                Successfully!
                            </div>
                            <div className="ui error message"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditPost);