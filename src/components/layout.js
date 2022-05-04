import React from 'react'
import { Footer } from './footer'

const Layout = ({ children }) => {
    return (
        <div className='bg-white'>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />
            <div className='bg-lblue text-white flex justify-center p-5'>
                <div className='flex flex-row pr-5 justify-self-end text-xl font-bold space-x-8 font-serif'>
                    <a href="/" className='px-3 underline-offset-4 hover:underline'>Home</a>
                    <a href="/about-us" className='px-3 underline-offset-4 hover:underline'>About Us</a>
                    <a href="/contact-us" className='px-3 underline-offset-4 hover:underline'>Contact Us</a>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default Layout