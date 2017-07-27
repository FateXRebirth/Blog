import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="ui three column grid container">
                    <div className="column">
                        <div className="comments">
                            <h3>"It's so simple -- as both a manager and a user. And it doesnt have too many bells and whistles that make things confusing. Just the right price too."</h3>
                            <p>Scott</p>
                            <p>California, United States</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="comments">
                            <h3>"Makes group email lists really easy to use and administer - Fast and reliable - Constantly improving - Great web design."</h3>
                            <p>Sam</p>
                            <p>Brighton, England</p>                            
                        </div>
                    </div>
                    <div className="column">
                        <div className="comments">
                            <h3>"Gaggle mail is working well for a small nonprofit group that I support. It is perfect for creating a distribution list that we can all send to."</h3>
                            <p>Jessica</p>
                            <p>Texas, United States</p>
                        </div>
                    </div>
                    </div>                             
            </div>
        )
    }
}