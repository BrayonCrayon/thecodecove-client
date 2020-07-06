import {IBlogState} from "../store/StoreState";
import * as BlogActionTypes from "../action_types/BlogTypes";


const initialState: IBlogState = {
    pending: false,
    posts: [],
    error: {},
};

export function blogReducer(state = initialState, action: BlogActionTypes.BlogTypes) : IBlogState {
    switch(action.type)
    {
        case BlogActionTypes.FETCH_POSTS_PENDING:
            return {
                ...state,
                ...action,
            };
        case BlogActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                ...action,
            };
        case BlogActionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                ...action,
            };
        default:
            return state
    }
}