import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../firebase';

// Invoke createContext Hook
const UserContext = createContext();

export const FirebaseAuthContext = ({children}) => {
    const[user,setUser] = useState({});

    // 1)Create new user to login with email and password.
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    // 2)logout user
    const logOut = () => {
        return signOut(auth);
    }

    // 3)signin user
    const signInUser = (email,password) => {
        signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);
    return(
        <UserContext.Provider value={{createUser,user,logOut,signInUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}