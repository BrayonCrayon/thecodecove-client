import {User} from "../dtos/User";
import {Post} from "../dtos/Post";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers/RootReducer";
import {Action} from "redux";
import {IProject} from "../dtos/IProject";
import {IStatus} from "../dtos/IStatus";


export interface IBaseState {
    pending: Boolean,
    error: Object,
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

export function getInitialPostObj() : Post
{
    return {
        content: '',
        created_at: new Date(),
        status_id: 1,
        id: -1,
        name: '',
        updated_at: new Date(),
        user: undefined,
        user_id: -1,
    }
}
