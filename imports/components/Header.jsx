import React from 'react';

export default class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    
    componentDidMount() {
        let user = this.props.user;
        Meteor.call('GetUser', user, (error, result) => {
            if(result) {
                this.setState({ user: result });
            } else {
                console.log(error);
            }
        })
    }
    
    render() {
        const loggingIn = this.props.loggingIn;     
        const user = this.state.user;
        return (
            <header>
                {loggingIn ? 
                (<div className="ui items">
                    <div className="item">
                        <div className="image">
                        <img src="/images/wireframe/image.png"/>
                        </div>
                        <div className="content">
                        <a className="header">Header</a>
                        <div className="meta">
                            <span>Description</span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            Additional Details
                        </div>
                        </div>
                    </div>                    
                </div>) : 
                (<div className="head">
                    <div className="ui inverted vertical masthead center aligned segment">
                                
                        <div className="ui text container">
                            <h1 className="ui inverted header">
                                Imagine-a-Company
                            </h1>
                            <h2>Do whatever you want when you want to.</h2>
                        <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
                        </div>
                    </div>      
                </div>)
                }                
            </header> 
        )
    }
}