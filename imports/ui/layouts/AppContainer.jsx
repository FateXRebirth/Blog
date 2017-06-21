import React from 'react';
import ReactDOM from 'react-dom';

// import element from semantic-ui-react
//import { Divider } from 'semantic-ui-react';

// import other component

import Header from '../components/header';
import Footer from '../components/footer';
import Comment from '../components/comment';
import Feature from '../components/feature';

export default class AppContainer extends React.Component { 
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }   

    handleLoginClick() {
        this.setState({isLoggedIn : true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let content = null;
        if (isLoggedIn) {
            //content = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            //content = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div className="AppContainer"> 
                
                <header>
                    <Header />
                </header>

                <div className="ui section divider"></div>
                
                <main>
                     { content }
                     <Comment />
                     <Feature />
                </main>
                
                <div className="ui section divider"></div>
                
                <footer>
                    <Footer />
                </footer>            
            </div>
        );
    }
}


