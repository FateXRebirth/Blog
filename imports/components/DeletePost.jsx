import React from 'react';
import { withRouter } from 'react-router-dom';

class DeletePost extends React.Component {

    handleDelete() {        
        Meteor.call('DeletePost', this.props.match.params.id);
        this.props.history.push('/dashboard');
    }

    handleCancel() {
        this.props.history.push('/dashboard');
    }

    render() {        
        return(
            <div className="deletepostPage">
                <div className="ui container">
                    <h4 className="ui horizontal divider header">
                        <i className="edit icon"></i>
                        Delete Post
                    </h4>
                    
                    <div className="ui warning message">
                        <div className="header">
                            You must think again before you do this!
                        </div>
                    This action can not be restored.                                         
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui red button" onClick={this.handleDelete.bind(this)}>Delete</div> 
                            <div className="ui black button" onClick={this.handleCancel.bind(this)}>Cancel</div> 
                        </div>
                    </div>                      
                    
                </div>
            </div>
        )
    }
}

export default withRouter(DeletePost);