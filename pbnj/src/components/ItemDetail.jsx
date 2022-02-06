import React, { useContext } from "react";
import { cartContext } from './CartContext.jsx'
import ItemCount from "./ItemCount";

export default function ItemDetail({pokemonDetails, pokemonImage}) {

    const {getTypes, getBgGradient} = useContext(cartContext)

    const types = getTypes(pokemonDetails)

    const bgGradient = getBgGradient(types[0], types[1])
    
    return (
        <>
            <article className={`flex flex-col items-center border-8 rounded-lg border-amber-300 w-72 h-min bg-gradient-to-br ${bgGradient}`}>
                <h3 className="w-full text-center capitalize font-bold">{pokemonDetails.name || "Loading..."}</h3>
                <img src={pokemonImage} className="w-1/2 h-fit" alt={pokemonDetails.name}/>
                {pokemonDetails.types.map(type => <p className="w-full ml-4" key={type.slot}><b>Type {type.slot}:</b> <em className="capitalize">{type.type.name}</em></p>)}
                <p className="w-full px-2"><b>Description:</b> {pokemonDetails.englishFlavor}</p>
                <ItemCount stock={pokemonDetails.stock} itemPrice={pokemonDetails.price} name={pokemonDetails.name} number={pokemonDetails.number}/>
            </article>
        </>
    );
}