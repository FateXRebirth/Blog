import { USER_DATA, USER_LOGIN, USER_LOGOUT }from '../constants/ActionTypes';

const initialState = {
  user: null,
  loggingIn: false,
};

export default function auth(state = initialState, action) {
  const {data, type} = action;
    switch (type) {
        case USER_DATA:
            return Object.assign({}, state, {
              user: data,
            });

        case USER_LOGIN:
            return Object.assign({}, state, {
              loggingIn: true,
            });
        
        case USER_LOGOUT:
            return Object.assign({}, state, {
              loggingIn: false,
            })         

        default:
            return state;
  }
}