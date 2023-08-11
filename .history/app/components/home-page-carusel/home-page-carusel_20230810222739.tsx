"use client"
import { AiOutlineArrowUp } from 'react-icons/ai';
import React from 'react';

type Carusel = {
    1: React.ReactNode;
    2: React.ReactNode;
    3: React.ReactNode;
};

export const HomePageCarusel = () => {
    const max = 3
    const min = 1
    const [state, setState] = React.useState<keyof Carusel>(1);
    return (
        <div className="relative">
            {handleCarusel[state as keyof Carusel]}
            <button className="absolute right-0 top-[50%] flex w-10 rotate-90 justify-center bg-black p-0.5 text-white opacity-40 hover:opacity-70" onClick={()=>{ console.log(state,max); if(state >= max){;setState(state+1 as keyof Carusel)}else{setState(1)}}}>
                <AiOutlineArrowUp />
            </button>
            <button className="absolute left-0 top-[50%] flex w-10 -rotate-90 justify-center bg-black p-0.5 text-white opacity-40 hover:opacity-70" onClick={()=>{if(state <= min){setState(state-1 as keyof Carusel)}else{setState(3)}}}>
                <AiOutlineArrowUp />
            </button>
            {state}
        </div>
    );
};

const handleCarusel: Carusel = {
    1: <Home />,
    2: <Two />,
    3: <Three />,
};

function Home() {
    return (
        <div className="flex h-[40vh] p-2 px-10">
            <div className="w-1/2 p-2">
                <h1 className="text-5xl font-bold">
                    Create taylor made websites and web aplications.
                </h1>
                <h2 className="mt-2">
                    If you're looking for a personalized aplications or website
                    try our service. You will be guided throughout the planning
                    and development process to ensure you achive your programing
                    needs.
                </h2>
                <button className="mt-2 rounded bg-green-500 p-2 text-white hover:bg-green-700">
                    Get Quote
                </button>
            </div>
            <div className="flex w-1/2 items-center justify-center p-2">
                <img src="/Logo_Original.png" className="w-2/3 rounded"/>
            </div>
        </div>
    );
}

function Two() {
    return (
        <div className="flex h-[40vh] p-2 px-10">
            <div className="w-1/2 p-2">
                <h1 className="text-5xl font-bold">No recurring fees</h1>
                <h2 className="mt-2">
                    Although exceptions apply, we provide services where your
                    web aplication or website may be hosted for free with access
                    to a database. This being acheived with the help of Google
                    App Script
                </h2>
                <button className="mt-2 rounded bg-green-500 p-2 text-white hover:bg-green-700">
                    Learn More
                </button>
            </div>
            <div className="relative w-1/2 p-2">
                <img src="/HomePage2.png" className="absolute left-[25%] h-full" />
                <h1 className="absolute left-14 top-[30%] -rotate-45 text-xl font-bold">
                    Free 15 Gb Storage!
                </h1>
            </div>
        </div>
    );
}

function Three() {
    const [show, setShow] = React.useState<boolean>(true);
    const [show2, setShow2] = React.useState<boolean>(true);
    return (
        <div className="flex h-[40vh] p-2 px-10">
            <div className="flex w-1/3 flex-col items-center">
                <h1 className="text-center text-4xl">Front End</h1>
                {show === false && <p className="p-2 text-center">
                    This part of development relates to visual aspect of the
                    aplication, also known as the User Interface
                </p>}
                <div className="flex w-3/4 flex-col items-center rounded-xl border-2 bg-[#1d4ed8]  p-2 text-2xl text-white">
                    <h3 className="bg-blue-200 p-1 w-4/5 rounded text-center bg-sky-400 hover:bg-sky-600" onClick={()=>{setShow(!show)}}>See Tools</h3>
                    {show === true && (
                        <div className="mt-2 flex w-full flex-col items-center space-y-2 rounded-lg bg-white p-2">
                            <img
                                src="/tailwindcss-logotype.svg"
                                className="w-2/3 p-2 h-10"
                            />
                             <div className="w-full border-b border-black"></div>
                            <img src="/CoduxLogo.png" className="w-1/2" />
                            <div className="w-full border-b border-black"></div>
                            <img src="/NextLogo.png" className="w-2/5" />
                        </div>
                    )}
                </div>
            </div>
            <div className="w-1/3 p-2">
                <h1 className="text-center text-5xl font-bold">Our Tools</h1>
                <h2 className="mt-2 text-center"></h2>High quality work require outstanding
                tools. Using state of the art libraries and reliable providers
                we bring value to any costumer.
                <center>
                    <button className="mt-2 rounded bg-green-500 p-2 text-white hover:bg-green-700">
                        Learn More
                    </button>
                </center>
            </div>
            <div className="flex w-1/3 flex-col items-center">
                <h1 className="text-center text-4xl">Back End</h1>
               {show2 === false && <p className="text-center">
                    This part of development relates to data aspect of the
                    aplication, here you will be able to store images, and
                    information in databases.
                </p>
                }
                <div className="flex w-3/4 flex-col items-center rounded-xl border-2 bg-[#1d4ed8]  p-2 text-2xl text-white">
                    <h3 className="bg-blue-200 p-1 w-4/5 rounded text-center bg-sky-400 hover:bg-sky-600" onClick={()=>{setShow2(!show2)}}>See Tools</h3>
                    {show2 === true && (
                        <div className="mt-2 flex w-full flex-col items-center space-y-2 rounded-lg bg-white p-2">
                            <img
                                src="/NodeLogo.svg"
                                className="w-2/3 p-2"
                            />
                            <div className="border-b border-black w-full"></div>
                            <img src="/GoogleAppLogo.png" className="w-2/3" />
                            <div className="w-full border-b border-black"></div>
                            <img src="/MongoDB_Logo.svg.png"className="w-3/5" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
