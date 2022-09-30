import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {UserAuth} from "../contexts/FirebaseAuthContext";

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // Signin User from context without props drilling
    const {
        signInUser
    } = UserAuth();

    const navigateToAccountPage = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            await signInUser(email, password);
            // navigate user to account page
            navigateToAccountPage('/account');
            swal('you are signed in successfully');
        } catch (e) {
            setErrorMessage(e.message);
            swal('your credentials incorrect');
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h2 className="font-weight-bold my-2">
                        Sign in to your account 
                    </h2>
                    <p>
                        Don't have an account yet? <u> <Link to='/signup'>Sign up.</Link> </u>
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
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}