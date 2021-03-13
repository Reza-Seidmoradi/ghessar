import {
    LOGIN_ACTION,
    LOGIN_SUCCESS_ACTION,
    LOGIN_FAIL_ACTION,
} from './constants';

export function loginAction(username, password) {
    return {
        type: LOGIN_ACTION,
        username,
        password,
    };
}

export function loginSuccessAction() {
    return {
        type: LOGIN_SUCCESS_ACTION,
    };
}

export function loginFailAction(error) {
    return {
        type: LOGIN_FAIL_ACTION,
        error,
    };
}
