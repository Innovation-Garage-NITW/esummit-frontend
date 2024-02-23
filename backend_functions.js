import { getIdToken } from "firebase/auth";

export async function getEvents() {
    try {
        const fetched_events = [];
        const response = await fetch(
            "https://us-central1-esummit-ig.cloudfunctions.net/getEvents"
        );
        const data = await response.json();
        for (const event of data['events']) {
            fetched_events.push(event);
        }
        // console.log(fetched_events);
        return fetched_events;
    } catch (error) {
        console.log("Error getting events:", error);
    }
}

export async function getSpeakers() {
    try {
        const fetched_speakers = [];
        const response = await fetch(
            "https://us-central1-esummit-ig.cloudfunctions.net/getSpeakers"
        );
        const data = await response.json();
        for (const speaker of data['speakers']) {
            // console.log(speaker);
            fetched_speakers.push({
                title: speaker['name'],
                description: speaker['description'],
                imgUrl: speaker['photo'],
                id: speaker['id'],
                email: "sg21csb0f07@student.nitw.ac.in",
                linkedin: "https://www.linkedin.com/in/samrat-gupta-1b1227232/",
            });
        }
        // console.log(fetched_speakers);
        return fetched_speakers;
    } catch (error) {
        console.log("Error getting speakers:", error);
    }
}

export async function getSponsors() {
    try {
        const fetched_sponsors = [];
        const response = await fetch(
            "https://us-central1-esummit-ig.cloudfunctions.net/getSponsors"
        );
        const data = await response.json();
        for (const sponsor of data['sponsors']) {
            // console.log(sponsor);
            fetched_sponsors.push(sponsor);
        }
        // console.log(fetched_sponsors);
        return fetched_sponsors;
    } catch (error) {
        console.log("Error getting sponsors:", error);
    }
}

export async function getTeams() {
    try {
        const fetched_teams = [];
        const response = await fetch(
            "https://us-central1-esummit-ig.cloudfunctions.net/getTeam"
        );
        const data = (await response.json())['teams'];
        // console.log(data);
        for (const team in data) {
            fetched_teams.push({
                name: team,
                members: data[team]['members'],
                order: data[team]['order'],
            });
        }
        fetched_teams.sort((a, b) => a.order - b.order);
        console.log(fetched_teams);
        return fetched_teams;
    } catch (error) {
        console.log("Error getting teams:", error);
    }
}

export async function registerUser(user, name, email, college) {
    try {
        const idToken = await getIdToken(user);
        const response = await fetch('https://us-central1-esummit-ig.cloudfunctions.net/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${idToken}`
            },
            body: JSON.stringify({
                id: user.uid,
                email: email,
                name: name,
                college: college,
                phone: user.phoneNumber,
                photoUrl: ''
            })
        });
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log("Error registering user:", error);
    }
}

export async function loginUser(user) {
    try {
        const idToken = await getIdToken(user);
        const response = await fetch('https://us-central1-esummit-ig.cloudfunctions.net/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${idToken}`
            },
            body: JSON.stringify({
                id: user.uid,
                phone: user.phoneNumber,
            })
        });
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log("Error logging in user:", error);
    }
}

export async function eventRegister(user, event_id) {
    try {
        const idToken = await getIdToken(user);
        const response = await fetch('https://us-central1-esummit-ig.cloudfunctions.net/eventRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${idToken}`
            },
            body: JSON.stringify({
                userId: user.uid,
                event: event_id
            })
        });
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log("Error registering user:", error);
    }
}