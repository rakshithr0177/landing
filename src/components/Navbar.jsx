import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
    return (
        <nav>
            <nav className='w-7/8 p-4 bg-red-500 sticky flex items-center justify-between rounded-lg m-3 ' >
                <h1 className='text-2xl font-bold '>Jobie</h1>
                <main className='w-6/8 flex flex-end'>
                    <HashLink className="text-sky-400 m-2 hover:ease-in-out duration-500 hover:text-sky-700" to={"/#home"}>Home</HashLink>
                    <HashLink className="text-sky-400 m-2 hover:ease-in-out duration-500 hover:text-sky-700" to={"/#contact"}>Contact</HashLink>
                    <HashLink className="text-sky-400 m-2 hover:ease-in-out duration-500 hover:text-sky-700" to={"/#about"}>About</HashLink>
                    <HashLink className="text-sky-400 m-2 hover:ease-in-out duration-500 hover:text-sky-700" to={"/Signin"}>Brands</HashLink>
                    <HashLink className="text-sky-400 m-2 hover:ease-in-out duration-500 hover:text-sky-700" to={"/SignUp"}>Services</HashLink>
                </main>
            </nav>
        </nav>
    )
}

export default Navbar