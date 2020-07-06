import * as React from 'react';
import {Button, FormGroup, Input, Label} from "reactstrap";

interface RegisterForm {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

const Register = (props: RegisterForm) => {

    return (

        <div className="w-full flex flex-col p-4 h-full self-center md:w-1/2 lg:w-1/3">
            <div className="text-4xl font-bold text-black self-center md:text-5xl lg:text-6xl">
                Register
            </div>
            <FormGroup className="form-control">
                <Label for="LOGIN_EMAIL" className="text-black">Email</Label>
                <Input type="email" required className="form-input" name="email" id="LOGIN_EMAIL" placeholder="Email" />
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="LOGIN_NAME" className="text-black">Name</Label>
                <Input type="text" required className="form-input" name="name" id="LOGIN_NAME" placeholder="Name" />
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="LOGIN_PASSWORD" className="text-black">Password</Label>
                <Input type="password" required className="form-input" name="password" id="LOGIN_PASSWORD" placeholder="Password" />
            </FormGroup>
            <FormGroup className="form-control">
                <Label for="LOGIN_CONFIRM_PASSWORD" className="text-black">Confirm Password</Label>
                <Input type="password" required className="form-input" name="confirm_password" id="LOGIN_CONFIRM_PASSWORD" placeholder="Confirm Password" />
            </FormGroup>
            <Button className="btn-primary">Register</Button>
        </div>
    );
};

export default Register;
