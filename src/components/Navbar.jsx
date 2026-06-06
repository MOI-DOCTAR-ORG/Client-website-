import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import Close from '../assets/close.png'
import Menu from '../assets/burger-menu.png'

const clientAppUrl = 'https://client-web-ebon-theta.vercel.app'

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <div className='flex justify-between items-center px-6
                lg:px-20 py-4 sticky top-0 z-20
                backdrop-blur-xl font-medium'>

            <img src={Logo}
                className="w-32 sm:w-40" alt="Logo" />

            <div className={`sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
        max-sm:h-full max-sm:flex-col max-sm:bg-blue-700 max-sm:text-white
        max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

                <img src={Close} alt="Close" className='w-5 absolute top-4 right-4 cursor-pointer sm:hidden'
                    onClick={() => setSidebarOpen(false)} />

                <a onClick={() => setSidebarOpen(false)} href="#" className='sm:hover:border-b text-blue-700 max-sm:text-white'>Home</a>
                <a onClick={() => setSidebarOpen(false)} href="#about" className='text-gray-800 max-sm:text-white'>How it Works</a>
                <a onClick={() => setSidebarOpen(false)} href="#features" className='text-gray-800 max-sm:text-white'>Features</a>
                <a onClick={() => setSidebarOpen(false)} href="#contact" className='text-gray-800 max-sm:text-white'>Contact</a>
            </div>
            <div className='flex items-center gap-2 sm:gap-4'>
                <img src={Menu} alt="Menu" className='w-5 cursor-pointer sm:hidden'
                    onClick={() => setSidebarOpen(true)} />

                <a href="#" className='text-sm max-sm:hidden flex
            items-center gap-2 bg-gray-300 text-black-800 px-6 py-2 rounded-full
            cursor-pointer hover:scale-103 transition-all max-[850px]:hidden'>
                    Login
                </a>

                <a href={clientAppUrl} className='text-sm max-sm:hidden flex
            items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full
            cursor-pointer hover:scale-103 transition-all bg-gradient-to-r from-blue-500 to-blue-700 max-[780px]:hidden'>
                    Get Started
                </a>
            </div>

        </div>
    )
}

export default Navbar
