import {getInitialPostObj, IBlogState} from "../store/StoreState";
import * as BlogActionTypes from "../action_types/BlogTypes";
import {findPostById} from "./Helper";


const initialState: IBlogState = {
    pending: false,
    posts: [],
    post: getInitialPostObj(),
    draftedPosts: [],
    error: {},
    searchTerm: '',
    statuses: [],
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
        case BlogActionTypes.FETCH_STATUSES_PENDING:
        case BlogActionTypes.FETCH_STATUSES_SUCCESS:
        case BlogActionTypes.FETCH_STATUSES_FAILURE:
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.SET_POST_NAME:
            return {
                ...state,
                post: {
                    ...state.post,
                    name: action.name,
                }
            }
        case BlogActionTypes.SET_POST_CONTENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    content: action.content,
                }
            }
        case BlogActionTypes.SET_POST_STATUS:
            return {
                ...state,
                post: {
                    ...state.post,
                    status_id: action.status.id,
                }
            }
        case BlogActionTypes.FETCH_DRAFTED_POSTS_PENDING:
        case BlogActionTypes.FETCH_DRAFTED_POSTS_SUCCESS:
        case BlogActionTypes.FETCH_DRAFTED_POSTS_FAILURE:
            return {
                ...state,
                ...action,
            }
        default:
            return state
    }
}