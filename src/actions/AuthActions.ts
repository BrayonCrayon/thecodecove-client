import {
    ILoginFailure, ILoginForm,
    ILoginPending,
    ILoginSuccess,
    LOGIN_FAILURE,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
} from "../action_types/AuthTypes";
import {User} from "../dtos/User";
import {AppThunkType} from "../store/StoreState";
import {apiAxios} from "../store/Store";

export function loginPending() : ILoginPending {
    return {
        type: LOGIN_PENDING,
        pending: true,
        error: {},
    }
}

export function loginSuccess(user: User) : ILoginSuccess {
    return {
        type: LOGIN_SUCCESS,
        pending: false,
        error: {},
        user,
    }
}

export function loginFailure(error: Object): ILoginFailure {
    return {
        type: LOGIN_FAILURE,
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
            await apiAxios.post('api/login', {
                ...payload,
            });
            // get logged in user
            const {user} = await apiAxios.get('api/auth/user');
            dispatch(loginSuccess(user));
        }
        catch (error) {
            dispatch(loginFailure(error));
        }
    }
};

