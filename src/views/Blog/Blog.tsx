import * as React from 'react';
import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {fetchPosts} from "../../actions/BlogActions";
import {IStoreState} from "../../store/StoreState";
import {Post} from "../../dtos/Post";
import Tile from "./Posts/Tile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export interface BlogProps {
    pending: Boolean,
    posts: Array<Post>,
    searchTerm: string,
    authed: Boolean,
}


const Blog = ({pending = false, posts = [], searchTerm, authed = false}: BlogProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length) dispatch(fetchPosts());
    }, [posts, dispatch]);

    return (
        <div className="grid grid-cols-1 gap-6 p-4 mb-4 overflow-auto h-full md:grid-cols-2 lg:grid-cols-4">
            {
                pending &&
                <div className="text-6xl h-full flex justify-center md:col-span-2 lg:col-span-4">
                    <FontAwesomeIcon icon={faSpinner} spin className="self-center"/>
                </div>
            }
            {
                posts.length === 0 && !pending &&
                    <div className="text-lg text-center h-full md:col-span-2 lg:col-span-4">
                        No Posts to View.
                    </div>
            }
            {
                posts.filter((post) => post.name.includes(searchTerm))
                    .map((post) => (
                            <Tile post={post} key={post.id} canEdit={authed}/>
                    ))
            }
        </div>
    );
};

export function mapStateToProps(state: IStoreState) {
    return {
        pending: state.blogState.pending,
        posts: state.blogState.posts,
        searchTerm: state.blogState.searchTerm,
        authed: state.authState.loggedIn,
    }
}

export default connect(mapStateToProps)(Blog);