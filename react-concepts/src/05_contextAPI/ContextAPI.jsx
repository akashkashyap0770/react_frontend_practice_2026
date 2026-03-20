import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import { Data } from './context/Context';

function ContextAPI() {

    const [user, setUser] = useState({
        name: "Akash",
        isLoggedIn: false, // ✅ boolean
    });

    /*  Note:- Double Curly braces uses:-
        - Outer {}	JSX ke andar JS likhne ke liye
        - Inner {}	Object banane ke liye
    */
    return (
        <>
            <div>
                {/* Double curly braces are used because JSX requires {} to evaluate JavaScript, and the inner {} represent an object literal. */}
                <Data.Provider value={{ user, setUser }}>
                    <h1 className='text-3xl'>👉 ContextAPI in React</h1>
                    <div>
                        <Dashboard />
                    </div>
                </Data.Provider>
            </div>
        </>
    )
}

export default ContextAPI;