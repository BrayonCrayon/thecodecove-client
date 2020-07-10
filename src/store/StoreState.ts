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
    user?: User;
    loggedIn: Boolean,
}

export interface IBlogState extends IBaseState {
    posts: Array<Post>,
    post: Post,
    searchTerm: string,
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

export function getInitialPostObj() : Post
{
    return {
        content: '',
        created_at: new Date(),
        id: -1,
        name: '',
        updated_at: new Date(),
        user: undefined,
        user_id: -1,
    }
}
