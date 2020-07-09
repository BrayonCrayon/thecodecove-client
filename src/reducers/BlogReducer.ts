import {IBlogState} from "../store/StoreState";
import * as BlogActionTypes from "../action_types/BlogTypes";


const initialState: IBlogState = {
    pending: false,
    posts: [],
    error: {},
    searchTerm: '',
};

export function blogReducer(state = initialState, action: BlogActionTypes.BlogTypes) : IBlogState {
    switch(action.type)
    {
        case BlogActionTypes.FETCH_POSTS_PENDING:
        case BlogActionTypes.FETCH_POSTS_SUCCESS:
        case BlogActionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                ...action,
            };
        case BlogActionTypes.SET_POSTS_SEARCH_TERM_PENDING:
        case BlogActionTypes.SET_POSTS_SEARCH_TERM_SUCCESS:
        case BlogActionTypes.SET_POSTS_SEARCH_TERM_FAILURE:
            return {
                ...state,
                ...action,
            }
        default:
            return state
    }
}