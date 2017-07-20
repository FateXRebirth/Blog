import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

// import other component
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';
import Comment from '../components/comment';
import Intro from '../components/intro';
import Feature from '../components/feature';

export default class AppContainer extends React.Component { 
    constructor(props) {
        console.log("constructor()")
        super(props);
        this.handleCheckLogin = this.handleCheckLogin.bind(this);
        this.state = {
            isLoggedIn: false,
        };
    }   

    componentWillMount(){
        console.log("componentWillMount()")
    }

    componentDidMount(){
        console.log("componentDidMount()")
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps()")
    }

    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate()")
    // }

    componentWillUpdate(){
        console.log("componentWillUpdate()")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount()")
    }

    handleCheckLogin(value) {
        this.setState({isLoggedIn: value});
    }
    
    render() {
        const loggined = this.state.isLoggedIn;
        console.log("render()")

        let content = null;
        if (loggined) {
            console.log("App received loggined");
            //content = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            console.log("App does not received loggined");
            //content = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            
            <div className="AppContainer"> 
                <Navbar isLoggedIn={loggined} onCheck={this.handleCheckLogin} />
                <header>
                    <Header isLoggedIn={loggined}/>
                </header>
            
                <main>
                    {this.props.content}
                </main>
                
                <footer>
                    <Footer />
                </footer>            
            </div>
        );
    }
}


