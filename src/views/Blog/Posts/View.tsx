import React, {useEffect, useState} from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {Post} from "../../../dtos/Post";
import moment from "moment";
import {fetchPost} from "../../../actions/BlogActions";
import parse from 'html-react-parser';
import CommentSection from "../Comments/CommentSection";

export interface ViewProps {
    post: Post,
    match: any
}

const View = ({post, match}: ViewProps) => {
    const [postLoaded, setPostLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!postLoaded){
            dispatch(fetchPost(match.params.id));
            setPostLoaded(true);
        }
    }, [postLoaded, dispatch, match.params.id]);


    return (
        <div className="grid grid-cols-1 gap-4 p-4">
            <div className="grid grid-cols-6 text-xs">
                <div className="text-gray-700 col-start-1 col-span-1 text-right">
                    Author:
                </div>
                <div className="text-black px-2 col-start-2 col-span-1 ">
                    {post.user?.name}
                </div>
                <div className="text-gray-700 col-start-1 col-span-1 text-right">
                    Posted:
                </div>
                <div className="text-black px-2 col-start-2 col-span-3">
                    {moment(post.created_at).format("ddd, MMM Do YYYY")}
                </div>
            </div>
            <div className="text-4xl text-center text-black font-semibold">{post.name}</div>
            <div className="text-lg text-center text-black mb-16">{parse(post.content)}</div>
            <CommentSection />
        </div>
    )
};

export function mapStateToProps(state: IStoreState) {
    return {
        post: state.blogState.post,
    }
}

export default connect(mapStateToProps)(View);