import React, {useEffect} from 'react';
import NavMenu from "./views/layouts/NavMenu";
import {Route} from "react-router";
import Router from "./Router";
import {useDispatch} from "react-redux";
import {fetchStatuses} from "./actions/BlogActions";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStatuses());
    }, [dispatch]);

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <NavMenu/>
            <Route component={Router}/>
        </div>
    );
}

export default App;
