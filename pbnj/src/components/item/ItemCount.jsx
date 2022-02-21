import React , { useState, useContext } from "react";
import { cartContext } from '../context/CartContext';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { MinusCircleIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";

export default function ItemCount({stock, itemPrice, name, number, classes}) {

    const {onAdd, finishPurchase} = useContext(cartContext);
    const [ammount , setAmmount] = useState(stock > 0 ? 1 : 0);
    const [price , setPrice] = useState(itemPrice);

    const sum = () => {
        if(ammount < stock){
            setAmmount(ammount + 1);
            setPrice(itemPrice * (ammount + 1));
        }
    };
    const subtract = () => {
        if(ammount > 0){
            setAmmount(ammount - 1);
            setPrice(itemPrice * (ammount - 1));
        }
    };

    return (
        <>
            <div className={`flex flex-wrap justify-center items-center m-auto text-neutral-800 ${classes}`}>
                <p className="w-full text-center font-bold">Ammount</p>
                <div className="w-full flex justify-center">
                    <MinusCircleIcon className="w-6 h-6" onClick={() => subtract()} />
                    <p className="w-10 text-center mx-2 font-semibold">{ammount}</p>
                    <PlusCircleIcon className="w-6 h-6" onClick={() => sum()} />
                </div>
                <p className="w-full font-bold text-center mt-0">U$D {price}</p>
            </div>
            {finishPurchase
                ?
                    <Link to={"/pbnj/cart"} className="text-center bg-red-500 rounded-md w-20 mt-0 mb-2 shadow m-auto font-bold">Checkout</Link>
                :
                    stock > 0
                        ?
                            <button className="flex bg-red-500 rounded-md w-28 mt-0 mb-2 shadow" onClick={() => onAdd(ammount, name, price, number)}>
                                <p className="m-auto font-bold">Add To Cart</p>
                                <ShoppingCartIcon className="m-auto w-4 h-6" />
                            </button>
                        :
                            <button className="flex bg-red-900 rounded-md w-28 mt-0 mb-2 shadow cursor-not-allowed" disabled>
                                <p className="m-auto font-bold">Out of Stock</p>
                            </button>
            }
            {ammount === 0 && stock > 0 && <p className="font-bold mb-2 px-1 rounded bg-black/40 text-[#0596A6]">Ammount must be more than 0!</p>}
        </>
    );
}