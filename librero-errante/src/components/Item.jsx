import React , { useState , useEffect } from "react";
import LoadImg from '../img/wax.png';
import ItemCount from "./ItemCount";

export default function Item({name , stock , itemPrice , description , imgUrl}) {
    return (
        <>
            <div className="bg-neutral-800 w-1/5 rounded-tl-3xl rounded-br-3xl border-4 border-neutral-800 m-auto">
                <h5 className="text-red-500 text-center font-bold pb-1"><em>{name || "Loading..."}</em></h5>
                <img src={imgUrl || LoadImg} className="rounded-tl-3xl rounded-br-3xl m-auto" alt={name || "Loading"} />
                <ItemCount stock={stock || 0} itemPrice={itemPrice || 0} description={description || "Wait for it..."} />
            </div>
        </>
    );
}