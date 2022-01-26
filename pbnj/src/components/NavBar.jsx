import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/pb&jpokeball.png';
import brand from '../img/pb&j.png'
import CartWidjet from "./CartWidget";

export default function NavBar() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-[#F2778D]">
                <nav className="flex flex-row flex-nowrap justify-between px-2 py-1">
                    <section className="flex items-center p-0 m-0">
                        <Link to={"/home"}><img src={logo} className="w-[60px]" alt="Logo" /></Link>
                        <Link to={"/home"}><img src={brand} className="w-52 ml-4" alt="Brand" /></Link>
                    </section>
                    <section className="flex items-center border-0">
                        <ul className="text-[#123E59]">
                            <li>
                                <NavLink activeClassName="underline" className="visited:text-black mx-2 font-bold" to={"/home"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="underline" className="visited:text-black mx-2 font-bold" to={"hello"}>Types</NavLink>
                                <ul className="bg-[#F2778D]">
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Normal</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Fire</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Water</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Grass</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Electric</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Ice</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Fighting</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Poison</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Ground</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Flying</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Psychic</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Bug</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Rock</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Ghost</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Dark</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Dragon</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Steel</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"hello"}>- Fairy</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <NavLink className="visited:text-black mx-2 whitespace-nowrap font-bold" to={"/hello"}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink className="visited:text-black mx-2 font-bold" to={"/hello"}>Contact</NavLink>
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