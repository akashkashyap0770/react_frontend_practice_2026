import React, { useEffect, useState } from 'react'

function Put_Method() {

    // PUT Method :- PUT ek HTTP method hai jo existing resource ko poori tarah se replace (full update) karta hai naya data bhej kar.

    const [users, setUsers] = useState([]);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        const fetchUsersData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json();
                const slicedData = data.slice(0, 5);
                console.log('Original Data:', slicedData);
                setUsers(slicedData);
                setOriginalData(slicedData); // reset ke liye save
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsersData();
    }, []);

    const handleUpdatePut = async (id) => {
        const updatedUser = {
            id,
            name: "Updated User",
            username: "PutUsermethodSuccessfully",
            email: "putmethod@example.com",
        };

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(updatedUser),
            });

            const data = await res.json();
            // Update only the user we PUT
            // setUsers(users.map(user => user.id === id ? { ...user, ...data } : user));

            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === id ? data : user
                )
            );

            alert("✅ User updated using PUT");

        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    const handleResetUsers = () => {
        setUsers(originalData);
    }

    return (
        <div>
            <h1>PUT Example: Update All Data</h1>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <p><strong>ID:</strong> {user.id}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <button onClick={() => handleUpdatePut(user.id)}>Update User (PUT)</button>
                    </div>
                ))}
            </div>
            <button onClick={handleResetUsers}><strong>Reset Data</strong></button>
        </div>
    )
}

export default Put_Method