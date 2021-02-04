import React, {useCallback, useEffect} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {Post} from "../../../dtos/Post";
import {fetchPost, updatePost, updatePostContent, updatePostName, updatePostStatus} from "../../../actions/BlogActions";
import {Button, FormGroup, Input, Label} from "reactstrap";
import SunEditor from "suneditor-react";
import {useHistory} from 'react-router-dom';
import {IStatus} from "../../../dtos/Status";
import {showToast} from "../../../Utility/Utility";
import EditableInput from "../../../components/fields/EditableInput";
import {AxiosResponse} from "axios";
import {ApiErrorData} from "../../../dtos/ApiError";

const _ = require('lodash');

interface EditProps {
    post: Post,
    match: any,
    statuses: Array<IStatus>,
    error: AxiosResponse<ApiErrorData>
}

const Edit = ({post, match, statuses = [], error}: EditProps) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (post.id < 0) {
            dispatch(fetchPost(match.params.id));
        }
    }, [dispatch, post, match.params.id]);

    const handleNameChange = useCallback((e) => {
        dispatch(updatePostName(e.target.value));
    }, [dispatch]);

    const handleContentChange = useCallback((value) => {
        dispatch(updatePostContent(value));
    }, [dispatch]);

    const handleStatusChange = useCallback((e) => {
        const status = _.find(statuses, {'id': Number.parseInt(e.target.value)});
        dispatch(updatePostStatus(status));
    }, [dispatch, statuses]);

    const update = useCallback(async () => {
        await dispatch(updatePost({
            post
        }));
        history.push('/dashboard');
        showToast('Post Updated!');
    }, [dispatch, post, history]);

    return (
        <div className="flex flex-col px-4 self-center md:w-3/4 lg:w-1/2">
            <div className="text-4xl font-bold text-black self-center md:text-5xl lg:text-6xl">
                Edit Post
            </div>
            <FormGroup className="form-control">
                <EditableInput id="POST_NAME" value={post.name} onChange={value => dispatch(updatePostName(value))}
                               error={error} placeholder="Email" label="Name" name="name" required type="text"/>
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="POST_STATUS" className="form-label">Status</Label>
                <Input
                    id="POST_STATUS"
                    className="form-input"
                    value={post.status_id}
                    type="select"
                    onChange={handleStatusChange}
                >
                    {
                        statuses.map(status =>
                            <option key={status.id} value={status.id}>{status.name}</option>
                        )
                    }
                </Input>
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="POST_CONTENT" className="text-black">Content</Label>
                <SunEditor setOptions={{
                    height: 500,
                    buttonList: [
                        ['undo', 'redo',],
                        ['font', 'fontSize', 'formatBlock',],
                        ['paragraphStyle', 'blockquote',
                            'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
                            'fontColor', 'hiliteColor', 'textStyle',
                            'removeFormat',],
                        ['outdent', 'indent',],
                        ['align', 'horizontalRule', 'list', 'lineHeight'],
                    ],
                }}
                           setContents={post.content}
                           onChange={handleContentChange}/>
            </FormGroup>
            <Button className="btn-primary" onClick={update}>Save</Button>
        </div>
    )
}

export function mapStateToProps(state: IStoreState) {
    return {
        post: state.blogState.post,
        statuses: state.blogState.statuses,
        error: state.blogState.error.response as AxiosResponse<ApiErrorData>
    }
}

export default connect(mapStateToProps)(Edit);