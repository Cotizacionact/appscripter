"use client"
import Image from "@/node_modules/next/image";
import React from "react"
import { CartDetails, UserDetails } from './details';


export const Header = ({ }: {  }) => {

    const [show, setShow] = React.useState<boolean>(false)

    return (
        <header className="w-full flex items-center justify-between bg-[#1d4ed8] p-5 h-[5vh]">
            <Image src={"/Logo_Original.png"} width={40} height={40} alt="Logo" className="rounded bg-white " />
            <div className=" hidden sm:flex w-1/3 justify-evenly text-white items-center">
                <p>Services</p>
                <p>About Us</p>
                <p className="bg-white text-black p-2 rounded-xl">Login</p>
            </div> 
            <div className="space-y-2 border p-2 rounded sm:hidden">
              <div className="w-8 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-white"></div>
            </div>
            { show === true &&
            <div className="absolute w-1/3 bg-white border right-0 bottom-[-100%] rounded p-2">
              <p className="border-b text-center hover:bg-gray-200 hover:rounded">Services</p>
              <p className="border-b text-center hover:bg-gray-200 hover:rounded">About Us</p>
              <p className="text-center bg-green-500 hover:bg-green-700 rounded font-bold text-white">Login</p>
            </div>
            }
        </header>
    );
};
