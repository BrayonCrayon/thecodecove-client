import {User} from "../dtos/User";
import {Post} from "../dtos/Post";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers/RootReducer";
import {Action} from "redux";


export interface IBaseState {
    pending: Boolean,
    error: Object,
}

export interface IAuthState extends IBaseState {
    user: User;
}

export interface IBlogState extends IBaseState {
    posts: Array<Post>,
}

export interface IStoreState {
    readonly authState: IAuthState;
    readonly blogState: IBlogState;
}

export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
