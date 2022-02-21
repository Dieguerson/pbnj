import React , { useContext } from "react";
import { cartContext } from '../context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/solid';

export default function CartWidjet() {

    const {cartAmmount} = useContext(cartContext);

    return (
        <>
            <ShoppingCartIcon className="text-[#123E59] w-6 inline-block" />
            {cartAmmount > 0
                ?
                    <p className="inline-block">({cartAmmount})</p>
                :
                    null
            }
            
        </>
    );
}