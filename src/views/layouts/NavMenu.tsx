import * as React from 'react';
import {useCallback, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../components/SearchInput";

const NavMenu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggle = useCallback(() => {
        setToggleMenu(!toggleMenu);
    }, [toggleMenu, setToggleMenu]);

    const navLinkClass = useMemo(() => {
        return toggleMenu ? "flex " : "hidden";
    }, [toggleMenu]);

    const searchCallback = useCallback(() => {
        console.log("here");
    }, []);

    return (
        <nav className="w-full shadow-md flex flex-wrap md:flex-row">
            <div className="w-full flex flex-wrap px-4 lg:w-1/2 lg:flex-row">
                <div className="animate__animated animate__bounce animate__delay-2s w-full flex justify-between lg:w-auto lg:justify-start">
                    <a className="text-2xl font-semibold hover:no-underline text-black hover:text-gray-500 lg:text-3xl"
                       href="/">
                        The Code Cove
                    </a>
                    <FontAwesomeIcon icon={faBars} className="text-2xl self-center cursor-pointer lg:hidden" onClick={toggle}/>
                </div>
                <div className={`${navLinkClass} w-full flex-col text-md border-b border-gray-500 lg:border-none lg:flex lg:text-lg lg:w-1/2 lg:flex-row lg:ml-4 `}>
                    <div className="self-center text-center px-2">
                        <a className="hover:no-underline  text-black hover:text-gray-600" href="/blog">Blog</a>
                    </div>
                    <div className="self-center text-center px-2">
                        <a className="hover:no-underline text-black hover:text-gray-600" href="/about-me">About Me</a>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 lg:w-1/2">
                <SearchInput placeHolder="Search Posts" searchCallback={searchCallback}/>
            </div>
        </nav>
    );
};

export default NavMenu;
