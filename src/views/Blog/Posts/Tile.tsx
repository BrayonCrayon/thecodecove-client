import React, {useCallback} from 'react';
import moment from "moment";
import {Link} from "react-router-dom";
import {Post} from "../../../dtos/Post";
import {setPost} from "../../../actions/BlogActions";
import {useDispatch} from "react-redux";
import parse from 'html-react-parser';

interface TileProps {
    post: Post,
}

const Tile = ({post}: TileProps) => {
    const dispatch = useDispatch();

    const selectPost = useCallback((post: Post) => {
        dispatch(setPost(post));
    }, [dispatch]);

    return (
        <Link to={'/post/view/' + post.id}
              className="grid shadow-md rounded-lg p-4 border border-gray-300 hover:shadow-lg bg-white md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-4"
              onClick={() => {
                  selectPost(post)
              }}
        >
            <div className="post-header flex justify-between">
                <div
                    className="post-title text-lg text-black font-semibold truncate md:text-2xl lg:text-3xl">
                    {post.name}
                </div>
                <div className="post-author text-xs text-gray-500 lg:text-base">
                    Posted: {moment(post.created_at).fromNow()}
                </div>
            </div>
            <div className="post-content truncate h-20 shadow-inner p-2 bg-gray-100 rounded">
                { parse(post.content)}
            </div>
        </Link>
    )
}

export default Tile;