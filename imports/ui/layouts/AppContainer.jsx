import React from 'react';
import ReactDOM from 'react-dom';

// import other component
import Navbar from '../../ui/components/navbar';
import Header from '../../ui/components/header';
import Footer from '../../ui/components/footer';
import Main from '../../ui/components/main.jsx';

export default class AppContainer extends React.Component { 
    // constructor(props) {
    //     // console.log("constructor()")
    //     super(props);
    //     //this.handleCheckLogin = this.handleCheckLogin.bind(this);
    //     this.state = {
    //         isLoggedIn: false,
    //     };
    // }   

    componentWillMount(){
        // console.log("componentWillMount()")
    }

    componentDidMount(){
        // console.log("componentDidMount()")
    }

    componentWillReceiveProps(){
        // console.log("componentWillReceiveProps()")
    }

    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate()")
    // }

    componentWillUpdate(){
        // console.log("componentWillUpdate()")
    }

    componentDidUpdate(){
        // console.log("componentDidUpdate()")
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount()")
    }

    // handleCheckLogin(value) {
    //     this.setState({isLoggedIn: value});
    // }
    
    render() {
        let currentUser = null;
        let loggedIn = false;
        if(this.props.currentUser){
            currentUser = this.props.currentUser;
            loggedIn = true;
        }
        if(localStorage.getItem('currentUser')) {
            // currentUser = JSON.parse(localStorage.getItem('currentUser'));
            loggedIn = true;
        }   
        // console.log("render()")

        let main = null;
        let service = this.props.service;
        console.log("Service -> " + service);

        if (currentUser) {
            // console.log("render main...");
            // if(service) {
            //     main = <Main user={currentUser} service={service} />;
            // } else {
            //     main = <Main user={currentUser} />;
            // }            
            main = <Main user={currentUser} service={service} />;
        } else {
            // console.log("render intro/login/register...");
            main = this.props.content;
        }
        return (
            
            <div className="AppContainer"> 
                <Navbar isLoggedIn={loggedIn} />
                <header>
                    <Header isLoggedIn={loggedIn}/>
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


