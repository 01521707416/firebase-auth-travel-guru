import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendPasswordResetEmail } from "firebase/auth"
import app from '../firebase/firebase.config'


export const AuthContext = createContext(null)  /* Created and Exported AuthContext */
const auth = getAuth(app)                       /* getAuth function imported from firebase */
const googleProvider = new GoogleAuthProvider()     /* Firebase googleAuthProvider initialization */
const gitHubProvider = new GithubAuthProvider()     /* Firebase gitHubAuthProvider initialization */

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)          /* Set useState hook for user status */
    const [loading, setLoading] = useState(true)    /* Set useState hook for handling loading */

    /* Firebase user create function */
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* Firebase login function with Email and Password */
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* Firebase google sign in function */
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    /* Firebase gitHub sign in function */
    const gitHubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    /* Firebase password reset function */
    const passwordReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    /* Handle user login status */
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    /* Handle logOut */
    const logOut = () => {
        return signOut(auth)
    }

    /* Set props as objects */
    const authInfo = {
        user,
        createUser,
        logIn,
        loading,
        logOut,
        googleLogIn,
        gitHubLogIn,
        passwordReset,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;