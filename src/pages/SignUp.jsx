import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {UserAuth} from "../contexts/FirebaseAuthContext";
import swal from 'sweetalert';

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // Read that createUser from context without props drilling
    const {
        createUser
    } = UserAuth();

    const navigateToAccountPage = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            await createUser(email, password);
            swal('your account is created successfully');
            // navigate new user to account page
            navigateToAccountPage('/account');
        } catch (e) {
            swal(e.message);
            setErrorMessage(e.message);
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h2 className="font-weight-bold my-2">
                        Sign up for a free account 
                    </h2>
                    <p>
                        Already have an account yet? <u> <Link to='/'>Sign in.</Link> </u>
                    </p>
                    <form autoComplete="off">
                        <div className="form-group">
                            <label>Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmail}
                            />
                            <small className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Password"
                                value={password}
                                onChange={handlePassword}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}