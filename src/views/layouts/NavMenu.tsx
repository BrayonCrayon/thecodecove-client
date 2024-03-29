import * as React from 'react';
import {useCallback, useEffect, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../components/SearchInput";
import {connect, useDispatch} from "react-redux";
import {logout, setLoggedIn} from "../../actions/AuthActions";
import {IStoreState} from "../../store/StoreState";
import {User} from "../../dtos/User";
import {Link, useHistory} from "react-router-dom";
import {setPostsSearchTerm} from "../../actions/BlogActions";

const _ = require('lodash');

export interface NavMenuProps {
    user?: User,
    loggedIn: Boolean,
    isAdmin: Boolean,
}

const NavMenu = ({loggedIn, isAdmin}: NavMenuProps) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [enterKey] = useState(13);

    useEffect(() => {
        dispatch(setLoggedIn());
    }, [dispatch]);

    const toggle = useCallback(() => {
        setToggleMenu(!toggleMenu);
    }, [toggleMenu, setToggleMenu]);

    const navLinkClass = useMemo(() => {
        return toggleMenu ? "flex " : "hidden";
    }, [toggleMenu]);

    const navigateToBlog = useCallback((keyCode: number) => {
        return keyCode === enterKey &&
            !_.isEqual(history.location.pathname, '/') &&
            !_.isEqual(history.location.pathname, '/blog');
    }, [history, enterKey]);

    const searchCallback = useCallback((e: any) => {
        dispatch(setPostsSearchTerm(e.target.value));
        if (navigateToBlog(e.keyCode)) {
            history.push('/blog');
        }
    }, [dispatch, history, navigateToBlog]);

    const logoutCallback = useCallback(() => {
        dispatch(logout());
        toggle();
    }, [dispatch, toggle]);

    const showLoginLogout = () => {
        if (!loggedIn) {
            return (
                <div className="self-center text-center px-2">
                    <Link className="hover:no-underline text-black hover:text-gray-600" to="/login"
                          onClick={toggle}>Login</Link>
                </div>
            )
        }
        return (
            <div className="self-center text-center px-2">
                <button className="hover:no-underline text-black hover:text-gray-600"
                        onClick={logoutCallback}>Logout
                </button>
            </div>
        )
    };

    return (
        <nav className="w-full shadow-md flex bg-white flex-wrap md:flex-row">
            <div className="w-full flex flex-wrap px-4 lg:w-1/2 lg:flex-row">
                <div
                    className="animate__animated animate__bounce animate__delay-2s w-full flex justify-between lg:w-auto lg:justify-start">
                    <Link to="/"
                          className="text-2xl font-semibold hover:no-underline text-black hover:text-gray-500 lg:text-3xl">The
                        Code Cove</Link>
                    <FontAwesomeIcon icon={faBars} className="text-2xl self-center cursor-pointer lg:hidden"
                                     onClick={toggle}/>
                </div>
                <div
                    className={`${navLinkClass} w-full flex-col text-md border-b border-gray-500 lg:border-none lg:flex lg:text-lg lg:w-1/2 lg:flex-row lg:ml-4 `}>
                    <div className="self-center text-center px-2">
                        <Link to="/blog" className="hover:no-underline text-black hover:text-gray-600"
                              onClick={toggle}>Blog</Link>
                    </div>
                    <div className="self-center text-center px-2">
                        <Link to="/about-me" className="hover:no-underline text-black hover:text-gray-600"
                              onClick={toggle}>About
                            Me</Link>
                    </div>
                    {
                        loggedIn && isAdmin &&
                        <div className="self-center text-center px-2">
                            <Link className="hover:no-underline text-black hover:text-gray-600"
                                  to="/dashboard" onClick={toggle}>Dashboard</Link>
                        </div>
                    }
                    {
                        showLoginLogout()
                    }
                </div>
            </div>
            <div className="w-full p-2 lg:w-1/2">
                <SearchInput placeHolder="Search Posts" searchCallback={searchCallback}/>
            </div>
        </nav>
    );
};

const mapStateToProps = (state: IStoreState) => {
    return {
        user: state.authState.user,
        loggedIn: state.authState.loggedIn,
        isAdmin: state.authState.user?.tokens?.length ? state.authState.user?.tokens[0].abilities[0] === 'admin' : false
    }
};

export default connect(mapStateToProps)(NavMenu);
