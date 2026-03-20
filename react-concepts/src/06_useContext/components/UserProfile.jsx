import React, { useContext } from 'react'
import { Data } from '../context/Context';

function UserProfile() {

    const { user, setUser } = useContext(Data);

    function toggleLogin() {
        setUser({
            ...user,
            isLoggedIn: !user.isLoggedIn,
        })
    }

    return (
        <div>
            <h1 className='text-2xl'>👉 UserProfile Component</h1>
            <div>
                {/* 🔹 Name */}
                <p>
                    Name: {user.isLoggedIn ? user.name : "You have to login"}
                </p>

                {/* 🔹 Status */}
                <p>
                    Status: {user.isLoggedIn ? "Logged In" : "Logged Out"}
                </p>

                {/* 🔹 Toggle Button */}
                <button onClick={toggleLogin}>
                    {user.isLoggedIn ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    )
}

export default UserProfile