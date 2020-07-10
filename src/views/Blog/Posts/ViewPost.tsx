import React, {useEffect} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {Post} from "../../../dtos/Post";
import moment from "moment";
import {fetchPost} from "../../../actions/BlogActions";
import parse from 'html-react-parser';

export interface ViewProps {
    post: Post,
    postsLoaded: Boolean,
    match: any
}

const ViewPost = ({post, postsLoaded, match}: ViewProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("are posts loaded", postsLoaded);
        if (post.id < 0){
            console.log("fetch Post cause there are no posts loaded");
            dispatch(fetchPost(match.params.id));
        }
    }, [post, postsLoaded, dispatch, match.params.id]);

    return (
        <div className="grid gap-4 p-4">
            <div className="text-4xl text-center text-black">{post.name}</div>
            <div className="grid grid-cols-4 text-sm">
                <div className="text-gray-800 col-start-1 col-span-2 text-right">
                    Author:
                </div>
                <div className="text-black px-2 col-start-3 col-span-2 ">
                    {post.user?.name}
                </div>
                <div className="text-gray-800 col-start-1 col-span-2 text-right">
                    Posted:
                </div>
                <div className="text-black px-2 col-start-3 col-span-2">
                    {moment(post.created_at).format("ddd, MMM Do YYYY")}
                </div>
            </div>
            <div className="text-lg text-center text-black">{parse(post.content)}</div>
        </div>
    )
};

export function mapStateToProps(state: IStoreState) {
    return {
        post: state.blogState.post,
        postsLoaded: state.blogState.posts.length > 0,
    }
}

export default connect(mapStateToProps)(ViewPost);