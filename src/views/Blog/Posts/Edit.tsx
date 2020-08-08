import React, {useCallback, useEffect} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {Post} from "../../../dtos/Post";
import {fetchPost, updatePost, updatePostContent, updatePostName, updatePostStatus} from "../../../actions/BlogActions";
import {Button, FormGroup, Input, Label} from "reactstrap";
import SunEditor from "suneditor-react";
import {useHistory} from 'react-router-dom';
import {IStatus} from "../../../dtos/IStatus";

const _ = require('lodash');

interface EditProps {
    post: Post,
    match: any,
    statuses: Array<IStatus>
}

const Edit = ({post, match, statuses = []} : EditProps) => {
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
        const status = _.find(statuses, { 'id': Number.parseInt(e.target.value)});
        dispatch(updatePostStatus(status));
    }, [dispatch, statuses]);

    const update = useCallback(async () => {
        await dispatch(updatePost({
            post
        }));
        history.push('/');
    }, [dispatch, post, history]);

    return (
        <div className="flex flex-col px-4 self-center md:w-3/4 lg:w-1/2">
            <div className="text-4xl font-bold text-black self-center md:text-5xl lg:text-6xl">
                Edit Post
            </div>
            <FormGroup className="form-control">
                <Label for="POST_NAME" className="form-label">Name</Label>
                <Input type="text" required className="form-input" name="name" id="POST_NAME" placeholder="Email"
                       value={post.name} onChange={handleNameChange}/>
            </FormGroup>
            <FormGroup className="form-control" >
                <Label for="POST_STATUS" className="form-label" >Status</Label>
                <Input
                    id="POST_STATUS"
                    className="form-input"
                    value={post.status_id}
                    type="select"
                    onChange={handleStatusChange}
                >
                    {
                        statuses.map(status =>
                            <option  key={status.id} value={status.id}>{status.name}</option>
                        )
                    }
                </Input>
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="POST_CONTENT" className="text-black">Content</Label>
                <SunEditor setOptions={{
                    height: 500,
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
    }
}

export default connect(mapStateToProps)(Edit);