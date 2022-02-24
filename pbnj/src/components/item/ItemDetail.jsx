import React, { useState, useEffect, useContext } from "react";
import { cartContext } from '../context/CartContext';
import ItemCount from "../item/ItemCount";

export default function ItemDetail({singlePokemon, close}) {

    const {getBgGradient} = useContext(cartContext);

    const bgGradient = getBgGradient(singlePokemon.type1, singlePokemon.type2);

    const [animate, setAnimate] = useState("growing");
    const [opaqueAnimate, setOpaqueAnimate] = useState("opaquelyGrowing");

    useEffect(() => {
        if (close === true) {
            setAnimate("shrinking");
            setOpaqueAnimate("opaquelyShrinking");
        }
    }, [close]);
    
    return (
        <>
            <article className={`flex flex-col items-center border-8 rounded-lg text-black border-amber-300 w-72 h-min bg-gradient-to-br ${bgGradient} ${animate}`}>
                <h3 className={`w-full text-center capitalize font-bold mt-6 ${opaqueAnimate}`}>{singlePokemon.name}</h3>
                <img src={singlePokemon.sprite} className={`w-1/2 h-fit ${opaqueAnimate}`} alt={singlePokemon.name}/>
                <p className={`w-full ml-4 ${opaqueAnimate}`}><b>Type 1:</b> <em className="capitalize">{singlePokemon.type1}</em></p>
                {singlePokemon.type2 !== null
                    ?
                        <p className={`w-full ml-4 ${opaqueAnimate}`}><b>Type 2:</b> <em className="capitalize">{singlePokemon.type2}</em></p>
                    :
                        null
                }
                <p className={`w-full px-2 ${opaqueAnimate}`}><b>Description:</b> {singlePokemon.englishFlavor}</p>
                <ItemCount stock={singlePokemon.stock} itemPrice={singlePokemon.price} name={singlePokemon.name} number={singlePokemon.number} classes={`${opaqueAnimate}`}/>
            </article>
        </>
    );
}

