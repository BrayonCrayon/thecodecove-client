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
    loggedIn: Boolean,
}

export interface ILoginSuccess extends IBaseState {
    type: typeof LOGIN_SUCCESS,
    loggedIn: Boolean,
    user: User,
}

export interface ILoginFailure extends IBaseState {
    type: typeof LOGIN_FAILURE,
    loggedIn: Boolean,
}

/**
 * REGISTER
 */
export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface IRegisterForm {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
}

export interface IRegisterPending extends IBaseState {
    type: typeof REGISTER_PENDING,
    loggedIn: Boolean,
}

export interface IRegisterSuccess extends IBaseState {
    type: typeof REGISTER_SUCCESS,
    user: User,
    loggedIn: Boolean,
}

export interface IRegisterFailure extends IBaseState {
    type: typeof REGISTER_FAILURE,
    loggedIn: Boolean,
}

/**
 * LOGOUT
 */
export const LOGOUT_PENDING = "";
export const LOGOUT_SUCCESS = "";
export const LOGOUT_FAILURE = "";

export interface ILogoutPending extends IBaseState {
    type: typeof LOGOUT_PENDING,
}

export interface ILogoutSuccess extends IBaseState {
    type: typeof LOGOUT_SUCCESS,
    loggedIn: Boolean,
    user?: User,
}

export interface ILogoutFailure extends IBaseState {
    type: typeof LOGOUT_FAILURE,
}

/**
 * Logged In User Check
 */
export const SET_LOGGED_IN_PENDING = "SET_LOGGED_IN_PENDING";
export const SET_LOGGED_IN_SUCCESS = "SET_LOGGED_IN_SUCCESS";
export const SET_LOGGED_IN_FAILURE = "SET_LOGGED_IN_FAILURE";

export interface ISetLoggedInPending extends IBaseState {
    type: typeof SET_LOGGED_IN_PENDING,
}

export interface ISetLoggedInSuccess extends IBaseState {
    type: typeof SET_LOGGED_IN_SUCCESS,
    loggedIn: Boolean,
    user?: User,
}

export interface ISetLoggedInFailure extends IBaseState {
    type: typeof SET_LOGGED_IN_FAILURE,
}

/**
 * Social User Login (Github, Google, Twitter, Facebook)
 */
export const SOCIAL_LOGIN_REQUEST_PENDING = "SOCIAL_LOGIN_REQUEST_PENDING";
export const SOCIAL_LOGIN_REQUEST_SUCCESS = "SOCIAL_LOGIN_REQUEST_SUCCESS";
export const SOCIAL_LOGIN_REQUEST_FAILURE = "SOCIAL_LOGIN_REQUEST_FAILURE";

export interface ISocialLoginRequestPending extends IBaseState {
    type: typeof SOCIAL_LOGIN_REQUEST_PENDING,
}

export interface ISocialLoginRequestSuccess extends IBaseState {
    type: typeof SOCIAL_LOGIN_REQUEST_SUCCESS,
}

export interface ISocialLoginRequestFailure extends IBaseState {
    type: typeof SOCIAL_LOGIN_REQUEST_FAILURE,
}

/**
 * Social User Login Callback (Github, Google, Twitter, Facebook)
 */
export const SOCIAL_LOGIN_CALLBACK_PENDING = "SOCIAL_LOGIN_CALLBACK_PENDING";
export const SOCIAL_LOGIN_CALLBACK_SUCCESS = "SOCIAL_LOGIN_CALLBACK_SUCCESS";
export const SOCIAL_LOGIN_CALLBACK_FAILURE = "SOCIAL_LOGIN_CALLBACK_FAILURE";

export interface ISocialLoginCallbackPending extends IBaseState {
    type: typeof SOCIAL_LOGIN_CALLBACK_PENDING,
}

export interface ISocialLoginCallbackSuccess extends IBaseState {
    type: typeof SOCIAL_LOGIN_CALLBACK_SUCCESS,
    loggedIn: Boolean,
    user?: User,
}

export interface ISocialLoginCallbackFailure extends IBaseState {
    type: typeof SOCIAL_LOGIN_CALLBACK_FAILURE,
}

/**
 * Export Auth Types
 */
export type AuthTypes =
    ILoginPending | ILoginSuccess | ILoginFailure |
    IRegisterPending | IRegisterSuccess | IRegisterFailure |
    ILogoutPending | ILogoutSuccess | ILogoutFailure |
    ISetLoggedInPending | ISetLoggedInSuccess | ISetLoggedInFailure |
    ISocialLoginRequestPending | ISocialLoginRequestSuccess | ISocialLoginRequestFailure |
    ISocialLoginCallbackPending | ISocialLoginCallbackSuccess | ISocialLoginCallbackFailure;