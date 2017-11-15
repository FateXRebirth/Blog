import React from 'react';
import { withRouter } from 'react-router-dom';

class EditPost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: '', 
            outline: '',
            content: ''
        }
    }

    handleChange(id) {
        let value = $('.ui.form.editPost').form('validate form');
        if(value) {
            let data = $('.ui.form.editPost').form('get values');
            Meteor.call('EditPost', id, { title: data.title, outline: data.outline, content: data.content} );
            this.props.history.push('/dashboard');
        }
    }

    handleCancel() {
        this.props.history.push('/dashboard');
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
       });
    }

    onOutlineChange(event) {
        this.setState({
            outline: event.target.value
       });
    }

    onContentChange(event) {
        this.setState({
            content: event.target.value
       });
    }
    

    componentDidMount() {
        Meteor.call('GetPost', this.props.match.params.id, (error, result) => {
            if(result) {                
                this.setState( { title: result.title, outline: result.outline, content: result.content });
            } else {
                console.log(error)
            }
        })
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
            <div className="editpostPage">
                <div className="ui container">
                    <h4 className="ui horizontal divider header">
                        <i className="edit icon"></i>
                        Edit Post
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
                                <input type="text" name="title" id="title" value={this.state.title} onChange={this.onTitleChange.bind(this)}/>
                            </div>
                            <div className="field">
                                <label>Outline</label>
                                <input type="text" name="outline" id="outline" value={this.state.outline} onChange={this.onOutlineChange.bind(this)}/>
                            </div>
                            <div className="field">
                                <label>Content</label>
                                <textarea name="content" id="content" value={this.state.content} onChange={this.onContentChange.bind(this)}></textarea>
                            </div>
                            <div className="ui primary button" id="edit" onClick={this.handleChange.bind(this, this.props.match.params.id)}>Change</div>
                            <div className="ui secondary button" id="cancel" onClick={this.handleCancel.bind(this)}>Cancel</div>
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