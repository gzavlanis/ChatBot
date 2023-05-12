import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className = "initial left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-zinc-800 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
                data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-color="white" data-te-sidenav-mode="side" data-te-sidenav-content="#content"
                style = {{float: "left"}}>
                    <h2>Questions</h2>
                    <ul className = "relative m-0 list-none px-[0.2rem]">
                        <li className = 'relative'>
                            <button className = "inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                                type = 'button' data-te-ripple-init>
                                    Tell me about Skill90
                            </button>
                        </li>
                    </ul>
            </nav>
        );
    }
}