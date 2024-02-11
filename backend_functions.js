import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"

export async function getEvents() {
    try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const list = [];
        querySnapshot.forEach(doc => {
            list.push(doc.data());
        })
        return list;
    } catch (error) {
        console.log("Error getting events:", error);
    }
}

export async function getSpeakers() {
    try {
        const querySnapshot = await getDocs(collection(db, "speakers"));
        const list = [];
        querySnapshot.forEach(doc => {
            list.push(doc.data());
        })
        // console.log(list);
        return list;
    } catch (error) {
        console.log("Error getting speakers:", error);
    }
}

export async function getSponsors() {
    try {
        const querySnapshot = await getDocs(collection(db, "sponsors"));
        const list = [];
        querySnapshot.forEach(doc => {
            list.push(doc.data());
        })
        console.log(list);
        return list;
    } catch (error) {
        console.log("Error getting sponsors:", error);
    }
}