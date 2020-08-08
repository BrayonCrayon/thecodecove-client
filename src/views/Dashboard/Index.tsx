import React, {useEffect} from 'react';
import {IStoreState} from "../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {setLoggedIn} from "../../actions/AuthActions";
import DraftedPosts from "./partials/DraftedPosts";
import {fetchDraftedPosts} from "../../actions/BlogActions";
import {Post} from "../../dtos/Post";
import {isEmpty} from "../../reducers/Helper";

interface IIndex {
    isAuthenticated: Boolean,
    draftedPosts: Array<Post>,
}

const Index = ({isAuthenticated, draftedPosts = []} : IIndex) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoggedIn());
    }, [dispatch]);

    useEffect(() => {
        if (isAuthenticated && isEmpty(draftedPosts)) {
            dispatch(fetchDraftedPosts());
        }
    }, [dispatch, draftedPosts, isAuthenticated]);

    return (
        <div className="grid grid-cols-12 ">
            {
                isAuthenticated &&
                <Link to="/post/create" className="btn-primary col-start-4 col-span-1 text-center">Create Post</Link>
            }
            {
                !isAuthenticated &&
                <Link to="/login" className="btn-primary col-start-4 col-span-2 text-center" >Login To View Dashboard</Link>
            }
            <DraftedPosts className="col-start-2 col-span-10" />
        </div>
    )
}

export function mapStateToProps(state: IStoreState) {
    return {
        isAuthenticated: state.authState.loggedIn,
        draftedPosts: state.blogState.draftedPosts,
    }
}

export default connect(mapStateToProps)(Index);