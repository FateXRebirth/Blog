import React from 'react';
import { Link } from 'react-router-dom';
import { Posts } from '../api/posts/posts.js';

// TODO: Refactor UI and UX 
// FIXME: Image can't display properly

export default class Blog extends React.Component {
    
    constructor() {
        super();
        this.state = {
            posts: []
        }       
    }

    componentDidMount() {              
        Meteor.call('GetPostUsingName', this.props.user, (error, result)=> {
            if(result) {
                this.setState( { posts: result })
            } else {
                console.log(error);
            }
        })
    }
    
    render() {                
        return (
            <div className="blogPage">
                
                {this.state.posts.map(function(post) {
                    return (
                        <article key={post.id} className="article">
                            <div className="title">
                                <header className="ui container">
                                    <div className="link"><Link to={`/blog/${post.id}`} className="link-text"> { post.title } </Link></div>
                                    <div className="date"> { post.createAt } </div>
                                    <p className="label"> Algorithm &emsp; C# &emsp; Computer &emsp; science &emsp; Java &emsp; JavaScript &emsp; Python &emsp; Ruby </p>
                                </header>
                            </div>
                            <div className="content">
                                <div className="ui container">
                                    <div className="text">
                                        <p className="outline"> { post.outline } </p>
                                        <Link to={`/blog/${post.id}`} className="button-text" > Continue reading </Link>
                                    </div>
                                    {/* <div className="image">
                                        <figure>
                                            <img className="ui circular image" src="/icons/semantic-ui-logo.png"/>
                                        </figure>
                                    </div> */}
                                </div>
                            </div>
                        </article>
                    );
                })}                
            </div>
        )
    }
}