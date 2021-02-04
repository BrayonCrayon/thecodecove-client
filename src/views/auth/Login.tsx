import * as React from "react";
import {FormGroup, Label, Input, Button} from 'reactstrap';
import {useHistory} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import {loginAction, socialLoginRequest} from "../../actions/AuthActions";
import {IStoreState} from "../../store/StoreState";
import {AxiosResponse} from "axios";
import {ApiErrorData} from "../../dtos/ApiError";
import EditableInput from "../../components/fields/EditableInput";

interface ILoginProps {
    error: AxiosResponse<ApiErrorData>,
    loggedIn: Boolean,
}

const Login = ({error, loggedIn}: ILoginProps) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('braydonalan@gmail.com');
    const [password, setPassword] = useState('password');

    useEffect(() => {
        if (loggedIn) {
            history.push("/dashBoard");
        }
    }, [loggedIn, history]);

    const loginUser = useCallback(() => {
        dispatch(loginAction({
            email,
            password,
        }));
    }, [email, password, dispatch]);

    const socialLogin = useCallback(() => {
        dispatch(socialLoginRequest({
            social: 'github'
        }));
    }, [dispatch]);

    return (
        <div className="w-full flex flex-col p-4 h-full md:w-1/2 md:self-center lg:w-1/3">
            <div className="text-4xl font-bold text-black self-center md:text-5xl lg:text-6xl">
                Login
            </div>
            <FormGroup className="form-control">
                <EditableInput label="Email" name="email" id="email" type="email" onChange={value => setEmail(value)}
                               required value={email} error={error} placeholder="Email"/>
            </FormGroup>
            <FormGroup className="form-control">
                <EditableInput label="Password" name="password" id="password" type="password"
                               onChange={value => setPassword(value)} required value={password} error={error}
                               placeholder="Password"/>
            </FormGroup>
            <Button className="btn-primary" onClick={loginUser}>Login</Button>
            <Button className="btn-primary" onClick={socialLogin}>Social Login</Button>
        </div>
    );
};

function mapStateToProps(state: IStoreState) {
    return {
        error: state.authState.error.response as AxiosResponse<ApiErrorData>,
        loggedIn: state.authState.loggedIn,
    }
}

export default connect(mapStateToProps)(Login);

