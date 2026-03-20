import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AccountLayout() {
    return (
        <>
            <Header />
            <main className='h-[500px]'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default AccountLayout