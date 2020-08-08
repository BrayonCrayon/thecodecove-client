import * as AuthTypes from "../action_types/AuthTypes";
import {User} from "../dtos/User";
import {AppThunkType} from "../store/StoreState";
import {apiAxios} from "../store/Store";
import {fetchDraftedPosts} from "./BlogActions";

/**
 * LOGIN ACTION
 */

export function loginPending() : AuthTypes.ILoginPending {
    return {
        type: AuthTypes.LOGIN_PENDING,
        loggedIn: false,
        pending: true,
        error: {},
    }
}

export function loginSuccess(user: User) : AuthTypes.ILoginSuccess {
    return {
        type: AuthTypes.LOGIN_SUCCESS,
        loggedIn: true,
        pending: false,
        error: {},
        user,
    }
}

export function loginFailure(error: Object): AuthTypes.ILoginFailure {
    return {
        type: AuthTypes.LOGIN_FAILURE,
        loggedIn: false,
        pending: false,
        error,
    }
}

export const loginAction = (payload: AuthTypes.ILoginForm) : AppThunkType => {
    return async dispatch => {
        try {
            dispatch(loginPending());
            // get required cookies
            await apiAxios.get(`sanctum/csrf-cookie`);
            // attempt to login user
            await apiAxios.post('login', {
                ...payload,
            });
            // get logged in user
            const {data} = await apiAxios.get('api/auth/user');
            await dispatch(loginSuccess(data.user));
            dispatch(fetchDraftedPosts());
        }
        catch (error) {
            dispatch(loginFailure(error));
        }
    }
};


/**
 * LOGOUT ACTION
 */

export function logoutPending() : AuthTypes.ILogoutPending {
    return {
        type: AuthTypes.LOGOUT_PENDING,
        pending: true,
        error: {}
    }
}

export function logoutSuccess() : AuthTypes.ILogoutSuccess {
    return {
        type: AuthTypes.LOGOUT_SUCCESS,
        pending: false,
        user: undefined,
        loggedIn: false,
        error: {},
    }
}

export function logoutFailure(error: Object) : AuthTypes.ILogoutFailure {
    return {
        type: AuthTypes.LOGOUT_FAILURE,
        pending: false,
        error,
    }
}

export const logout = () : AppThunkType => {
    return async dispatch => {
        try {
            dispatch(logoutPending());
            await apiAxios.post('logout');
            dispatch(logoutSuccess());
        }
        catch (error) {
            dispatch(logoutFailure(error));
        }
    }
};



/**
 * REGISTER ACTION
 */
export function registerPending() : AuthTypes.IRegisterPending {
    return {
        type: AuthTypes.REGISTER_PENDING,
        pending: true,
        loggedIn: false,
        error: {}
    }
}

export function registerSuccess(user: User) : AuthTypes.IRegisterSuccess {
    return {
        type: AuthTypes.REGISTER_SUCCESS,
        pending: false,
        user,
        loggedIn: true,
        error: {}
    }
}

export function registerFailure(error: Object) : AuthTypes.IRegisterFailure {
    return {
        type: AuthTypes.REGISTER_FAILURE,
        pending: false,
        loggedIn: false,
        error,
    }
}

export const register = (payload: AuthTypes.IRegisterForm) : AppThunkType => {
    return async dispatch => {
        try {
            dispatch(registerPending());
            await apiAxios.post('register', {
                ...payload,
            });
            const [user] = await apiAxios.get('api/auth/user');
            dispatch(registerSuccess(user));
        }
        catch (error)
        {
            dispatch(registerFailure(error));
        }
    }
};


/**
 * Set Logged In Action
 */
export function setLoggedInPending() : AuthTypes.ISetLoggedInPending {
    return {
        type: AuthTypes.SET_LOGGED_IN_PENDING,
        pending: true,
        error: {},
    }
}

export function setLoggedInSuccess(user: User) : AuthTypes.ISetLoggedInSuccess {
    return {
        type: AuthTypes.SET_LOGGED_IN_SUCCESS,
        user,
        loggedIn: true,
        pending: false,
        error: {}
    }
}

export function setLoggedInFailure(error: Object) : AuthTypes.ISetLoggedInFailure {
    return {
        type: AuthTypes.SET_LOGGED_IN_FAILURE,
        pending: false,
        error
    }
}

export const setLoggedIn = () : AppThunkType => {
    return async dispatch => {
        try {
            dispatch(setLoggedInPending());
            const {data} = await apiAxios.get('api/auth/user');
            dispatch(setLoggedInSuccess(data.user));
        }
        catch(error) {
            dispatch(setLoggedInFailure(error));
        }
    }
}

/**
 * Social Login
 */
export function socialLoginRequestPending() : AuthTypes.ISocialLoginRequestPending {
    return {
        type: AuthTypes.SOCIAL_LOGIN_REQUEST_PENDING,
        pending: true,
        error: {}
    }
}

export function socialLoginRequestSuccess() : AuthTypes.ISocialLoginRequestSuccess {
    return {
        type: AuthTypes.SOCIAL_LOGIN_REQUEST_SUCCESS,
        pending: false,
        error: {},
    }
}

export function socialLoginRequestFailure(error: Object) : AuthTypes.ISocialLoginRequestFailure {
    return {
        type: AuthTypes.SOCIAL_LOGIN_REQUEST_FAILURE,
        pending: false,
        error,
    }
}

interface ISocialLoginRequest {
    social: string,
}

export const socialLoginRequest = (payload: ISocialLoginRequest) : AppThunkType => {
    return async dispatch => {
        try
        {
            dispatch(socialLoginRequestPending());
            const {data} = await apiAxios.post('api/login/social', payload);
            console.log(data);
            window.open(data.targetUrl);
            dispatch(socialLoginRequestSuccess());
        }
        catch (error)
        {
            dispatch(socialLoginRequestFailure(error));
        }
    }
}

/**
 * Social Login Callback
 */

export function socialLoginCallbackPending() : AuthTypes.ISocialLoginCallbackPending {
    return {
        type: AuthTypes.SOCIAL_LOGIN_CALLBACK_PENDING,
        pending: true,
        error: {},
    }
}

export function socialLoginCallbackSuccess(user: User) : AuthTypes.ISocialLoginCallbackSuccess {
    return {
        type: AuthTypes.SOCIAL_LOGIN_CALLBACK_SUCCESS,
        user,
        loggedIn: true,
        pending: false,
        error: {},
    }
}

export function socialLoginCallbackFailure(error: Object) : AuthTypes.ISocialLoginCallbackFailure {
    return {
        type: AuthTypes.SOCIAL_LOGIN_CALLBACK_FAILURE,
        pending: false,
        error,
    }
}

interface ISocialLoginCallbackProps {
    code: string,
    social: string,
}

export const socialLoginCallback = (payload: ISocialLoginCallbackProps) : AppThunkType => {
    return async dispatch => {
        try
        {
            dispatch(socialLoginCallbackPending());
            const {data} = await apiAxios.get('api/login/social/callback', {
                params: {
                    ...payload,
                }
            });
            console.log(data);
            dispatch(socialLoginCallbackSuccess(data.user));
        }
        catch (error)
        {
            dispatch(socialLoginCallbackFailure(error));
        }
    }
}