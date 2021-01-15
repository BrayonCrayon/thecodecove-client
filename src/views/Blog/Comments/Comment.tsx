import React, {useCallback, useState} from 'react';
import {IComment} from "../../../dtos/IComment";
import {connect, useDispatch} from "react-redux";
import moment from "moment";
import {IStoreState} from "../../../store/StoreState";
import AddComment from "./AddComment";
import {addNestedComment, fetchNestedComments} from "../../../actions/BlogActions";
import {User} from "../../../dtos/User";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../../components/LoadingSpinner";
import parse from 'html-react-parser';
import EditComment from "./EditComment";

interface ICommentProps {
    comment: IComment,
    user?: User,
    className?: string,
}

const Comment = ({comment, user, className = ''}: ICommentProps) => {

    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState(comment.text);
    const [comments, setComments] = useState([] as Array<IComment>);
    const [showNestedComments, setShowNestedComments] = useState(true);
    const [loadingNestedComments, setLoadingNestedComments] = useState(false);
    const Swal = require('sweetalert2');

    const updateCommentText = useCallback((value) => {
        setCommentText(value);
        comment.text = value;
    }, [comment, setCommentText]);

    const loadReplies = useCallback(async () => {
        setLoadingNestedComments(true);
        await dispatch(fetchNestedComments({
            comment
        }));
        setComments(comment.comments);
    }, [dispatch, comment]);

    const saveReply = useCallback(async (value) => {
        if ((user !== undefined && user.id < 0) || user === undefined) {
            Swal.fire({
                title: 'Please Sign In',
                text: 'You must login, in order to add a comment.',
                type: 'error',
            });
            return;
        }

        await dispatch(addNestedComment({
            user_id: user ? user.id : -1,
            text: value,
            parent_id: comment.id,
        }, comment));
        await setComments(comment.comments);
    }, [setComments, Swal, comment, dispatch, user]);

    const toggleNestedComments = useCallback(() => {
        setShowNestedComments(!showNestedComments);
    }, [setShowNestedComments, showNestedComments]);

    const nestedCommentsStyling = useCallback(() => {
        return showNestedComments ? 'visible ml-16' : 'invisible h-0';
    }, [showNestedComments]);

    return (
        <div className={className}>
            <div className="flex p-2">
                <div className="mr-3 w-1/6 flex justify-center">
                    <img src={comment.user.avatar} alt="Users avatar" className="h-16 rounded-full lg:h-24 xl:h-32"/>
                </div>
                <div className="w-5/6">
                    <div className="text-sm text-gray-600 flex font-semibold mb-1">
                        {comment.user.name} &#9758; {moment(comment.created_at).fromNow()}
                    </div>
                    <div className="text-left text-black w-full">
                        {parse(commentText)}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between relative">
                {
                    !comment.comments &&
                    <div className="flex text-sm text-purple-600 hover:text-purple-900 cursor-pointer self-end"
                         onClick={loadReplies}>
                        See Comments
                        <LoadingSpinner loading={loadingNestedComments}
                                        className="text-sm h-full flex justify-center ml-1 self-center"/>
                    </div>
                }
                {
                    comment.comments && comments.length > 0 &&
                    <div className="text-sm text-purple-600 hover:text-purple-900 cursor-pointer self-end"
                         onClick={toggleNestedComments}>
                        {
                            showNestedComments ? 'Show Less' : 'Show More'
                        }
                        <FontAwesomeIcon icon={showNestedComments ? faCaretUp : faCaretDown}
                                         className="ml-1 self-center"/>
                    </div>
                }
                {
                    comment.comments && comments.length === 0 &&
                    <div className="text-sm text-purple-600 self-end">
                        No Comments Available
                    </div>
                }
                {
                    user !== undefined && user.id === comment.user.id &&
                    <EditComment comment={comment} className="w-full flex flex-wrap" contentClassName="w-full"
                                 btnClassName="text-sm text-purple-600 hover:text-purple-900 cursor-pointer absolute top-0 right-0 mr-12"
                                 updateCommentText={updateCommentText}
                    />
                }
                {
                    user !== undefined && user.id > 0 &&
                    <AddComment btnName="Reply"
                                btnClassName="text-sm text-purple-600 hover:text-purple-900 cursor-pointer absolute top-0 right-0"
                                save={saveReply}
                                className="w-full flex flex-wrap"
                                contentClassName="w-full "
                    />
                }
            </div>
            <div className={nestedCommentsStyling()}>
                {
                    comments.map(item => (
                        <Comment className="flex flex-col justify-center self-center border-t " comment={item}
                                 user={user}
                                 key={item.id}/>
                    ))
                }
            </div>
        </div>
    );
}

function mapStateToProps(state: IStoreState) {
    return {
        user: state.authState.user,
    }
}

export default connect(mapStateToProps)(Comment);