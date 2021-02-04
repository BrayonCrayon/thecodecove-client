import * as React from 'react';
import {Button, FormGroup} from "reactstrap";
import {useCallback, useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {register} from "../../actions/AuthActions";
import EditableInput from "../../components/fields/EditableInput";
import {IStoreState} from "../../store/StoreState";
import {AxiosResponse} from "axios";
import {ApiErrorData} from "../../dtos/ApiError";

interface IRegisterProps {
    error: AxiosResponse<ApiErrorData>,
    loggedIn: Boolean
}

const Register = ({error, loggedIn}: IRegisterProps) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (loggedIn) {
            history.push("/dashboard");
        }
    }, [history, loggedIn]);

    const registerUser = useCallback(() => {
        dispatch(register({
            email,
            name,
            password,
            confirmPassword,
        }));
    }, [dispatch, email, name, password, confirmPassword]);

    return (

        <div className="w-full flex flex-col p-4 h-full self-center md:w-1/2 lg:w-1/3">
            <div className="text-4xl font-bold text-black self-center md:text-5xl lg:text-6xl">
                Register
            </div>
            <FormGroup className="form-control">
                <EditableInput label="Email" id="email" name="email" type="email" onChange={value => setEmail(value)}
                               required value={email} error={error} placeholder="Email"/>
            </FormGroup>
            <FormGroup className="form-control">
                <EditableInput label="Name" id="name" name="name" type="text" onChange={value => setName(value)} required
                               value={name} error={error} placeholder="Name"/>
            </FormGroup>
            <FormGroup className="form-control">
                <EditableInput label="Password" id="password" name="password" type="password"
                               onChange={value => setPassword(value)} required value={password} error={error}
                               placeholder="Password"/>
            </FormGroup>
            <FormGroup className="form-control">
                <EditableInput label="Confirm Password" id="confirmPassword" name="confirmPassword" type="password"
                               onChange={value => setConfirmPassword(value)} required value={confirmPassword} error={error}
                               placeholder="Confirm Password"/>
            </FormGroup>
            <Button className="btn-primary" onClick={registerUser}>Register</Button>
        </div>
    );
};

const mapStateToProps = (state: IStoreState) => {
    return {
        error: state.authState.error.response as AxiosResponse<ApiErrorData>,
        loggedIn: state.authState.loggedIn,
    }
}

export default connect(mapStateToProps)(Register);
