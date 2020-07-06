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

/*
 * Export Blog Types
 */
export type BlogTypes =
    IFetchPostsPending |
    IFetchPostsSuccess |
    IFetchPostsFailure;