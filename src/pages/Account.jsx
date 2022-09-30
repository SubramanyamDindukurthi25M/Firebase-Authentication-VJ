import {UserAuth} from "../contexts/FirebaseAuthContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const Account = () => {
    const {
        user,
        logOut
    } = UserAuth();

    const navigateToHomePage = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            swal('you logged out successfully');
            navigateToHomePage('/');
        } catch (e) {
            swal(e.message);
        }
    }

    return(
        <div className="container py-2">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h3>
                        Welcome to Account page
                    </h3>
                    <p>
                        User Email : {user && <strong> {user.email} </strong> } 
                    </p>
                    <button
                        className="btn btn-outline-danger"
                        onClick={handleLogOut}
                    >
                        Logout 
                    </button>
                </div>
            </div>
        </div>
    )
}