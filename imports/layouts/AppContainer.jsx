import React from 'react';

// import other component
import Navbar from './../containers/Navbar';
import Header from '../../ui/components/Header';
import Footer from '../../ui/components/Footer';
import Main from '../../ui/components/Main.jsx';

export default class AppContainer extends React.Component { 
    
    render() {
        let currentUser = this.props.currentUser;
        let isLoggedIn = false;
        if(this.props.currentUser || localStorage.getItem('currentUser')){
            isLoggedIn = true;
        }
        let main = null;
        let service = this.props.service;

        if (currentUser) {
            main = <Main currentUser={currentUser} service={service} />;
        } else {
            // console.log("render intro/login/register...");
            // main = this.props.content;
            main = this.props.children;
        }
        return (
            
            <div className="AppContainer"> 
                <Navbar isLoggedIn={isLoggedIn} currentUser={currentUser}/>
                <header>
                    <Header isLoggedIn={isLoggedIn} currentUser={currentUser} />
                </header>
            
                <main>
                    {main}
                </main>
                
                <footer>
                    <Footer />
                </footer>            
            </div>
            
        );
    }
}


