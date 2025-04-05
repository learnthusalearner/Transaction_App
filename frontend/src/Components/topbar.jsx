import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Topbar = () => {
    const navigate=useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="shadow h-14 px-4 py-2 relative">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                    Transaction
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col justify-center h-full mr-4">
                        Hello
                    </div>
                    <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center mt-1 mr-2 cursor-pointer" onClick={toggleDropdown}>
                        <div className="flex flex-col justify-center h-full text-xl">
                            U
                        </div>
                    </div>
                </div>
            </div>
            {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={()=>navigate('/signup')}>
                        Sign Up
                    </button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100"  onClick={()=>navigate('/signin')}>
                        Sign In
                    </button>
                </div>
            )}
        </div>
    );
};

export default Topbar;