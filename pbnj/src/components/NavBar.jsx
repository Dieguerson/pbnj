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
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/normal"}>- Normal</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/fire"}>- Fire</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/water"}>- Water</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/grass"}>- Grass</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/electric"}>- Electric</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/ice"}>- Ice</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/fighting"}>- Fighting</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/poison"}>- Poison</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/ground"}>- Ground</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/flying"}>- Flying</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/psychic"}>- Psychic</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/bug"}>- Bug</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/rock"}>- Rock</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/ghost"}>- Ghost</NavLink>
                                    </li>
                                    <li><hr className="border border-[#123E59] w-100 mx-4" /></li>
                                    <li>
                                        <NavLink activeClassName="underline" className="visited:text-black whitespace-nowrap m-2" to={"/pbnj/types/dragon"}>- Dragon</NavLink>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li>
                                <NavLink activeClassName="underline" className="visited:text-black mx-2 font-bold" to={"/pbnj/cart"}><CartWidjet /></NavLink>
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
        </>
    );
}