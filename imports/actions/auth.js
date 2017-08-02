import { USER_DATA, USER_LOGIN, USER_LOGOUT }from '../constants/ActionTypes';

export const user_data = user => ({ type: USER_DATA, data: user })
export const user_login = state => ({ type: USER_LOGIN })
export const user_logout = state => ({ type: USER_LOGOUT })
