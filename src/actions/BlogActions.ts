import {AppThunkType} from "../store/StoreState";
import {apiAxios} from "../store/Store";
import {
    CREATE_POST_FAILURE,
    CREATE_POST_PENDING,
    CREATE_POST_SUCCESS,
    FETCH_POST_FAILURE,
    FETCH_POST_PENDING,
    FETCH_POST_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_PENDING,
    FETCH_POSTS_SUCCESS,
    ICreatePostFailure,
    ICreatePostPending,
    ICreatePostSuccess,
    IFetchPostFailure,
    IFetchPostPending,
    IFetchPostsFailure,
    IFetchPostsPending,
    IFetchPostsSuccess,
    IFetchPostSuccess,
    ISetPost,
    ISetPostById,
    ISetPostsSearchTermFailure,
    ISetPostsSearchTermPending,
    ISetPostsSearchTermSuccess,
    SET_POST,
    SET_POST_BY_ID,
    SET_POSTS_SEARCH_TERM_FAILURE,
    SET_POSTS_SEARCH_TERM_PENDING,
    SET_POSTS_SEARCH_TERM_SUCCESS
} from "../action_types/BlogTypes";
import {Post} from "../dtos/Post";


export function FetchPostsPending(): IFetchPostsPending {
    return {
        type: FETCH_POSTS_PENDING,
        pending: true,
        error: {},
    }
}

export function FetchPostsSuccess(posts: Array<Post>): IFetchPostsSuccess {
    return {
        type: FETCH_POSTS_SUCCESS,
        pending: false,
        posts,
        error: {},
    }
}

export function FetchPostsFailure(error: Object): IFetchPostsFailure {
    return {
        type: FETCH_POSTS_FAILURE,
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
export function setPostsSearchTermPending(): ISetPostsSearchTermPending {
    return {
        type: SET_POSTS_SEARCH_TERM_PENDING,
        pending: true,
        error: {}
    }
}

export function setPostsSearchTermSuccess(searchTerm: string): ISetPostsSearchTermSuccess {
    return {
        type: SET_POSTS_SEARCH_TERM_SUCCESS,
        pending: true,
        error: {},
        searchTerm,
    }
}

export function setPostsSearchTermFailure(error: Object): ISetPostsSearchTermFailure {
    return {
        type: SET_POSTS_SEARCH_TERM_FAILURE,
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
export function setPostAction(post: Post): ISetPost {
    return {
        type: SET_POST,
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
export function setPostByIdAction(postId: number): ISetPostById {
    return {
        type: SET_POST_BY_ID,
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
export function fetchPostPending(): IFetchPostPending {
    return {
        type: FETCH_POST_PENDING,
        pending: true,
        error: {},
    }
}

export function fetchPostSuccess(post: Post): IFetchPostSuccess {
    return {
        type: FETCH_POST_SUCCESS,
        post,
        pending: false,
        error: {},
    }
}

export function fetchPostFailure(error: Object): IFetchPostFailure {
    return {
        type: FETCH_POST_FAILURE,
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
export function createPostPending(): ICreatePostPending {
    return {
        type: CREATE_POST_PENDING,
        pending: true,
        error: {},
    }
}

export function createPostSuccess(post: Post): ICreatePostSuccess {
    return {
        type: CREATE_POST_SUCCESS,
        post,
        pending: false,
        error: {},
    }
}

export function createPostFailure(error: Object): ICreatePostFailure {
    return {
        type: CREATE_POST_FAILURE,
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