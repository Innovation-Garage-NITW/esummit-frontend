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
    const [events, setEvents] = useState([]);
    // const [spons, setSpons] = useState([]);
    function logOut() {
        return signOut(auth);
    }

    async function getEvents() {
        if (events.length !== 0) return events;
        try {
            const fetched_events = [];
            const response = await fetch(
                "https://us-central1-esummit-ig.cloudfunctions.net/getEvents"
            );
            const data = await response.json();
            for (const event of data['events']) {
                // console.log(event);
                fetched_events.push(event);
            }
            setEvents(fetched_events);
            // setEventFetched(true);
            // console.log(fetched_events);
            return fetched_events;
        } catch (error) {
            console.log("Error getting events:", error);
        }
    }

    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(auth,
            "recaptcha-container",
            () => {
                console.log('recaptcha resolved..')
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
                setUpRecaptha,
                getEvents,
            }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}