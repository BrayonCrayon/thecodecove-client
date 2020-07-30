import * as AuthActionTypes from '../action_types/AuthTypes';
import {IAuthState} from "../store/StoreState";

const initialState: IAuthState = {
    pending: false,
    user: {
        id: -1,
        email: '',
        emailVerified: undefined,
        name: '',
    },
    loggedIn: false,
    error: {},
};

export function authReducer(state = initialState, action: AuthActionTypes.AuthTypes): IAuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN_PENDING:
        case AuthActionTypes.LOGIN_SUCCESS:
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                ...action,
            };
        case AuthActionTypes.LOGOUT_PENDING:
        case AuthActionTypes.LOGOUT_SUCCESS:
        case AuthActionTypes.LOGOUT_FAILURE:
            return {
                ...state,
                ...action,
            };
        case AuthActionTypes.REGISTER_PENDING:
        case AuthActionTypes.REGISTER_SUCCESS:
        case AuthActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                ...action,
            };
        case AuthActionTypes.SET_LOGGED_IN_PENDING:
        case AuthActionTypes.SET_LOGGED_IN_SUCCESS:
        case AuthActionTypes.SET_LOGGED_IN_FAILURE:
            return {
                ...state,
                ...action,
            }
        default:
            return state
    }
}