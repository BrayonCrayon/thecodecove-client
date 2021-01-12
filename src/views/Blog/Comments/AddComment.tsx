import React, {useCallback, useState} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect} from "react-redux";
import SunEditor from "suneditor-react";

interface IAddCommentProps {
    className?: string,
    btnName: string,
    btnClassName?: string,
    contentClassName?: string,
    save: (arg: any) => void,
}

const AddComment = ({btnName, btnClassName = '', contentClassName = '', className = '', save}: IAddCommentProps) => {
    const Swal = require('sweetalert2');
    const [show, setShow] = useState(false);
    const [newCommentContent, setCommentContent] = useState("");

    const handleAddCommentChange = useCallback((value) => {
        setCommentContent(value);
    }, []);

    const toggle = useCallback(() => {
        setShow(!show);
    }, [show, setShow]);

    const addCommentStyling = () => {
        return show ? `visible ${contentClassName}` : 'invisible h-0';
    }

    const saveComment = useCallback(() => {
        if (!newCommentContent.length)
        {
            Swal.fire({
                title: 'Can\'t Save Empty Comment',
                text: "Please write a comment.",
                icon: 'error',
            });
            return;
        }

        save(newCommentContent);
        setCommentContent('');
        toggle();
    }, [Swal, newCommentContent, save, toggle]);

    return (
        <div className={className}>
            <div className={btnClassName} onClick={toggle}>
                { btnName }
            </div>
            <div className={addCommentStyling()}>
                <SunEditor setOptions={{
                    height: '200px',
                    maxHeight: '200px',
                    buttonList: [
                        ['undo', 'redo'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'link'],
                    ],
                }}
                           setContents={newCommentContent}
                           onChange={handleAddCommentChange}/>
               <button className="btn-primary w-full" onClick={saveComment}>
                   Add
               </button>
            </div>
        </div>
    )
}

function mapStateToProps(state: IStoreState) {
    return {}
}

export default connect(mapStateToProps)(AddComment);