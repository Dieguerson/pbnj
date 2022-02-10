import React, { useContext } from "react";
import { cartContext } from './CartContext.jsx'
import ItemCount from "./ItemCount";

export default function ItemDetail({pokemonDetails, pokemonImage}) {

    const {getBgGradient} = useContext(cartContext)

    const bgGradient = getBgGradient(pokemonDetails.type1, pokemonDetails.type2)
    
    return (
        <>
            <article className={`flex flex-col items-center border-8 rounded-lg border-amber-300 w-72 h-min bg-gradient-to-br ${bgGradient}`}>
                <h3 className="w-full text-center capitalize font-bold">{pokemonDetails.name || "Loading..."}</h3>
                <img src={pokemonImage} className="w-1/2 h-fit" alt={pokemonDetails.name}/>
                <p className="w-full ml-4"><b>Type 1:</b> <em className="capitalize">{pokemonDetails.type1}</em></p>
                {pokemonDetails.type2 !== null
                ?
                <p className="w-full ml-4"><b>Type 2:</b> <em className="capitalize">{pokemonDetails.type2}</em></p>
                :
                null
                }
                <p className="w-full px-2"><b>Description:</b> {pokemonDetails.englishFlavor}</p>
                <ItemCount stock={pokemonDetails.stock} itemPrice={pokemonDetails.price} name={pokemonDetails.name} number={pokemonDetails.number}/>
            </article>
        </>
    );
}