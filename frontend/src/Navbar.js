import React, { useState } from 'react';

export default function Navbar(){
    
    return(
        <nav className = "initial left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-zinc-800 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
            data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-color="white" data-te-sidenav-mode="side" data-te-sidenav-content="#content"
            style = {{float: "left"}}>
            <h2 className = 'text-3xl font-bold dark:text-white w-full mt-2 text-center'>Quick Results</h2>
            <ul className = "relative mt-4 m-3 list-none px-[0.2rem]">
                <li className = 'relative'>
                    <button className = "w-full inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        type = 'button' data-te-ripple-init onClick = {(e) => {}}>
                            What is Github?
                    </button>
                </li>
            </ul>
            <ul className = "relative mt-4 m-3 list-none px-[0.2rem]">
                <li className = 'relative'>
                    <button className = "w-full inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        type = 'button' data-te-ripple-init>
                            What can Github do?
                    </button>
                </li>
            </ul>
            <ul className = "relative mt-4 m-3 list-none px-[0.2rem]">
                <li className = 'relative'>
                    <button className = "w-full inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        type = 'button' data-te-ripple-init>
                            How can I create a repository in Github?
                    </button>
                </li>
            </ul>
            <ul className = "relative mt-4 m-3 list-none px-[0.2rem]">
                <li className = 'relative'>
                    <button className = "w-full inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        type = 'button' data-te-ripple-init>
                            How can I clone a Github repository?
                    </button>
                </li>
            </ul>
            <ul className = "relative mt-4 m-3 list-none px-[0.2rem]">
                <li className = 'relative'>
                    <button className = "w-full inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        type = 'button' data-te-ripple-init>
                            How can I get Github?
                    </button>
                </li>
            </ul>
        </nav>
    );
}