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
    error: {},
};

export function authReducer(state = initialState, action: AuthActionTypes.AuthTypes): IAuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN_PENDING:
            return {
                ...state,
                ...action,
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...action,
            };
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                ...action,
            };
        default:
            return state
    }
}