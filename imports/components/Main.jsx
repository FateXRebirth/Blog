// import React from 'react';

// import Blog from './Blog';
// import Circle from './Circle';

// export default class Main extends React.Component {
//     render() {
//         const currentUser = this.props.user;
//         let service = null;
//         if(this.props.service) {
//             if(this.props.service == 'blog') {
//                 service = <Blog user={currentUser} /> 
//             } else if(this.props.service == 'circle') {
//                 service = <Circle user={currentUser} />
//             }
//         }
        
//         return (            
//             <div className="ui container dashboard center aligned">
//                 <h1> Dashboard page </h1>
//                 { service ? ( service ) :
//                 (<div className="ui massive horizontal divided list">
//                     <div className="item">
//                         <img className="ui avatar image" src="/icons/1497280753_blog.png"/>
//                         <div className="content">
//                         <a href='/blog'><div className="header">Blog</div></a>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img className="ui avatar image" src="/icons/friends.png"/>
//                         <div className="content">
//                         <a href='/circle'><div className="header">Social</div></a>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img className="ui avatar image" src="/icons/Drive-Bootcamp.png"/>
//                         <div className="content">
//                         <a href='/drive'><div className="header">Drive</div></a>
//                         </div>
//                     </div>
//                 </div>)}                
//             </div>
//         )
//     }  
// }

import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth.js';

import Intro from './Intro';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Blog from './Blog';

class Main extends React.Component{    
    render() {
        const loggingIn = this.props.loggingIn;
        const user = this.props.user;
        return (
            <main>                
                <Switch>                        
                    <Route exact path='/' component={Intro} />                    
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route path='/:username' component={Blog} />
                </Switch>
            </main>
        )
    }
}

const mapStateToProps = state => ({
  auth: state
})
const increaseAction = { type: 'FAKE_LOGIN' };
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AuthActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
