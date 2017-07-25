import React from 'react';

import * as Faker from 'faker';

export default class Circle extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        // should get user's friend or circle using username
        let temp = []
        for (var i = 0; i < 20 ; i++) {
            let friend = Faker.helpers.userCard();
            temp.push(friend);
        }
        this.setState({friends: temp});
    }

    render() {        
        return(
            <div className="ui grid container">
                {this.state.friends.map(friend => {
                    return( 
                        <div key={friend.username} className="four wide column">
                            <div className="ui card">
                                <div className="image">
                                    <img src="/icons/semantic-ui-logo.png"/>
                                </div>  
                                <div className="content">
                                    <a className="header">{friend.name}</a>
                                    <div className="meta">
                                        <span className="date">Joined in 2013</span>
                                    </div>
                                    <div className="description">
                                        Kristy is an art director living in New York.
                                    </div>
                                </div>
                                <div className="extra content">
                                    <a>
                                    <i className="user icon"></i>
                                        22 Friends
                                    </a>
                                </div>
                            </div>  
                        </div>)
                    })
                }                
            </div>
        )
    }
}