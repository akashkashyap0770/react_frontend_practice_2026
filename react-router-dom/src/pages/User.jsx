import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { userName } = useParams();
    console.log("Params:", userName);

    return (
        <div>
            <h1>Your name is {userName}</h1>
        </div>
    )
}

export default User