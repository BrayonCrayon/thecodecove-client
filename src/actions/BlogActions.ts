import {AppThunkType} from "../store/StoreState";
import {apiAxios} from "../store/Store";
import {
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_PENDING,
    FETCH_POSTS_SUCCESS,
    IFetchPostsFailure,
    IFetchPostsPending,
    IFetchPostsSuccess,
    ISetPostsSearchTermFailure,
    ISetPostsSearchTermPending,
    ISetPostsSearchTermSuccess,
    SET_POSTS_SEARCH_TERM_FAILURE,
    SET_POSTS_SEARCH_TERM_PENDING,
    SET_POSTS_SEARCH_TERM_SUCCESS
} from "../action_types/BlogTypes";
import {Post} from "../dtos/Post";


export function FetchPostsPending() : IFetchPostsPending {
    return {
        type: FETCH_POSTS_PENDING,
        pending: true,
        error: {},
    }
}

export function FetchPostsSuccess(posts: Array<Post>) : IFetchPostsSuccess {
    return {
        type: FETCH_POSTS_SUCCESS,
        pending: false,
        posts,
        error: {},
    }
}

export function FetchPostsFailure(error: Object) : IFetchPostsFailure {
    return {
        type: FETCH_POSTS_FAILURE,
        pending: false,
        error,
    }
}

export const fetchPosts = () : AppThunkType => {
      return async dispatch => {
          try {
            dispatch(FetchPostsPending());
            const {data} = await apiAxios.get('api/posts');
            dispatch(FetchPostsSuccess(data));
          }
          catch (error) {
              dispatch(FetchPostsFailure(error));
          }
      }
};

/**
 * Set Posts Search Term Action
 */
export function setPostsSearchTermPending() : ISetPostsSearchTermPending {
    return {
        type: SET_POSTS_SEARCH_TERM_PENDING,
        pending: true,
        error: {}
    }
}

export function setPostsSearchTermSuccess(searchTerm: string) : ISetPostsSearchTermSuccess {
    return {
        type: SET_POSTS_SEARCH_TERM_SUCCESS,
        pending: true,
        error: {},
        searchTerm,
    }
}

export function setPostsSearchTermFailure(error: Object) : ISetPostsSearchTermFailure {
    return {
        type: SET_POSTS_SEARCH_TERM_FAILURE,
        pending: false,
        error,
    }
}

export const setPostsSearchTerm = (searchTerm: string) : AppThunkType => {
    return async dispatch => {
        try {
            dispatch(setPostsSearchTermPending());
            dispatch(setPostsSearchTermSuccess(searchTerm));
        }
        catch(error)
        {
            dispatch(setPostsSearchTermFailure(error));
        }
    }
}