import React, { useEffect, useState } from 'react'

function Patch_Method() {

    // PATCH Method :- PATCH ek HTTP method hai jo existing resource ka sirf specific (partial) part update karta hai, bina poore data ko replace kiye.

    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const fetchUsersAPI = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                console.log('Users data:', data);
                setUsers(data.slice(0, 5));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsersAPI();
    }, []);

    const handleUpdatePatch = async (id) => {
        const partialUpdate = {
            username: input.trim() ? input : "Abra ka dabra"
        };

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(partialUpdate),
            });

            const data = await res.json();

            // Update only the patched user in local state
            // setUsers(users.map(user => user.id === id ? { ...user, ...data } : user));

            setUsers(prevUsers => {
                const index = prevUsers.findIndex(user => user.id === id);
                const updatedUsers = [...prevUsers];
                updatedUsers[index] = data; // jis index pe id match hui usko replace kar diya
                return updatedUsers;
            });

            setInput(""); // input clear
            console.log("PATCH Response:", data);

        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    return (
        <div>
            <h1>PATCH Example: Update Username</h1>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <p><strong>ID:</strong> {user.id}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <input type="text" value={input} placeholder='Enter your username' onChange={(e) => setInput(e.target.value)} />
                        <br></br>
                        <button onClick={() => handleUpdatePatch(user.id)}>Update Username (PATCH)</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Patch_Method