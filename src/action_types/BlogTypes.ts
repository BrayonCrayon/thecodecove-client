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

/**
 * Set Post
 */
export const SET_POST = "SET_POST";

export interface ISetPost extends IBaseState {
    type: typeof SET_POST,
    post: Post,
}

/**
 * Set Post By ID
 */
export const SET_POST_BY_ID = "SET_POST_BY_ID";

export interface ISetPostById extends IBaseState {
    type: typeof SET_POST_BY_ID,
    postId: number,
}

/**
 * Fetch Post
 */
export const FETCH_POST_PENDING = "FETCH_POST_PENDING";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export interface IFetchPostPending extends IBaseState {
    type: typeof FETCH_POST_PENDING,
}

export interface IFetchPostSuccess extends IBaseState {
    type: typeof FETCH_POST_SUCCESS,
    post: Post,
}

export interface IFetchPostFailure extends IBaseState {
    type: typeof FETCH_POST_FAILURE,
}

/**
 * Create Post
 */
export const CREATE_POST_PENDING = "CREATE_POST_PENDING";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export interface ICreatePostPending extends IBaseState {
    type: typeof CREATE_POST_PENDING,
}

export interface ICreatePostSuccess extends IBaseState {
    type: typeof CREATE_POST_SUCCESS,
    post: Post,
}

export interface ICreatePostFailure extends IBaseState {
    type: typeof CREATE_POST_FAILURE,
}

/**
 * Update Post
 */
export const UPDATE_POST_PENDING = "UPDATE_POST_PENDING";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export interface IUpdatePostPending extends IBaseState {
    type: typeof UPDATE_POST_PENDING,
}

export interface IUpdatePostSuccess extends IBaseState {
    type: typeof UPDATE_POST_SUCCESS,
}

export interface IUpdatePostFailure extends IBaseState {
    type: typeof UPDATE_POST_FAILURE,
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
    ISetPostsSearchTermFailure |
    ISetPost |
    ISetPostById |
    IFetchPostPending |
    IFetchPostSuccess |
    IFetchPostFailure |
    ICreatePostPending |
    ICreatePostSuccess |
    ICreatePostFailure |
    IUpdatePostPending |
    IUpdatePostSuccess |
    IUpdatePostFailure;