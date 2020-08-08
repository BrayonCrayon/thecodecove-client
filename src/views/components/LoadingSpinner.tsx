import React from 'react';
import {IStoreState} from "../../store/StoreState";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

interface LoadingSpinnerProps {
    loading?: Boolean,
    className?: string,
}

const LoadingSpinner = ({loading = false, className = ''}: LoadingSpinnerProps) => {

    return (
        <div>
            {
                loading &&
                <div className={className}>
                    <FontAwesomeIcon icon={faSpinner} spin className="self-center"/>
                </div>
            }
        </div>
    )
}

function mapStateToProps(state: IStoreState) {
    return {

    }
}

export default connect(mapStateToProps)(LoadingSpinner);