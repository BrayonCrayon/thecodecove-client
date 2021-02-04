import {User} from "../dtos/User";
import {Post} from "../dtos/Post";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers/RootReducer";
import {Action} from "redux";
import {IProject} from "../dtos/Project";
import {IStatus} from "../dtos/Status";
import {AxiosError} from 'axios';


export interface IBaseState {
    pending: Boolean,
    error: AxiosError,
    type: string,
}

export interface IAuthState extends IBaseState {
    user?: User;
    loggedIn: Boolean,
}

export interface IBlogState extends IBaseState {
    posts: Array<Post>,
    post: Post,
    draftedPosts: Array<Post>,
    searchTerm: string,
    statuses: Array<IStatus>
}

export interface IAboutMeState extends IBaseState {
    projects: Array<IProject>,
    workExperience: Array<IProject>,
}

export interface IStoreState {
    readonly authState: IAuthState;
    readonly blogState: IBlogState;
    readonly aboutMeState: IAboutMeState;
}

export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
