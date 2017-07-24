import React from 'react';

export default class Blog extends React.Component {
    componentWillMount() {
        this.setState({
            posts: [
                {
                    title: 'Today is Monday',
                    content: '2017/07/24'
                },
                {
                    title: 'Today is pretty hot',
                    content: 'The tempature is higher than 40 degree'
                },
                {
                    title: 'There is a activity in our school',
                    content: 'The participant is more than 60 people'
                }
            ]
        })
    }
    render() {
        const posts = this.state.posts.map(post => {
            return <li key={post.title}>{post.title}, {post.content}</li>
        })
        return (
            <div>
                <h1> Blog page</h1>
                <ul>
                    {posts}
                </ul>
            </div>
        )
    }
}