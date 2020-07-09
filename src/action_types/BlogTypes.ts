import {IBaseState} from "../store/StoreState";
import {Post} from "../dtos/Post";

/*
 * Blog Post Fetch
 */
export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export interface IFetchPostsPending extends IBaseState {
    type: typeof FETCH_POSTS_PENDING,
}

export interface IFetchPostsSuccess extends IBaseState {
    type: typeof FETCH_POSTS_SUCCESS,
    posts: Array<Post>,
}

export interface IFetchPostsFailure extends IBaseState {
    type: typeof FETCH_POSTS_FAILURE,
    error: Object,
}

/**
 * Set Posts Search Term
 */
export const SET_POSTS_SEARCH_TERM_PENDING = "SET_POSTS_SEARCH_TERM_PENDING";
export const SET_POSTS_SEARCH_TERM_SUCCESS = "SET_POSTS_SEARCH_TERM_SUCCESS";
export const SET_POSTS_SEARCH_TERM_FAILURE = "SET_POSTS_SEARCH_TERM_FAILURE";

export interface ISetPostsSearchTermPending extends IBaseState {
    type: typeof SET_POSTS_SEARCH_TERM_PENDING
}

export interface ISetPostsSearchTermSuccess extends IBaseState {
    type: typeof SET_POSTS_SEARCH_TERM_SUCCESS,
    searchTerm: string,
}

export interface ISetPostsSearchTermFailure extends IBaseState {
    type: typeof SET_POSTS_SEARCH_TERM_FAILURE
}

/*
 * Export Blog Types
 */
export type BlogTypes =
    IFetchPostsPending |
    IFetchPostsSuccess |
    IFetchPostsFailure |
    ISetPostsSearchTermPending |
    ISetPostsSearchTermSuccess |
    ISetPostsSearchTermFailure;