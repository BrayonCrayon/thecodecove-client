import React, {useEffect, useMemo} from 'react';
import {IStoreState} from "../../store/StoreState";
import {connect, useDispatch} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import {setLoggedIn} from "../../actions/AuthActions";

interface IIndex {
    isAuthenticated: Boolean,
}

const Index = ({isAuthenticated} : IIndex) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoggedIn());
    }, [dispatch]);

    return (
        <div className="grid grid-cols-3">
            {
                isAuthenticated &&
                <Link to="/post/create" className="btn-primary col-start-2 col-end-3 text-center">Create Post</Link>
            }
            {
                !isAuthenticated &&
                <Link to="/dashboard" className="btn-primary col-start-2 col-end-3 text-center" >Login To View Dashboard</Link>
            }
        </div>
    )
}

export function mapStateToProps(state: IStoreState) {
    return {
        isAuthenticated: state.authState.loggedIn,
    }
}

export default connect(mapStateToProps)(Index);