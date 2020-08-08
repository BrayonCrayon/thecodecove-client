import React, {useCallback} from 'react';
import moment from "moment";
import {Link} from "react-router-dom";
import {Post} from "../../../dtos/Post";
import {setPost} from "../../../actions/BlogActions";
import {useDispatch} from "react-redux";
import parse from 'html-react-parser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

interface TileProps {
    post: Post,
    canEdit: Boolean,
}

const Tile = ({post, canEdit}: TileProps) => {
    const dispatch = useDispatch();

    const selectPost = useCallback(() => {
        dispatch(setPost(post));
    }, [dispatch, post]);

    const editPost = useCallback(() => {
        dispatch(setPost(post));
    }, [dispatch, post])

    return (
        <div className="grid grid-cols-12 md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-4">
            <Link to={'/post/view/' + post.id}
                  className="col-start-1 col-span-12 shadow-md rounded-lg p-4 border border-gray-300 hover:shadow-lg bg-white "
                  onClick={selectPost}
            >
                <div className="post-header flex justify-between">
                    <div
                        className="post-title text-lg text-black font-semibold truncate md:text-2xl lg:text-3xl">
                        {post.name}
                    </div>
                    <div className="post-author text-xs text-gray-500 lg:text-base">
                        Posted: {moment(post.published_at).fromNow()}
                    </div>
                </div>
                <div className="post-content truncate h-20 border-2 border-gray-300 p-2  rounded">
                    {parse(post.content)}
                </div>
            </Link>
            {
                canEdit &&
                <Link className="text-center text-2xl mb-4"
                      to={'/post/edit/' + post.id}
                      onClick={editPost}>
                    <FontAwesomeIcon icon={faEdit} className="text-gray-600 hover:text-gray-900"/>
                </Link>
            }
        </div>
    )
}

export default Tile;