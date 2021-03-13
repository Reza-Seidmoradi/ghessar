/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { LOGIN_ACTION, LOGIN_FAIL_ACTION, LOGIN_SUCCESS_ACTION } from './constants';

export const initialState = {
    login: {
        username: null,
        password: null,
        error: null,
    },
};

const loginReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case LOGIN_ACTION:
                draft.login.username = action.username;
                draft.login.password = action.password;
                draft.login.error = null;
                break;
            case LOGIN_SUCCESS_ACTION:
                draft.login.username = null;
                draft.login.password = null;
                draft.login.error = null;
                break;
            case LOGIN_FAIL_ACTION:
                draft.login.username = null;
                draft.login.password = null;
                draft.login.error = action.error;
                break;
        }
    });

export default loginReducer;
