import React from 'react'
import {useContext} from 'react';
import { FaUserCircle } from "react-icons/fa";
import MainContext from '../context/MainContext';

const NavBar = () => {
    const {location,setLocation}=useContext(MainContext);
    const handleLogout = () => {
        window.sessionStorage.removeItem("token");
        localStorage.removeItem("book")
        setLocation('LOGIN');
    }
  return (
    <div>
        <nav class="flex items-center w-full justify-between bg-black p-3 ">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight">BookHive</span>
            </div>
                <div className='flex flex-row gap-4 items-center'>
                    <FaUserCircle style={{cursor:'pointer'}} color="white" size="1.75rem"/>
                    <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white lg:mt-0" onClick={handleLogout}>Sign Out</button>
                </div>
        </nav>
      
    </div>
  )
}

export default NavBar
