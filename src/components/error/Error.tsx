import React from 'react';
import {AxiosResponse} from "axios";
import {ApiErrorData} from "../../dtos/ApiError";

interface IErrorProps {
    error: AxiosResponse<ApiErrorData>
    className: string
}

const Error = ({error, className = ""} : IErrorProps) => {
    return (
        <div className={className}>
            {
                error?.data !== undefined && error.data.errors !== undefined && Object.keys(error.data.errors).map((key: string) => (
                    <div key={key}>{ error.data.errors[key] }</div>
                ))
            }
        </div>
    )
}

export default Error;