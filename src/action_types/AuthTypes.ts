import {User} from "../dtos/User";
import {IBaseState} from "../store/StoreState";

/**
 * LOGIN
 */
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export interface ILoginForm {
    email: string;
    password: string;
}

export interface ILoginPending extends IBaseState {
    type: typeof LOGIN_PENDING,
}

export interface ILoginSuccess extends IBaseState {
    type: typeof LOGIN_SUCCESS,
    user: User,
}

export interface ILoginFailure extends IBaseState {
    type: typeof LOGIN_FAILURE,
    error: Object,
}

/**
 * REGISTER
 */
export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface IRegisterPending {
    type: typeof REGISTER_PENDING,
}

export interface IRegisterSuccess {
    type: typeof REGISTER_SUCCESS,
    user: User,
}

export interface IRegisterFailure {
    type: typeof REGISTER_FAILURE,
    error: Object,
}

/**
 * Export Auth Types
 */
export type AuthTypes =
    ILoginPending | ILoginSuccess | ILoginFailure |
    IRegisterPending | IRegisterSuccess | IRegisterFailure;