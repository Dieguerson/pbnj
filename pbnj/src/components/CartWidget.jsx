import React , { useContext, useState, useEffect } from "react";
import { cartContext } from './CartContext.jsx'
import { ShoppingCartIcon } from '@heroicons/react/solid';

export default function CartWidjet() {

    const {pokemonCart} = useContext(cartContext)
    const [cartAmmount, setCartAmmount] = useState(0)

    useEffect(() => {
        if (pokemonCart.length > 0){
            let sum = 0
            pokemonCart.forEach(pokemon => {
                sum += pokemon.ammount
            })
            setCartAmmount(sum)
            console.log("holi")
        }
    }, [pokemonCart])

    return (
        <>
            <ShoppingCartIcon className="text-[#123E59] w-6 inline-block" />
            {pokemonCart.length > 0
            ?
            <p className="inline-block">({cartAmmount})</p>
            :
            null
            }
            
        </>
    );
}