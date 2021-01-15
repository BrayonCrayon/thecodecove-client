import * as React from 'react';
import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {fetchPosts} from "../../actions/BlogActions";
import {IStoreState} from "../../store/StoreState";
import {Post} from "../../dtos/Post";
import Tile from "./Posts/Tile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import queryString from 'query-string';
import {socialLoginCallback} from "../../actions/AuthActions";

export interface BlogProps {
    posts: Array<Post>,
    searchTerm: string,
    authed: Boolean,
    isAdmin: Boolean,
}


const Blog = ({posts = [], searchTerm, authed = false, isAdmin}: BlogProps) => {
    const dispatch = useDispatch();
    const [postsLoaded, setPostsLoaded] = useState(false);
    const location = useLocation()

    useEffect(() => {
        const queryParams = queryString.parse(location.search);
        if (queryParams.code) {
            console.log("Login user with API code: " + queryParams.code);
            dispatch(socialLoginCallback({
                code: queryParams.code.toString(),
                social: 'github',
            }))
        }
    }, [location, dispatch]);

    useEffect(() => {
        if (!postsLoaded) {
            dispatch(fetchPosts());
            setPostsLoaded(true);
        }
    }, [setPostsLoaded, dispatch, postsLoaded]);

    return (
        <div className="grid grid-cols-1 gap-6 p-4 mb-4 overflow-auto h-full md:grid-cols-2 lg:grid-cols-4">
            {
                !postsLoaded &&
                <div className="text-6xl h-full flex justify-center md:col-span-2 lg:col-span-4">
                    <FontAwesomeIcon icon={faSpinner} spin className="self-center"/>
                </div>
            }
            {
                posts.length === 0 && postsLoaded &&
                    <div className="text-lg text-center h-full md:col-span-2 lg:col-span-4">
                        No Posts to View.
                    </div>
            }
            {
                posts.filter((post) => post.name.includes(searchTerm))
                    .map((post) => (
                            <Tile post={post} key={post.id} canEdit={authed && isAdmin}/>
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
        isAdmin: state.authState.user?.tokens?.length ? state.authState.user?.tokens[0].abilities[0] === 'admin' : false
    }
}

export default connect(mapStateToProps)(Blog);