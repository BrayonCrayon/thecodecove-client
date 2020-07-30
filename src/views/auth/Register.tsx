import * as React from 'react';
import {Button, FormGroup, Input, Label} from "reactstrap";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {register} from "../../actions/AuthActions";


const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerUser = useCallback(async () => {
        await dispatch(register({
            email,
            name,
            password,
            confirmPassword,
        }));
        history.push("/");
    }, [dispatch, email, name, password, confirmPassword, history]);

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, [setEmail]);

    const handleNameChange = useCallback((e) => {
        setName(e.target.value);
    }, [setName]);

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    }, [setPassword]);

    const handleConfirmPasswordChange = useCallback((e) => {
        setConfirmPassword(e.target.value);
    }, [setConfirmPassword]);

    return (

        <div className="w-full flex flex-col p-4 h-full self-center md:w-1/2 lg:w-1/3">
            <div className="text-4xl font-bold text-black self-center md:text-5xl lg:text-6xl">
                Register
            </div>
            <FormGroup className="form-control">
                <Label for="LOGIN_EMAIL" className="text-black">Email</Label>
                <Input type="email" required className="form-input" name="email" id="LOGIN_EMAIL" placeholder="Email"
                       value={email} onChange={handleEmailChange}/>
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="LOGIN_NAME" className="text-black">Name</Label>
                <Input type="text" required className="form-input" name="name" id="LOGIN_NAME" placeholder="Name"
                       value={name} onChange={handleNameChange}/>
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="LOGIN_PASSWORD" className="text-black">Password</Label>
                <Input type="password" required className="form-input" name="password" id="LOGIN_PASSWORD"
                       placeholder="Password" value={password} onChange={handlePasswordChange}/>
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="LOGIN_CONFIRM_PASSWORD" className="text-black">Confirm Password</Label>
                <Input type="password" required className="form-input" name="confirm_password"
                       id="LOGIN_CONFIRM_PASSWORD" placeholder="Confirm Password" value={confirmPassword}
                       onChange={handleConfirmPasswordChange}/>
            </FormGroup>
            <Button className="btn-primary" onClick={registerUser}>Register</Button>
        </div>
    );
};

export default Register;
