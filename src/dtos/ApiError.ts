import {AxiosError, AxiosRequestConfig} from "axios";

export interface ErrorMessage {
    [prop: string]: string,
}

export interface ApiErrorData {
    errors: ErrorMessage;
}

export class ApiError implements AxiosError<ApiErrorData>
{
    config: AxiosRequestConfig = {};
    isAxiosError: boolean = false;
    message: string = "";
    name: string = "";

    toJSON(): object {
        return {};
    }

}