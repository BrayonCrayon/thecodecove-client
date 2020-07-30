import React, {useCallback, useEffect} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {Post} from "../../../dtos/Post";
import {fetchPost, updatePost} from "../../../actions/BlogActions";
import {Button, FormGroup, Input, Label} from "reactstrap";
import SunEditor from "suneditor-react";
import {useHistory} from 'react-router-dom';

interface EditProps {
    post: Post,
    match: any,
}

const Edit = ({post, match} : EditProps) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (post.id < 0) {
            dispatch(fetchPost(match.params.id));
        }
    }, [dispatch, post, match.params.id]);

    const handleNameChange = useCallback((e) => {
        post.name = e.target.value
    }, [post]);

    const handleContentChange = useCallback((value) => {
        post.content = value;
    }, [post]);

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
                <Label for="POST_NAME" className="text-black">name</Label>
                <Input type="text" required className="form-input" name="name" id="POST_NAME" placeholder="Email"
                       value={post.name} onChange={handleNameChange}/>
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
    }
}

export default connect(mapStateToProps)(Edit);