// import React from 'react'
// import ReactDOM from 'react-dom'

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'

// import createHistory from 'history/createBrowserHistory'
// import { Route } from 'react-router'

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// import reducers from './reducers' // Or wherever you keep your reducers

// // Create a history of your choosing (we're using a browser history in this case)
// const history = createHistory()

// // Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)

// // Add the reducer to your store on the `router` key
// // Also apply our middleware for navigating
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware)
// )

// // Now you can dispatch navigation actions from anywhere!
// // store.dispatch(push('/foo'))

// ReactDOM.render(
//   <Provider store={store}>
//     { /* ConnectedRouter will use the store from Provider automatically */ }
//     <ConnectedRouter history={history}>
//       <div>
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//         <Route path="/topics" component={Topics}/>
//       </div>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import {Route, BrowserRouter as Router, IndexRoute, Switch } from 'react-router-dom';

// Import layout 
import AppContainer from '../../ui/layouts/AppContainer.jsx'
import App from '../../ui/layouts/App.jsx';

// import other component
import Intro from '../../ui/components/Intro.jsx';
import Login from '../../ui/components/Login.jsx';
import Register from '../../ui/components/Register.jsx';

render(
    <Router>      
        <App />
    </Router>,
    document.getElementById('root')
);
