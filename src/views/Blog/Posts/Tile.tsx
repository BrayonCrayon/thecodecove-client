import React, {useCallback} from 'react';
import moment from "moment";
import {Link} from "react-router-dom";
import {Post} from "../../../dtos/Post";
import {deletePost, setPost} from "../../../actions/BlogActions";
import {useDispatch} from "react-redux";
import parse from 'html-react-parser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

interface TileProps {
    post: Post,
    canEdit: Boolean,
    className?: string
}

const Tile = ({post, canEdit, className = ""}: TileProps) => {
    const dispatch = useDispatch();
    const Swal = require('sweetalert2');

    const selectPost = useCallback(() => {
        dispatch(setPost(post));
    }, [dispatch, post]);

    const editPost = useCallback(() => {
        dispatch(setPost(post));
    }, [dispatch, post])

    const deletePostAction = useCallback(() => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result: any) => {
            if (result.value) {
                dispatch(deletePost(post));
            }
        })
    }, [dispatch, post, Swal])

    const tileStyling = () => {
        return `col-start-1 p-1 rounded-lg ${canEdit ? 'col-span-11' : 'col-span-12'}`
    }

    return (
        <div className={className + ' grid grid-cols-12 border border-gray-300 hover:bg-gray-100 hover:shadow-lg bg-white rounded-lg p-4 shadow-md md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-4'}>
            <Link to={'/post/view/' + post.id}
                  className={tileStyling()}
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
                    <div className="col-span-1 flex flex-wrap justify-center">
                        <Link className="text-2xl text-gray-600 hover:text-gray-900 self-center w-full text-center"
                              to={'/post/edit/' + post.id}
                              onClick={editPost}>
                            <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        <div className="text-2xl cursor-pointer text-gray-600 hover:text-gray-900 self-center w-full text-center"
                              onClick={deletePostAction}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </div>
                    </div>
            }
        </div>
    )
}

export default Tile;