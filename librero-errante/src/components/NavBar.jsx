import React from "react";
import logo from '../img/wax.svg';
import CartWidjet from "./CartWidget";

export default function NavBar() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-neutral-800">
                <nav className="flex flex-row flex-nowrap justify-between p-2 pb-1">
                    <section className="flex p-0 m-0">
                        <a href=""><img src={logo} className="w-[50px]" alt="Logo" /></a>
                        <a className="self-center text-center p-0 m-0 w-52 xs:text-sm text-red-500 visited:text-red-300" href=""><strong>The Wandering Librarian Woric Leatherbound</strong></a>
                    </section>
                    <section className="flex items-center border-0">
                        <ul className="text-red-500">
                            <li>
                                <a className="visited:text-red-300 mx-2" href="">Home</a>
                            </li>
                            <li>
                                <a className="visited:text-red-300 mx-2" href="">Stories</a>
                                <ul className="bg-neutral-800">
                                    <li>
                                        <a className="visited:text-red-300 whitespace-nowrap m-2" href="">- Grimund Bronzeheart</a>
                                    </li>
                                    <li><hr className="border border-red-500 w-100 mx-4" /></li>
                                    <li>
                                        <a className="visited:text-red-300 whitespace-nowrap m-2" href="">- Li Zhu</a>
                                    </li>
                                    <li><hr className="border border-red-500 w-100 mx-4" /></li>
                                    <li>
                                        <a className="visited:text-red-300 whitespace-nowrap m-2" href="">- Dain Thundermaster</a>
                                    </li>
                                    <li><hr className="border border-red-500 w-100 mx-4" /></li>
                                    <li>
                                        <a className="visited:text-red-300 whitespace-nowrap m-2" href="">- Bharash</a>
                                    </li>
                                    <li><hr className="border border-red-500 w-100 mx-4" /></li>
                                    <li>
                                        <a className="visited:text-red-300 whitespace-nowrap m-2" href="">- Bratoslav Bersk</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="visited:text-red-300 mx-2 whitespace-nowrap" href="">About Us</a>
                            </li>
                            <li>
                                <a className="visited:text-red-300 mx-2" href="">Contact</a>
                            </li>
                            <li>
                                <CartWidjet />
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
        </>
    );
}