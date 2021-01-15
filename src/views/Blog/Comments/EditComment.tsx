import React, {useCallback, useState} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import SunEditor from "suneditor-react";
import {IComment} from "../../../dtos/IComment";
import {updateComment} from "../../../actions/BlogActions";
interface IEditCommentProps {
    className?: string,
    contentClassName?: string,
    btnClassName?: string,
    updateCommentText: (arg: any) => void,
    comment: IComment,
}

const EditComment = ({className = "", comment, contentClassName = "", btnClassName = "", updateCommentText}: IEditCommentProps) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const toggle = useCallback(() => {
        setShow(!show);
    }, [show, setShow]);

    const update = useCallback(() => {
        dispatch(updateComment({
            commentId: comment.id,
            text: comment.text,
        }));
        toggle();
    }, [dispatch, comment, toggle]);

    const updateCommentStyling = () => {
        return show ? `visible ${contentClassName}` : 'invisible h-0';
    }

    return (
        <div className={className}>
            <div className={btnClassName} onClick={toggle}>
                Edit
            </div>
            <div className={updateCommentStyling()}>
                <SunEditor setOptions={{
                    height: '200px',
                    maxHeight: '200px',
                    buttonList: [
                        ['undo', 'redo'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'link'],
                    ],
                }}
                           setContents={comment.text}
                           onChange={updateCommentText}/>
                <button className="btn-primary w-full" onClick={update}>
                    Update
                </button>
            </div>
        </div>
    )
}

function mapStateToProps(state: IStoreState) {
    return {
    }
}

export default connect(mapStateToProps)(EditComment);