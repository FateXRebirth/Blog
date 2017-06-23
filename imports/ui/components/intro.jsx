import React from 'react';

export default class Intro extends React.Component {
    render() {
        return (
            
            <div className="intro">
                <div className="ui vertical stripe segment">
                <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                    <h3 className="ui header">We Help Companies and Companions</h3>
                    <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                    <h3 className="ui header">We Make Bananas That Can Dance</h3>
                    <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                    </div>
                    <div className="six wide right floated column">
                    <img src="icons/1497280750_hex.png" className="ui large bordered rounded image"/>
                    </div>
                </div>
                <div className="row">
                    <div className="center aligned column">
                    <a className="ui huge button">Check Them Out</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}