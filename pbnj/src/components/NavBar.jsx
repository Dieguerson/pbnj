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
                                <NavLink activeClassName="underline" className="visited:text-black mx-2 font-bold" to={"/types"}>Types</NavLink>
                                <ul className="bg-[#F2778D]">
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:normal"}>- Normal</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:fire"}>- Fire</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:water"}>- Water</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:grass"}>- Grass</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:electric"}>- Electric</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:ice"}>- Ice</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:fighting"}>- Fighting</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:poison"}>- Poison</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:ground"}>- Ground</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:flying"}>- Flying</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:psychic"}>- Psychic</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:bug"}>- Bug</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:rock"}>- Rock</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:ghost"}>- Ghost</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/types/:dragon"}>- Dragon</NavLink>
                                    </li>
                                    
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