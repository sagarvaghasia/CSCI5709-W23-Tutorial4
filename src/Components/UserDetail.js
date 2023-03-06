import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import "./profile.css"

function UserDetail() {
    const location = useLocation()
    const id = location.state;
    const [user, setUser] = useState([]);


    const fetchUser = async () => {
        const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
        const json = await response.json();
        setUser(json);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h1>User Details</h1>
        
        <div>
            <ul>
                <li>
                    <img src={user.picture} alt="user-img" />
                    <span><h1>{user.name}</h1></span>
                    <h3>{user.email}</h3>
                </li>
            </ul>
        </div>
        </div>
    );
}

export default UserDetail;


