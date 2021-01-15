import React, {useCallback} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import Comment from './Comment';
import AddComment from "./AddComment";
import {addComment} from "../../../actions/BlogActions";
import {Post} from "../../../dtos/Post";
import {User} from "../../../dtos/User";

interface ICommentSectionProps {
    post: Post,
    user?: User,
}

const CommentSection = ({post, user = undefined}: ICommentSectionProps) => {

    const Swal = require('sweetalert2');
    const dispatch = useDispatch();

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
                {
                    user !== undefined && user.id > 0 &&
                    <AddComment btnName="Add"
                                btnClassName="text-lg text-purple-600 hover:text-purple-900 cursor-pointer absolute top-0 right-0"
                                contentClassName="w-full"
                                save={onCommentSave} className="w-full flex flex-wrap"/>
                }
            </div>
            {
                post.comments !== undefined && post.comments.length > 0 ?
                    post.comments.map(item => (
                        <Comment className="flex flex-col justify-center w-1/2 self-center border-b-2 mt-4"
                                 comment={item}
                                 key={item.id}/>
                    )) :
                    <div
                        className="flex flex-col justify-center w-1/2 self-center text-center text-2xl font-semibold mt-4">
                        No Comments Available
                    </div>
            }
        </div>
    )
}

function mapStateToProps(state: IStoreState) {
    return {
        post: state.blogState.post,
        user: state.authState.user,
    }
}

export default connect(mapStateToProps)(CommentSection);