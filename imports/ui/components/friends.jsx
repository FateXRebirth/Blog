import React from 'react';
import * as Faker from 'faker';

export default class Friends extends React.Component {
    render() {
        let friends = [];
        for (var i = 0; i < 25 ; i++) {
            let data = Faker.helpers.userCard();
            let cat = Faker.image.cats();
            console.log(cat);
        }
        return(
            <div className="ui container">
                <div className="ui card">
                <div className="image">
                    <img src="/icons/semantic-ui-logo.png"/>
                </div>
                <div className="content">
                    <a className="header">Kristy</a>
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
            </div>
        )
    }
}