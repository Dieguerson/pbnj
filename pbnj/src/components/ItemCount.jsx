import React , { useState , useEffect } from "react";
import { PlusCircleIcon } from '@heroicons/react/outline';
import { MinusCircleIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export default function ItemCount({stock , itemPrice}) {

    const [ammount , setAmmount] = useState(stock > 0 ? 1 : 0);
    const [price , setPrice] = useState(itemPrice);

    let sum;
    let subtract;
    let onAdd;

    useEffect(() => {
        sum = () => {
            if(ammount < stock){
                setAmmount(ammount + 1);
                setPrice(itemPrice * (ammount + 1));
            }else{
                alert("Oops! Seems like our stock is a little short!");
            }
        }
        subtract = () => {
            if(ammount > 0){
                setAmmount(ammount - 1);
                setPrice(itemPrice * (ammount - 1));
            }
        }
        onAdd = () => {
            if(ammount > 0){
                alert(ammount + " units have been added to the cart!");
            }else{
                alert("There's nothing to add!");
            }
        }
    })

    return (
        <>
            <div className="flex flex-wrap justify-center items-center m-auto text-neutral-800">
                <p className="w-full text-center font-bold">Ammount</p>
                <div className="w-full flex justify-center">
                    <MinusCircleIcon className="w-6 h-6" onClick={() => subtract()} />
                    <p className="w-10 text-center mx-2 font-semibold">{ammount}</p>
                    <PlusCircleIcon className="w-6 h-6" onClick={() => sum()} />
                </div>
                <p className="w-full font-bold text-center mt-0">U$D {price}</p>
            </div>
            <button className="flex bg-red-500 rounded-md w-20 mt-0 mb-2 shadow" onClick={() => onAdd()}>
                <p className="m-auto font-bold">To Cart</p>
                <ShoppingCartIcon className="m-auto w-4 h-6" />
            </button>
        </>
    );
}