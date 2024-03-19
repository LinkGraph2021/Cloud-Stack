// Profile.js

import { useState, useEffect } from 'react';
import { auth } from '@/app/firebase';

export const getUserName = (user) => {
    if (user) {
        return user.displayName;
    }
    return "Not logged in";
};

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                setUser(userAuth);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome, {getUserName(user)}</p>
        </div>
    );
};

export default Profile;
