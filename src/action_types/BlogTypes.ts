import {IBaseState} from "../store/StoreState";
import {Post} from "../dtos/Post";
import {IStatus} from "../dtos/Status";
import {IComment} from "../dtos/Comment";

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
    post: Post
}

export interface IUpdatePostFailure extends IBaseState {
    type: typeof UPDATE_POST_FAILURE,
}

/**
 * Fetch Statuses
 */
export const FETCH_STATUSES_PENDING = "FETCH_STATUSES_PENDING";
export const FETCH_STATUSES_SUCCESS = "FETCH_STATUSES_SUCCESS";
export const FETCH_STATUSES_FAILURE = "FETCH_STATUSES_FAILURE";

export interface IFetchStatusesPending extends IBaseState {
    type: typeof FETCH_STATUSES_PENDING,
}

export interface IFetchStatusesSuccess extends IBaseState {
    type: typeof FETCH_STATUSES_SUCCESS,
    statuses: Array<IStatus>
}

export interface IFetchStatusesFailure extends IBaseState {
    type: typeof FETCH_STATUSES_FAILURE,
}

/**
 * Update Selected Post Values
 */
export const SET_POST_NAME = "SET_POST_NAME";
export const SET_POST_CONTENT = "SET_POST_CONTENT";
export const SET_POST_STATUS = "SET_POST_STATUS";

export interface ISetPostName extends IBaseState {
    type: typeof SET_POST_NAME,
    name: string,
}

export interface ISetPostContent extends IBaseState {
    type: typeof SET_POST_CONTENT
    content: string,
}

export interface ISetPostStatus extends IBaseState {
    type: typeof SET_POST_STATUS,
    status: IStatus
}

/**
 * Fetch Drafted Posts
 */
export const FETCH_DRAFTED_POSTS_PENDING = "FETCH_DRAFTED_POSTS_PENDING";
export const FETCH_DRAFTED_POSTS_SUCCESS = "FETCH_DRAFTED_POSTS_SUCCESS";
export const FETCH_DRAFTED_POSTS_FAILURE = "FETCH_DRAFTED_POSTS_FAILURE";

export interface IFetchDraftedPostsPending extends IBaseState {
    type: typeof FETCH_DRAFTED_POSTS_PENDING,
}

export interface IFetchDraftedPostsSuccess extends IBaseState {
    type: typeof FETCH_DRAFTED_POSTS_SUCCESS,
    draftedPosts: Array<Post>,
}

export interface IFetchDraftedPostsFailure extends IBaseState {
    type: typeof FETCH_DRAFTED_POSTS_FAILURE,
}


/**
 * Delete Post
 */
export const DELETE_POST_PENDING = "DELETE_POST_PENDING";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export interface IDeletePostPending extends IBaseState {
    type: typeof DELETE_POST_PENDING,
}

export interface IDeletePostSuccess extends IBaseState {
    type: typeof DELETE_POST_SUCCESS,
}

export interface IDeletePostFailure extends IBaseState {
    type: typeof DELETE_POST_FAILURE,
}

/**
 * Remove post from published listing
 */
export const REMOVE_PUBLISHED_POST = "REMOVE_PUBLISHED_POST";

export interface IRemovePublishedPost extends IBaseState {
    type: typeof REMOVE_PUBLISHED_POST,
    post: Post,
}

/**
 * Remove post from drafted listing
 */
export const REMOVE_DRAFTED_POST = "REMOVE_DRAFTED_POST";

export interface IRemoveDraftedPost extends IBaseState {
    type: typeof REMOVE_DRAFTED_POST,
    post: Post,
}

/**
 * Fetch Comments
 */
export const FETCH_COMMENTS_PENDING = "FETCH_COMMENTS_PENDING";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export interface IFetchCommentsPending extends IBaseState {
    type: typeof FETCH_COMMENTS_PENDING,
}

export interface IFetchCommentsSuccess extends IBaseState {
    type: typeof FETCH_COMMENTS_SUCCESS,
    comments: Array<IComment>,
}

export interface IFetchCommentsFailure extends IBaseState {
    type: typeof FETCH_COMMENTS_FAILURE,
}

/**
 * Fetch Nested Comments
 */
export const FETCH_NESTED_COMMENTS_PENDING = "FETCH_NESTED_COMMENTS_PENDING";
export const FETCH_NESTED_COMMENTS_SUCCESS = "FETCH_NESTED_COMMENTS_SUCCESS";
export const FETCH_NESTED_COMMENTS_FAILURE = "FETCH_NESTED_COMMENTS_FAILURE";

export interface IFetchNestedCommentsPending extends IBaseState {
    type: typeof FETCH_NESTED_COMMENTS_PENDING,
}

export interface IFetchNestedCommentsSuccess extends IBaseState {
    type: typeof FETCH_NESTED_COMMENTS_SUCCESS,
}

export interface IFetchNestedCommentsFailure extends IBaseState {
    type: typeof FETCH_NESTED_COMMENTS_FAILURE,
}

/**
 * Add Comment
 */
export const ADD_COMMENT_PENDING = "ADD_COMMENT_PENDING";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export interface IAddCommentPending extends IBaseState {
    type: typeof ADD_COMMENT_PENDING,
}

export interface IAddCommentSuccess extends IBaseState {
    type: typeof ADD_COMMENT_SUCCESS,
    comment: IComment,
}

export interface IAddCommentFailure extends IBaseState {
    type: typeof ADD_COMMENT_FAILURE
}

/**
 * Add Nested Comment
 */

export const ADD_NESTED_COMMENT_PENDING = "ADD_NESTED_COMMENT_PENDING";
export const ADD_NESTED_COMMENT_SUCCESS = "ADD_NESTED_COMMENT_SUCCESS";
export const ADD_NESTED_COMMENT_FAILURE = "ADD_NESTED_COMMENT_FAILURE";

export interface IAddNestedCommentPending extends IBaseState {
    type: typeof ADD_NESTED_COMMENT_PENDING,
}

export interface IAddNestedCommentSuccess extends IBaseState {
    type: typeof ADD_NESTED_COMMENT_SUCCESS,
}

export interface IAddNestedCommentFailure extends IBaseState {
    type: typeof ADD_NESTED_COMMENT_FAILURE
}

/**
 * Update Comment
 */
export const UPDATE_COMMENT_PENDING = "UPDATE_COMMENT_PENDING";
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
export const UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE";

export interface IUpdateCommentPending extends IBaseState {
    type: typeof UPDATE_COMMENT_PENDING,
}

export interface IUpdateCommentSuccess extends IBaseState {
    type: typeof UPDATE_COMMENT_SUCCESS,
}

export interface IUpdateCommentFailure extends IBaseState {
    type: typeof UPDATE_COMMENT_FAILURE,
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
    IUpdatePostFailure |
    IFetchStatusesPending |
    IFetchStatusesSuccess |
    IFetchStatusesFailure |
    ISetPostName |
    ISetPostContent |
    ISetPostStatus |
    IFetchDraftedPostsPending |
    IFetchDraftedPostsSuccess |
    IFetchDraftedPostsFailure |
    IDeletePostPending |
    IDeletePostSuccess |
    IDeletePostFailure |
    IRemovePublishedPost |
    IRemoveDraftedPost |
    IFetchCommentsPending |
    IFetchCommentsSuccess |
    IFetchCommentsFailure |
    IFetchNestedCommentsPending |
    IFetchNestedCommentsSuccess |
    IFetchNestedCommentsFailure |
    IAddCommentPending |
    IAddCommentSuccess |
    IAddCommentFailure |
    IAddNestedCommentPending |
    IAddNestedCommentSuccess |
    IAddNestedCommentFailure |
    IUpdateCommentPending |
    IUpdateCommentSuccess |
    IUpdateCommentFailure;