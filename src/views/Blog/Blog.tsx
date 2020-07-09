import * as React from 'react';
import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {fetchPosts} from "../../actions/BlogActions";
import {IStoreState} from "../../store/StoreState";
import {Post} from "../../dtos/Post";

export interface BlogProps {
    posts: Array<Post>,
    searchTerm: string
}


const Blog = ({posts = [], searchTerm} : BlogProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length) dispatch(fetchPosts());
    }, [posts, dispatch]);

    return (
      <div className="grid grid-cols-1 gap-6 p-4 overflow-auto h-full md:grid-cols-2 lg:grid-cols-4">
          {
              posts.filter((post) => post.name.includes(searchTerm)).map((post) =>
                  (
                      <div key={post.id} className="grid shadow-md rounded-lg p-4 border border-gray-300 md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-4">
                          <div className="post-header flex justify-between">
                              <div className="post-title text-lg text-black font-semibold truncate md:text-2xl lg:text-3xl">
                                {post.name}
                              </div>
                              <div className="post-author text-xs text-gray-500 lg:text-base">
                                  Author: {post.user.name}
                              </div>
                          </div>
                          <div className="post-content truncate ">
                              {post.content}
                          </div>

                      </div>
                  ))
          }
      </div>
    );
};

export function mapStateToProps(state: IStoreState) {
    return {
        posts: state.blogState.posts,
        searchTerm: state.blogState.searchTerm,
    }
}

export default connect(mapStateToProps)(Blog);