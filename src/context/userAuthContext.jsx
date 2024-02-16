/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signOut,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function logOut() {
        return signOut(auth);
    }

    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(auth,
            "recaptcha-container",
            () => {
                // console.log('recaptcha resolved..')
            }

        );
        // console.log(recaptchaVerifier);
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            // console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{
                user,
                logOut,
                setUpRecaptha
            }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}