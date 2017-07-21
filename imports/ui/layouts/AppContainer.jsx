import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

// import other component
import Navbar from '../../ui/components/navbar';
import Header from '../../ui/components/header';
import Footer from '../../ui/components/footer';
import Main from '../../ui/components/main.jsx';

export default class AppContainer extends React.Component { 
    constructor(props) {
        // console.log("constructor()")
        super(props);
        //this.handleCheckLogin = this.handleCheckLogin.bind(this);
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

    // handleCheckLogin(value) {
    //     this.setState({isLoggedIn: value});
    // }
    
    render() {
        let currentUser = null;
        if(this.props.currentUser){
            currentUser = this.props.currentUser;
        }  
        console.log("render()")

        let main = null;
        if (currentUser) {
            console.log("render main...");
            main = <Main user={currentUser} />;
        } else {
            console.log("render intro/login/register...");
            main = this.props.content;
        }
        return (
            
            <div className="AppContainer"> 
                <Navbar isLoggedIn={currentUser} />
                <header>
                    <Header isLoggedIn={currentUser}/>
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


