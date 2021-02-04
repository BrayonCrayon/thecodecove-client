import React, {useCallback} from 'react';
import {connect} from "react-redux";
import {IStoreState} from "../../store/StoreState";
import {Input, Label} from "reactstrap";
import {AxiosResponse} from "axios";
import {ApiErrorData} from "../../dtos/ApiError";
import {InputType} from "reactstrap/lib/Input";
import Error from "../error/Error";

interface IEditableInputProps {
    id: string,
    value: any,
    type?: InputType,
    required?: Boolean | undefined,
    placeholder: string,
    onChange?: (value: any) => void,
    error: AxiosResponse<ApiErrorData>
    label: string,
    name: string,
}

const EditableInput = ({onChange, value, required, type, id, placeholder, error, label, name} : IEditableInputProps) => {

    const handleChange = useCallback((e) => {
        onChange && onChange(e.target.value);
    }, [onChange]);

    return (
        <React.Fragment>
            <Label for={id} className="text-black">{label}</Label>
            <Input type={type} className="form-input" name={name} id={id} placeholder={placeholder}
                   required={required && false}
                   value={value}
                   onChange={handleChange}
            />
            <Error error={error} className="text-red-700 font-semibold text-sm p-0 m-0" />
        </React.Fragment>
    );
}

const mapStateToProps = (State: IStoreState) => {
    return {

    };
}

export default connect(mapStateToProps)(EditableInput);