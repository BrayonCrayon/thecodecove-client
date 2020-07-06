import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export interface Search {
    placeHolder: string;
    searchCallback: () => void;
}

const SearchInput = (props: Search) => {

    return (
        <div className="w-full flex bg-gray-200 rounded-full shadow-inner p-2">
            <FontAwesomeIcon icon={faSearch} className="self-center mr-1 text-black"/>
            <input className="w-full bg-gray-200 text-black outline-none" placeholder={props.placeHolder}/>
        </div>
    );
};

export default SearchInput;
