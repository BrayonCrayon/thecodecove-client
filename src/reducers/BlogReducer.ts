import {getInitialPostObj, IBlogState} from "../store/StoreState";
import * as BlogActionTypes from "../action_types/BlogTypes";
import {findPostById} from "./Helper";


const initialState: IBlogState = {
    pending: false,
    posts: [],
    post: getInitialPostObj(),
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
        case BlogActionTypes.SET_POST:
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.SET_POST_BY_ID:
            return {
                ...state,
                post: findPostById(action.postId, state.posts),
            }
        case BlogActionTypes.FETCH_POST_PENDING:
        case BlogActionTypes.FETCH_POST_SUCCESS:
        case BlogActionTypes.FETCH_POST_FAILURE:
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.CREATE_POST_PENDING:
        case BlogActionTypes.CREATE_POST_FAILURE:
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.CREATE_POST_SUCCESS:
            state.posts.unshift(action.post);
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.UPDATE_POST_PENDING:
        case BlogActionTypes.UPDATE_POST_SUCCESS:
        case BlogActionTypes.UPDATE_POST_FAILURE:
            return {
                ...state,
                ...action,
            }
        default:
            return state
    }
}