import React, {useCallback, useEffect, useState} from 'react';
import {getInitialPostObj, IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {IComment} from "../../../dtos/IComment";
import Comment from './Comment';
import AddComment from "./AddComment";
import {addComment, fetchComments} from "../../../actions/BlogActions";
import {Post} from "../../../dtos/Post";
import {User} from "../../../dtos/User";
import LoadingSpinner from "../../components/LoadingSpinner";

interface ICommentSectionProps {
    comments?: Array<IComment>,
    post?: Post,
    user?: User,
}

const CommentSection = ({comments = [], post = getInitialPostObj(), user = undefined}: ICommentSectionProps) => {

    const [commentsLoaded, setCommentsLoaded] = useState(false);
    const Swal = require('sweetalert2');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!commentsLoaded && post.id > 0) {
            dispatch(fetchComments({
                postId: post.id,
            }));
            setCommentsLoaded(true);
        }
    }, [commentsLoaded, post, dispatch])

    const onCommentSave = useCallback((value) => {
        if (user !== undefined && user.id < 0) {
            Swal.fire({
                title: 'Please Sign In',
                text: 'You must login, in order to add a comment.',
                type: 'error',
            });
            return;
        }

        dispatch(addComment(
            {
                post_id: post.id,
                text: value,
                user_id: user ? user.id : -1,
            },
        ));
    }, [Swal, post, user, dispatch]);

    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-wrap justify-between w-1/2 self-center border-b-2 relative">
                <div className="text-lg text-gray-900 w-full">
                    Comments
                </div>
                <AddComment btnName="Add"
                            btnClassName="text-lg text-purple-600 hover:text-purple-900 cursor-pointer absolute top-0 right-0"
                            contentClassName="w-full"
                            save={onCommentSave} className="w-full flex flex-wrap"/>
            </div>
            <LoadingSpinner loading={!commentsLoaded}
                            className="text-6xl h-full flex justify-center my-6"/>
            {
                !comments?.length ? <div/> :
                    comments.map(item => (
                        <Comment className="flex flex-col justify-center w-1/2 self-center border-b-2 mt-4"
                                 comment={item}
                                 key={item.id}/>
                    ))
            }
        </div>
    )
}

function mapStateToProps(state: IStoreState) {
    return {
        comments: state.blogState.post.comments,
        post: state.blogState.post,
        user: state.authState.user,
    }
}

export default connect(mapStateToProps)(CommentSection);