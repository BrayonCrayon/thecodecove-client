import {AppThunkType} from "../store/StoreState";
import {apiAxios} from "../store/Store";
import * as BlogActionTypes from "../action_types/BlogTypes";
import {Post} from "../dtos/Post";
import {IStatus} from "../dtos/IStatus";


export function FetchPostsPending(): BlogActionTypes.IFetchPostsPending {
    return {
        type: BlogActionTypes.FETCH_POSTS_PENDING,
        pending: true,
        error: {},
    }
}

export function FetchPostsSuccess(posts: Array<Post>): BlogActionTypes.IFetchPostsSuccess {
    return {
        type: BlogActionTypes.FETCH_POSTS_SUCCESS,
        pending: false,
        posts,
        error: {},
    }
}

export function FetchPostsFailure(error: Object): BlogActionTypes.IFetchPostsFailure {
    return {
        type: BlogActionTypes.FETCH_POSTS_FAILURE,
        pending: false,
        error,
    }
}

export const fetchPosts = (): AppThunkType => {
    return async dispatch => {
        try {
            dispatch(FetchPostsPending());
            const {data} = await apiAxios.get('api/posts');
            dispatch(FetchPostsSuccess(data));
        } catch (error) {
            dispatch(FetchPostsFailure(error));
        }
    }
};

/**
 * Set Posts Search Term Action
 */
export function setPostsSearchTermPending(): BlogActionTypes.ISetPostsSearchTermPending {
    return {
        type: BlogActionTypes.SET_POSTS_SEARCH_TERM_PENDING,
        pending: true,
        error: {}
    }
}

export function setPostsSearchTermSuccess(searchTerm: string): BlogActionTypes.ISetPostsSearchTermSuccess {
    return {
        type: BlogActionTypes.SET_POSTS_SEARCH_TERM_SUCCESS,
        pending: true,
        error: {},
        searchTerm,
    }
}

export function setPostsSearchTermFailure(error: Object): BlogActionTypes.ISetPostsSearchTermFailure {
    return {
        type: BlogActionTypes.SET_POSTS_SEARCH_TERM_FAILURE,
        pending: false,
        error,
    }
}

export const setPostsSearchTerm = (searchTerm: string): AppThunkType => {
    return async dispatch => {
        try {
            dispatch(setPostsSearchTermPending());
            dispatch(setPostsSearchTermSuccess(searchTerm));
        } catch (error) {
            dispatch(setPostsSearchTermFailure(error));
        }
    }
}

/**
 * Set Post
 */
export function setPostAction(post: Post): BlogActionTypes.ISetPost {
    return {
        type: BlogActionTypes.SET_POST,
        post,
        error: {},
        pending: false,
    }
}

export const setPost = (post: Post): AppThunkType => {
    return async dispatch => {
        dispatch(setPostAction(post));
    }
}

/**
 * Set Post By ID
 */
export function setPostByIdAction(postId: number): BlogActionTypes.ISetPostById {
    return {
        type: BlogActionTypes.SET_POST_BY_ID,
        postId,
        error: {},
        pending: false,
    }
}

export const setPostById = (postId: number): AppThunkType => {
    return async dispatch => {
        dispatch(setPostByIdAction(postId));
    }
}

/**
 * Fetch Post
 */
export function fetchPostPending(): BlogActionTypes.IFetchPostPending {
    return {
        type: BlogActionTypes.FETCH_POST_PENDING,
        pending: true,
        error: {},
    }
}

export function fetchPostSuccess(post: Post): BlogActionTypes.IFetchPostSuccess {
    return {
        type: BlogActionTypes.FETCH_POST_SUCCESS,
        post,
        pending: false,
        error: {},
    }
}

export function fetchPostFailure(error: Object): BlogActionTypes.IFetchPostFailure {
    return {
        type: BlogActionTypes.FETCH_POST_FAILURE,
        error,
        pending: false,
    }
}

export const fetchPost = (id: number): AppThunkType => {
    return async dispatch => {
        try {
            dispatch(fetchPostPending());
            const {data} = await apiAxios.get(`api/posts/${id}`);
            dispatch(fetchPostSuccess(data));
        } catch (error) {
            dispatch(fetchPostFailure(error));
        }
    }
}

/**
 * Create Post
 */
export function createPostPending(): BlogActionTypes.ICreatePostPending {
    return {
        type: BlogActionTypes.CREATE_POST_PENDING,
        pending: true,
        error: {},
    }
}

export function createPostSuccess(post: Post): BlogActionTypes.ICreatePostSuccess {
    return {
        type: BlogActionTypes.CREATE_POST_SUCCESS,
        post,
        pending: false,
        error: {},
    }
}

export function createPostFailure(error: Object): BlogActionTypes.ICreatePostFailure {
    return {
        type: BlogActionTypes.CREATE_POST_FAILURE,
        pending: false,
        error,
    }
}

interface ICreatePostPayload {
    userId: number,
    name: string,
    content: string,
}

export const createPost = (payload: ICreatePostPayload): AppThunkType => {
    return async dispatch => {
        try {
            dispatch(createPostPending());
            const {data} = await apiAxios.post('api/posts/store', {
                ...payload
            });
            dispatch(createPostSuccess(data));
        } catch (error) {
            dispatch(createPostFailure(error));
        }
    }
}

/**
 * Update Post
 */
export function updatePostPending() : BlogActionTypes.IUpdatePostPending {
    return {
        type: BlogActionTypes.UPDATE_POST_PENDING,
        pending: true,
        error: {},
    }
}

export function updatePostSuccess() : BlogActionTypes.IUpdatePostSuccess {
    return {
        type: BlogActionTypes.UPDATE_POST_SUCCESS,
        pending: false,
        error: {},
    }
}

export function updatePostFailure(error: Object) : BlogActionTypes.IUpdatePostFailure {
    return {
        type: BlogActionTypes.UPDATE_POST_FAILURE,
        pending: false,
        error
    }
}

interface UpdatePostPayload {
    post: Post,
}

export const updatePost = (payload: UpdatePostPayload) : AppThunkType => {
    return async dispatch => {
        try {
            updatePostPending();
            await apiAxios.put(`api/posts/update/${payload.post.id}`, {
                content: payload.post.content,
                name: payload.post.name,
                status_id: payload.post.status_id,
            });
            dispatch(updatePostSuccess());
        }
        catch(error) {
            dispatch(updatePostFailure(error));
        }
    }
}


/**
 * Fetch Statuses
 */

export function fetchStatusesPending() : BlogActionTypes.IFetchStatusesPending {
    return {
        type: BlogActionTypes.FETCH_STATUSES_PENDING,
        pending: true,
        error: {},
    }
}

export function fetchStatusesSuccess(statuses: Array<IStatus>) : BlogActionTypes.IFetchStatusesSuccess {
    return {
        type: BlogActionTypes.FETCH_STATUSES_SUCCESS,
        statuses,
        pending: false,
        error: {}
    }
}

export function fetchStatusesFailure(error: Object) : BlogActionTypes.IFetchStatusesFailure {
    return {
        type: BlogActionTypes.FETCH_STATUSES_FAILURE,
        pending: false,
        error,
    }
}

export const fetchStatuses = () : AppThunkType => {
    return async dispatch => {
        try {
            dispatch(fetchStatusesPending());
            const {data} = await apiAxios.get('api/statuses');
            dispatch(fetchStatusesSuccess(data));
        }
        catch(error) {
            dispatch(fetchStatusesFailure(error));
        }
    }
}

/**
 *  Update Selected Post Values
 */

export function setPostName(name: string) : BlogActionTypes.ISetPostName {
    return {
        type: BlogActionTypes.SET_POST_NAME,
        name,
        pending: false,
        error: {},
    }
}

export const updatePostName = (name: string) : AppThunkType => {
    return async dispatch => {
        dispatch(setPostName(name));
    }
}

export function setPostContent(content: string) : BlogActionTypes.ISetPostContent {
    return {
        type: BlogActionTypes.SET_POST_CONTENT,
        content,
        pending: false,
        error: {},
    }
}

export const updatePostContent = (content: string) : AppThunkType => {
    return async dispatch => {
        dispatch(setPostContent(content));
    }
}

export function setPostStatus(status: IStatus) : BlogActionTypes.ISetPostStatus {
    return {
        type: BlogActionTypes.SET_POST_STATUS,
        status,
        pending: false,
        error: {},
    }
}

export const updatePostStatus = (status: IStatus) : AppThunkType => {
    return async dispatch => {
        dispatch(setPostStatus(status));
    }
}

/**
 * Fetch Drafted Posts
 */

export function fetchDraftedPostsPending() : BlogActionTypes.IFetchDraftedPostsPending {
    return {
        type: BlogActionTypes.FETCH_DRAFTED_POSTS_PENDING,
        pending: true,
        error: {},
    }
}

export function fetchDraftedPostsSuccess(draftedPosts: Array<Post>) : BlogActionTypes.IFetchDraftedPostsSuccess {
    return {
        type: BlogActionTypes.FETCH_DRAFTED_POSTS_SUCCESS,
        draftedPosts,
        pending: false,
        error: {},
    }
}

export function fetchDraftedPostsFailure(error: Object) : BlogActionTypes.IFetchDraftedPostsFailure {
    return {
        type: BlogActionTypes.FETCH_DRAFTED_POSTS_FAILURE,
        pending: false,
        error,
    }
}

export const fetchDraftedPosts = () : AppThunkType => {
    return async dispatch => {
        try {
            dispatch(fetchDraftedPostsPending());
            const {data} = await apiAxios.get('api/posts-drafted');
            dispatch(fetchDraftedPostsSuccess(data));
        }
        catch(error)
        {
            dispatch(fetchDraftedPostsFailure(error));
        }
    }
}