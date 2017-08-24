import { USER_LOGIN, USER_LOGOUT }from '../constants/ActionTypes';

export const user_login = user => ({ type: USER_LOGIN, data: user })
export const user_logout = user => ({ type: USER_LOGOUT, data: user })
