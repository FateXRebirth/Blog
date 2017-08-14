import React from 'react';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            posts: [],
        }
    }

    getUser() {

    }

    getPosts() {

    }

    addPost() {

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
                            <div className="ui form success">
                                <div className="field">
                                    <label>Username</label>
                                    <input type="text" placeholder="joe@schmoe.com"/>
                                </div>
                                <div className="field">
                                    <label>E-mail</label>
                                    <input placeholder="Read Only" readOnly type="email"/>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" placeholder="joe@schmoe.com"/>
                                </div>
                                <div className="field">
                                    <label>Confirmation</label>
                                    <input type="password" placeholder="joe@schmoe.com"/>
                                </div>
                                <div className="ui success message">
                                    <div className="header">Form Completed</div>
                                    <p>You're all signed up for the newsletter.</p>
                                </div>
                                <div className="ui error message">
                                    <div className="header">Action Forbidden</div>
                                    <p>You can only sign up for an account once with a given e-mail address.</p>
                                </div>
                                <div className="ui submit primary button">Submit</div>
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
                            <div className="ui form">
                                <div className="field">
                                    <label>Title</label>
                                    <input type="text" placeholder="joe@schmoe.com"/>
                                </div>
                                <div className="field">
                                    <label>Content</label>
                                    <textarea></textarea>
                                </div>
                                <div className="ui submit primary button">Submit</div>
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
                                <div className="card">
                                    <div className="content">
                                        <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
                                        <div className="header">
                                            Elliot Fu
                                        </div>
                                        <div className="meta">
                                            Friends of Veronika
                                        </div>
                                        <div className="description">
                                            Elliot requested permission to view your contact details
                                        </div>
                                    </div>
                                    <div className="extra content">
                                        <div className="ui two buttons">
                                            <div className="ui basic green button">Edit</div>
                                            <div className="ui basic red button">Delete</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="content">
                                        <img className="right floated mini ui image" src="/images/avatar/large/jenny.jpg"/>
                                        <div className="header">
                                            Jenny Hess
                                        </div>
                                        <div className="meta">
                                            New Member
                                        </div>
                                        <div className="description">
                                            Jenny wants to add you to the group <b>best friends</b>
                                        </div>
                                    </div>
                                    <div className="extra content">
                                        <div className="ui two buttons">
                                            <div className="ui basic green button">Edit</div>
                                            <div className="ui basic red button">Delete</div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}