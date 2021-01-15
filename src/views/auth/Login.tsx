import * as React from "react";
import {FormGroup, Label, Input, Button} from 'reactstrap';
import { useHistory } from "react-router-dom";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {loginAction, socialLoginRequest} from "../../actions/AuthActions";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('braydonalan@gmail.com');
    const [password, setPassword] = useState('password');

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, [setEmail]);

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    }, [setPassword]);

    const loginUser = useCallback(async () => {
        await dispatch(loginAction({
            email,
            password,
        }));
        history.push("/");
    }, [history, email, password, dispatch]);

    const socialLogin = useCallback(() => {
        dispatch(socialLoginRequest({
            social: 'github'
        }));
        // history.push("/");
    }, [dispatch]);

    return (
        <div className="w-full flex flex-col p-4 h-full md:w-1/2 md:self-center lg:w-1/3">
            <div className="text-4xl font-bold text-black self-center md:text-5xl lg:text-6xl">
                Login
            </div>
            <FormGroup className="form-control">
                <Label for="LOGIN_EMAIL" className="text-black">Email</Label>
                <Input type="email" required className="form-input" name="email" id="LOGIN_EMAIL" placeholder="Email"
                       value={email}
                       onChange={handleEmailChange}
                />
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="LOGIN_PASSWORD" className="text-black">Password</Label>
                <Input type="password" required className="form-input" name="password" id="LOGIN_PASSWORD"
                       placeholder="Password" value={password}
                       onChange={handlePasswordChange}
                />
            </FormGroup>
            <Button className="btn-primary" onClick={loginUser}>Login</Button>
            <Button className="btn-primary" onClick={socialLogin}>Social Login</Button>
        </div>
    );
};

export default Login;
