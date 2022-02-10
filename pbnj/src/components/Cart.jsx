import React, { useContext, useEffect, useState } from "react";
import { cartContext } from './CartContext.jsx'
import { Link } from 'react-router-dom'

export default function Cart() {

    const {pokemonCart, onRemove, forceRender} = useContext(cartContext)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newTotal = () => {
            let total = 0
            pokemonCart.forEach(pokemon => total += pokemon.price)
            return total
        }
        setCartTotal(newTotal)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forceRender])

    return (
        <>
        
            <h1 className="text-2xl font-bold text-center my-4">Welcome to your Cart!</h1>
            <section className="flex flex-wrap justify-center">
                {pokemonCart.length > 0
                ?
                    pokemonCart.map(soldPokemon => 
                        <article className={`flex flex-col items-center border-8 rounded-lg border-amber-300 mt-14 mx-auto w-60 bg-gradient-to-br ${soldPokemon.bgGradient}`} key={soldPokemon.number}>
                            <h3 className="w-full text-center capitalize font-bold text-2xl">{soldPokemon.name}</h3>
                            <img src={soldPokemon.sprite} className="h-fit" alt={soldPokemon.name}/>
                            <p>Total in Cart: <b>{soldPokemon.ammount}</b></p>
                            <p>Unit Price: U$D <b>{soldPokemon.unitPrice}</b> </p>
                            <p>Total Price: U$D <b>{soldPokemon.price}</b> </p>
                            <div className="flex flex-row">
                                <button className="flex bg-red-500 rounded-md w-20 m-2 shadow" onClick={() => onRemove(1, soldPokemon.number)}>
                                    <p className="m-auto font-bold">Remove One</p>
                                </button>
                                <button className="flex bg-red-500 rounded-md w-20 m-2 shadow" onClick={() => onRemove(soldPokemon.ammount, soldPokemon.number)}>
                                    <p className="m-auto font-bold">Remove All</p>
                                </button>
                            </div>
                        </article>
                    )
                :
                <h2 className="text-lg font-bold text-center my-4">Looks like theres nothing here! Lets get <Link className="text-[#123E59] visited:text-red-500" to={"/home"}>shopping!</Link></h2>
                }
            </section>
            {pokemonCart.length > 0
            ?
                <p className="text-center mt-5 text-2xl">Total: U$D <b>{cartTotal}</b></p>
            :
            null
            }
        
            
        </>
    );
}