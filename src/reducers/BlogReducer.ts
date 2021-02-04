import {IBlogState} from "../store/StoreState";
import * as BlogActionTypes from "../action_types/BlogTypes";
import {findPostById} from "./Helper";
import {Post} from "../dtos/Post";
import {ApiError} from "../dtos/ApiError";


const initialState: IBlogState = {
    posts: [],
    post: new Post(),
    draftedPosts: [],
    searchTerm: '',
    statuses: [],
    type: "",
    pending: false,
    error: new ApiError(),
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
            } as IBlogState;
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
            state.draftedPosts.unshift(action.post);
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
        case BlogActionTypes.DELETE_POST_PENDING:
        case BlogActionTypes.DELETE_POST_FAILURE:
        case BlogActionTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.REMOVE_PUBLISHED_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.post.id),
            }
        case BlogActionTypes.REMOVE_DRAFTED_POST:
            return {
                ...state,
                draftedPosts: state.draftedPosts.filter(p => p.id !== action.post.id),
            }
        case BlogActionTypes.FETCH_COMMENTS_PENDING:
        case BlogActionTypes.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: action.comments,
                }
            }
        case BlogActionTypes.FETCH_NESTED_COMMENTS_PENDING:
        case BlogActionTypes.FETCH_NESTED_COMMENTS_FAILURE:
        case BlogActionTypes.FETCH_NESTED_COMMENTS_SUCCESS:
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.ADD_COMMENT_PENDING:
        case BlogActionTypes.ADD_COMMENT_FAILURE:
            return {
                ...state,
                ...action,
            }
        case BlogActionTypes.ADD_COMMENT_SUCCESS:
            state.post.comments.unshift(action.comment);
            return {
                ...state,
                error: action.error,

            }
        case BlogActionTypes.ADD_NESTED_COMMENT_PENDING:
        case BlogActionTypes.ADD_NESTED_COMMENT_SUCCESS:
        case BlogActionTypes.ADD_NESTED_COMMENT_FAILURE:
            return {
                ...state,
                ...action,
            }
        default:
            return state
    }
}