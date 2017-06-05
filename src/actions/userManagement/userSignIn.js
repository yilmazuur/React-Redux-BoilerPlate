import axios from 'axios';
import { TOKEN_URL, API_CONSUMER_KEY, API_SECRET } from '../serviceConstants';

//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';


export function signInUser(formValues) {
    var queryString = 'client_id=' + API_CONSUMER_KEY + '&client_secret=' + API_SECRET + '&grant_type=password';
    queryString += '&username=' + formValues.username + '&password=' + formValues.password;
    const request = axios({
        method: 'POST',
        url: TOKEN_URL,
        headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
        data: queryString
    });

    return {
        type: SIGNIN_USER,
        payload: request
    };
}

export function signInUserSuccess(user) {
    return {
        type: SIGNIN_USER_SUCCESS,
        username: user
    };
}

export function signInUserFailure(error) {
    return {
        type: SIGNIN_USER_FAILURE,
        payload: error
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    };
}