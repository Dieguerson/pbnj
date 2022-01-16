import React , { useState } from "react";
import { PlusCircleIcon } from '@heroicons/react/outline';
import { MinusCircleIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export default function ItemCount({name , stock}) {

    const [ammount , setAmmount] = useState(0)
    const sum = () => {
        if(ammount < stock){
            setAmmount(ammount + 1);
        }else{
            alert("Oops! Seems like our stock is a little short!")
        }
    }
    const subtract = () => {
        if(ammount > 0){
            setAmmount(ammount - 1);
        }
    }
    const onAdd = () => {
        if(ammount > 0){
            alert(ammount + " units have been added to the cart!")
        }else{
            alert("There's nothing to add!")
        }
    }

    return (
        <>
        <div className="mx-10">
            <h1 className="mt-5 font-bold">{name}</h1>
            <div className="flex flex-wrap justify-center items-center w-40 h-24 m-auto mt-2 pt-2 rounded-tl-3xl rounded-br-3xl text-neutral-800 bg-[#d99a8b] shadow-lg border border-[#d27f7f]">
                <p className="w-full text-center font-bold">Ammount</p>
                <MinusCircleIcon className="w-6 h-6 mb-1" onClick={()=>subtract()} />
                <p className="w-10 text-center mb-1 mx-2 font-semibold">{ammount}</p>
                <PlusCircleIcon className="w-6 h-6 mb-1" onClick={()=>sum()} />
                <button className="flex bg-red-500 rounded-md w-20 mt-0 mb-2 shadow" onClick={()=>onAdd()}>
                    <p className="m-auto font-bold">To Cart</p>
                    <ShoppingCartIcon className="m-auto w-4 h-6" />
                </button>
            </div>
        </div>
        </>
    );
}