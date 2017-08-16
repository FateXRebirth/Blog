// Import client startup through a single index entry point

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {persistStore, autoRehydrate} from 'redux-persist'

// import '/imports/stylesheets/style.css';

import App from '../../components/App.jsx';
import auth from '../../reducers/auth'; 

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    auth,
    router: routerReducer
  }),
  undefined,
  compose(
    applyMiddleware(middleware),
    autoRehydrate()
  ),
)

persistStore(store, {blacklist: ['someTransientReducer']}, () => {
  console.log('rehydration complete')
})

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

if (window.performance) {
  console.info("window.performance work's fine on this browser");
}
if (performance.navigation.type == 1) {
  console.info( "This page is reloaded" );
} else {
  console.info( "This page is not reloaded");
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)