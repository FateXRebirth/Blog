import { USER_DATA, USER_LOGGING_IN }from '../constants/ActionTypes';

export const user_logging_in = state => ({ type: USER_LOGGING_IN, data: state })
export const user_data = data => ({ type: USER_DATA, data: user })
export const fake_login = data => ({ type: 'FAKE_LOGIN' })
export const fake_logout = data => ({ type: 'FAKE_LOGOUT' })