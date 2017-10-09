import React from 'react'
import { withRouter } from 'react-router-dom';

class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            post: { title: '', content: ''}
        }
    }
    
    componentDidMount() {
        Meteor.call('GetPost', this.props.match.params.id, (error, result) => {
            if(result) {                
                this.setState( { post: result });
            } else {
                console.log(error)
            }
        })
    }
    
    render() {
        return(
            <div className="postPage">
                <div className="ui container">
                    
                        <h1 className="ui header"> { this.state.post.title } </h1>
                       
                        <p> { this.state.post.content } </p>
                       
                    
                    <div className="ui comments">
                        <h3 className="ui dividing header">Comments</h3>
                        <div className="comment">
                            <a className="avatar">
                            <img src="/icons/1497280753_blog.png"/>
                            </a>
                            <div className="content">
                            <a className="author">Matt</a>
                            <div className="metadata">
                                <span className="date">Today at 5:42PM</span>
                            </div>
                            <div className="text">
                                How artistic!
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                            </div>
                        </div>
                        <div className="comment">
                            <a className="avatar">
                            <img src="/icons/1497280753_blog.png"/>
                            </a>
                            <div className="content">
                            <a className="author">Elliot Fu</a>
                            <div className="metadata">
                                <span className="date">Yesterday at 12:30AM</span>
                            </div>
                            <div className="text">
                                <p>This has been very useful for my research. Thanks as well!</p>
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                            </div>
                            <div className="comments">
                            <div className="comment">
                                <a className="avatar">
                                <img src="/icons/1497280753_blog.png"/>
                                </a>
                                <div className="content">
                                <a className="author">Jenny Hess</a>
                                <div className="metadata">
                                    <span className="date">Just now</span>
                                </div>
                                <div className="text">
                                    Elliot you are always so right :)
                                </div>
                                <div className="actions">
                                    <a className="reply">Reply</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="comment">
                            <a className="avatar">
                            <img src="/icons/1497280753_blog.png"/>
                            </a>
                            <div className="content">
                            <a className="author">Joe Henderson</a>
                            <div className="metadata">
                                <span className="date">5 days ago</span>
                            </div>
                            <div className="text">
                                Dude, this is awesome. Thanks so much
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                            </div>
                        </div>
                        <form className="ui reply form">
                            <div className="field">
                            <textarea></textarea>
                            </div>
                            <div className="ui blue labeled submit icon button">
                            <i className="icon edit"></i> Add Reply
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Post);