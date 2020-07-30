import {
    ILoginFailure,
    ILoginForm,
    ILoginPending,
    ILoginSuccess,
    ILogoutFailure,
    ILogoutPending,
    ILogoutSuccess,
    IRegisterFailure,
    IRegisterForm,
    IRegisterPending,
    IRegisterSuccess,
    ISetLoggedInFailure,
    ISetLoggedInPending,
    ISetLoggedInSuccess,
    LOGIN_FAILURE,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_PENDING,
    LOGOUT_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_PENDING,
    REGISTER_SUCCESS,
    SET_LOGGED_IN_FAILURE,
    SET_LOGGED_IN_PENDING,
    SET_LOGGED_IN_SUCCESS
} from "../action_types/AuthTypes";
import {User} from "../dtos/User";
import {AppThunkType} from "../store/StoreState";
import {apiAxios} from "../store/Store";

/**
 * LOGIN ACTION
 */

export function loginPending() : ILoginPending {
    return {
        type: LOGIN_PENDING,
        loggedIn: false,
        pending: true,
        error: {},
    }
}

export function loginSuccess(user: User) : ILoginSuccess {
    return {
        type: LOGIN_SUCCESS,
        loggedIn: true,
        pending: false,
        error: {},
        user,
    }
}

export function loginFailure(error: Object): ILoginFailure {
    return {
        type: LOGIN_FAILURE,
        loggedIn: false,
        pending: false,
        error,
    }
}

export const loginAction = (payload: ILoginForm) : AppThunkType => {
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
            dispatch(loginSuccess(data.user));
        }
        catch (error) {
            dispatch(loginFailure(error));
        }
    }
};


/**
 * LOGOUT ACTION
 */

export function logoutPending() : ILogoutPending {
    return {
        type: LOGOUT_PENDING,
        pending: true,
        error: {}
    }
}

export function logoutSuccess() : ILogoutSuccess {
    return {
        type: LOGOUT_SUCCESS,
        pending: false,
        user: undefined,
        loggedIn: false,
        error: {},
    }
}

export function logoutFailure(error: Object) : ILogoutFailure {
    return {
        type: LOGOUT_FAILURE,
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
export function registerPending() : IRegisterPending {
    return {
        type: REGISTER_PENDING,
        pending: true,
        loggedIn: false,
        error: {}
    }
}

export function registerSuccess(user: User) : IRegisterSuccess {
    return {
        type: REGISTER_SUCCESS,
        pending: false,
        user,
        loggedIn: true,
        error: {}
    }
}

export function registerFailure(error: Object) : IRegisterFailure {
    return {
        type: REGISTER_FAILURE,
        pending: false,
        loggedIn: false,
        error,
    }
}

export const register = (payload: IRegisterForm) : AppThunkType => {
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
export function setLoggedInPending() : ISetLoggedInPending {
    return {
        type: SET_LOGGED_IN_PENDING,
        pending: true,
        error: {},
    }
}

export function setLoggedInSuccess(user: User) : ISetLoggedInSuccess {
    return {
        type: SET_LOGGED_IN_SUCCESS,
        user,
        loggedIn: true,
        pending: false,
        error: {}
    }
}

export function setLoggedInFailure(error: Object) : ISetLoggedInFailure {
    return {
        type: SET_LOGGED_IN_FAILURE,
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