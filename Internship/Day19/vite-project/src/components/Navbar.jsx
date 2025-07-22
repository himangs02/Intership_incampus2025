import React from "react";

function Navbar(props){

    return(
        <>
         <nav className="flex justify-between">


            <ul className="">
                <a href=""><svg className="h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg></a>
            </ul>

            <ul className="flex gap-auto">
                <li className="text-black w-max px-2 py-1 font-mono text-xl after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 "><a href="">Home</a></li>
                <li className="text-black w-max px-2 py-1 font-mono text-xl after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 "><a href="">About</a></li>
                <li className="text-black w-max px-2 py-1 font-mono text-xl after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 "><a href="">Services</a></li> 
            </ul>

            <ul className="">
                <li><button className="border-2 border-black  rounded-xl px-2 font-mono text-xl">Dark</button></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;