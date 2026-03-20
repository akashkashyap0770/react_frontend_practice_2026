import React from 'react'
import UserProfile from './UserProfile'

function Sidebar() {
  return (
    <div>
        <h1 className='text-2xl'>👉 Sidebar</h1>
        <div>
            <UserProfile />
        </div>
    </div>
  )
}

export default Sidebar