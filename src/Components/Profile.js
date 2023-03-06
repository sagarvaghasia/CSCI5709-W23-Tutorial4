import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';

import { useNavigate } from "react-router-dom";

function Profile() {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();

    const navigateUserDetailPage = (id) => {
        navigate("/userDetail", { state: id });

    }


    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get(
                'https://express-t4.onrender.com/api/users',
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                }
            );
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='profile-div'>
            <h1>User Profiles</h1>
            <input
                type="text"
                value={searchText}
                onChange={handleSearchTextChange}
                placeholder="Search by first name or last name"
            />
            <div>
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        <img src={user.picture} alt="user-img" />
                        <span><h1>{user.name}</h1></span>
                        <h3>{user.email}</h3>
                            
                        
                        <button onClick={() => { navigateUserDetailPage(user._id) }}>select this user</button>

                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}
export default Profile;

// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://reactjs.org/docs/hooks-intro.html
//https://stackoverflow.com/questions/37295377/how-to-navigate-from-one-page-to-another-in-react-js
//https://www.makeuseof.com/react-search-bar-filters-data-create/
