import React, {useCallback, useState} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {Button, FormGroup, Input, Label} from "reactstrap";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {createPost} from "../../../actions/BlogActions";
import {useHistory} from 'react-router-dom';

interface ICreateProps {
    userId: number,
}

const Create = ({userId} : ICreateProps) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    const handleNameChange = useCallback((e) => {
        setName(e.target.value);
    }, [setName]);

    const handleContentChange = useCallback((value) => {
        setContent(value);
    }, [setContent]);

    const create = useCallback(async () => {
        await dispatch(createPost({
            userId,
            content,
            name,
        }));
        history.push("/blog");
    }, [dispatch, history, userId, content, name]);

    return (
        <div className="flex flex-col px-4 self-center md:w-3/4 lg:w-1/2">
            <div className="text-4xl font-bold text-black self-center md:text-5xl lg:text-6xl">
                Create Post
            </div>
            <FormGroup className="form-control">
                <Label for="POST_NAME" className="text-black">name</Label>
                <Input type="text" required className="form-input" name="name" id="POST_NAME" placeholder="Email"
                       value={name} onChange={handleNameChange}/>
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="POST_CONTENT" className="text-black">Content</Label>
                <SunEditor setOptions={{
                    height: 500,
                }} onChange={handleContentChange}/>
            </FormGroup>
            <Button className="btn-primary" onClick={create}>Create</Button>
        </div>
    )
}

export function mapStateToProps(state: IStoreState) {
    return {
        userId: state.authState.user ? state.authState.user.id : 0,
    }
}

export default connect(mapStateToProps)(Create);