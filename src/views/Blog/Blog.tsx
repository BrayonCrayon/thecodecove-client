import * as React from 'react';
import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {fetchPosts} from "../../actions/BlogActions";
import {IStoreState} from "../../store/StoreState";
import {Post} from "../../dtos/Post";
import Tile from "./Posts/Tile";

export interface BlogProps {
    posts: Array<Post>,
    searchTerm: string,
    authed: Boolean,
}


const Blog = ({posts = [], searchTerm, authed = false}: BlogProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length) dispatch(fetchPosts());
    }, [posts, dispatch]);

    return (
        <div className="grid grid-cols-1 gap-6 p-4 mb-4 overflow-auto h-full md:grid-cols-2 lg:grid-cols-4">
            {
                posts.filter((post) => post.name.includes(searchTerm))
                    .map((post) =>
                        (
                            <Tile post={post} key={post.id} canEdit={authed}/>
                        ))
            }
        </div>
    );
};

export function mapStateToProps(state: IStoreState) {
    return {
        posts: state.blogState.posts,
        searchTerm: state.blogState.searchTerm,
        authed: state.authState.loggedIn,
    }
}

export default connect(mapStateToProps)(Blog);