/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../configs/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const MyContext = createContext();
const googleProvider = new GoogleAuthProvider();

const MyProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    // console.log(user);

    //create user
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //update user
    const updateUser = (name, url) => {
        setLoading(true);
        return updateProfile(auth.currentUser,
            {
                displayName: name,
                photoURL: url
            });
    };
    //signIn
    const signInByEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    //Google sign in
    const signInByGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {//get token
                axiosPublic.post('/jwt', { email: currentUser?.email })
                    .then(res => {
                        // console.log(res?.data?.token);
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token);
                            setLoading(false);
                        }
                    })
            } else {//remove token
                localStorage.removeItem('token');
                setLoading(false);
            }
        });
        return () => unSubscribe();
    }, [user?.email, axiosPublic]);
    //sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authContents = {
        user,
        setUser,
        loading,
        signUp,
        updateUser,
        signInByEmail,
        signInByGoogle,
        logOut
    };
    return (
        <MyContext.Provider value={authContents}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;