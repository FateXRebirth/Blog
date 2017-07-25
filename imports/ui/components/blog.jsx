import React from 'react';

export default class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // should get user's post 
        // $.ajax({
        //     url: "https://jsonplaceholder.typicode.com/posts",
        //     cache: false,
        //     dataType: 'json',
        //     success: function(data) {
        //         this.setState( { posts: data}, () => {
        //             console.log(this.state);
        //         });
        //     }.bind(this),
        //     error: function( jqxhr, textStatus, error ) {
        //         var err = textStatus + ", " + error;
        //         console.log( "Request Failed: " + err );
        //     },
        // })
        let temp = [
                {
                    "id": "aabca4d9-076b-4bba-ad9e-e92ed9a589f6",
                    "author": "hfaldoe0",
                    "title": "Mr",
                    "content": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
                }, {
                    "id": "4c2996f8-7624-4aa4-a1e3-bd77abd14fc4",
                    "author": "praymen1",
                    "title": "Dr",
                    "content": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
                }, {
                    "id": "d98eeb69-46c0-4169-8303-d073bbba6173",
                    "author": "kgummoe2",
                    "title": "Dr",
                    "content": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
                }, {
                    "id": "16437a1f-3b89-41bc-b1f8-6bf9f9ab2e2a",
                    "author": "greilingen3",
                    "title": "Ms",
                    "content": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl."
                }, {
                    "id": "399013dc-e946-4421-a978-b115c0933015",
                    "author": "dspores4",
                    "title": "Honorable",
                    "content": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                }]
        this.setState( {posts: temp});
    }
    
    render() {
        return (
            <div className="ui container">
                {this.state.posts.map(function(post) {
                    return (
                        <div key={post.id} className="ui raised segment">
                            <div className="post-author">
                                <h3> { post.author } </h3>
                            </div>
                            <div className="post-title">
                                <h6> { post.title } </h6>
                            </div>
                            <div className="post-contnet">
                                <p> { post.content } </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}