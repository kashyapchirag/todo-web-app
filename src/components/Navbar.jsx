import React from "react";
import todoIcon from './todoicon.png';


const Navbar = () => {
    return (
        <nav className="bg-blue-200">
            <ul className="flex text-[2.4rem] justify-between items-center">
                <li className="flex gap-4 px-30 items-center h-[5rem] hover:bg-blue-300 cursor-pointer hover:text-[2.7rem] transition-all">
                    <span>justDo</span>
                    <img className="w-[4rem]" src={todoIcon}/>
                </li>
                <div className="flex items-center mr-[3.75rem]">
                    <li className="h-[5rem] px-15 flex items-center hover:bg-blue-300 cursor-pointer hover:text-[2.7rem] transition-all">Home</li>
                    <li className="h-[5rem] px-15 flex items-center hover:bg-blue-300 cursor-pointer hover:text-[2.7rem] transition-all">Your Tasks</li>
                </div>
            </ul>
        </nav>
    )
};

export default Navbar;
