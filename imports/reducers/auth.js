import { USER_DATA, USER_LOGGING_IN }from '../constants/ActionTypes';

const initialState = {
  user: null,
  loggingIn: true,
};

export default function auth(state = initialState, action) {
  const {data, type} = action;
  switch (type) {
    case USER_DATA:
        return Object.assign({}, state, {
          user: data,
        });

    case USER_LOGGING_IN:
        return Object.assign({}, state, {
          loggingIn: data,
        });
    
    case 'FAKE_LOGIN':
        console.log("Login");
        return Object.assign({}, state, {
          loggingIn: true,
        });
    
    case 'FAKE_LOGOUT':
        console.log("Logout");
        return Object.assign({}, state, {
          loggingIn: false,
        })

    default:
        return state;
  }
}