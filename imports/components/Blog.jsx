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
        Meteor.subscribe('posts.all', this.props.user, () => {
            this.setState( { posts: Posts.find().fetch() })        
        });
    }
    
    render() {                
        return (
            <div className="blogPage">
                
                {this.state.posts.map(function(post) {
                    return (
                        <article key={post.id} className="">
                            <div className="title">
                                <header className="ui container">
                                    <Link to={`/blog/${post.id}`} className="link"> { post.title } </Link>
                                    <div className="date"> 2017/08/10 </div>
                                    <p> Algorithm C# Computer science Java JavaScript Open source Python Ruby Sorting </p>
                                </header>
                            </div>
                            <div className="content">
                                <div className="ui container">
                                    <div className="text">
                                        <p> { post.content } </p>
                                        <Link to={`/blog/${post.id}`} > Continue reading </Link>
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