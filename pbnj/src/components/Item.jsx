import React, { useState, useContext } from "react";
import { cartContext } from './CartContext.jsx'
import { NavLink, useParams } from 'react-router-dom'
import LoadImg from '../img/loading.jpeg';
import ItemDetailContainer from './ItemDetailContainer';

export default function Item({name, imgUrl, singlePokemon, fullRender}) {
    
    const {setFinishPurchase} = useContext(cartContext)
    const {typeName, individual} = useParams()
    const pokemonDetails = singlePokemon
    const pokemonImage = imgUrl
    const [render, setRender] = useState(false);
    const [origin, setOrigin] = useState(false)
    const openCard = () => {
        if (typeName !== undefined) {
            setOrigin(!origin)
        }
        setRender(render ? false : true)
        setFinishPurchase(false)
    }
    

    return (
        <>
            <article className="mt-4">
                <div className="w-72 h-72 m-auto flex flex-col items-center justify-center">
                    <section className="bg-red-500 rounded-t-full w-72 h-36 justify-self-start border-8 border-b-[12px] border-[#123E59]">
                        <img src={imgUrl || LoadImg} className={fullRender ? "max-w-64 max-h-28 mx-auto mt-3" : "rounded-t-full max-w-64 max-h-28 mx-auto mt-3" } alt={name || "Loading"} />
                    </section>
                    {typeName === undefined
                    ?
                    <NavLink className="flex items-center justify-center h-20 w-20 border-8 border-[#123E59] bg-white rounded-full absolute z-40" to={`/pbnj/${individual ? "" : name}`}>
                            <button className="w-3/4 h-3/4 rounded-full" onClick={() => openCard()}>INFO</button>
                    </NavLink>
                    :
                    origin
                        ?
                        <NavLink className="flex items-center justify-center h-20 w-20 border-8 border-[#123E59] bg-white rounded-full absolute z-40" to={`/pbnj/types/${typeName}`}>
                            <button className="w-3/4 h-3/4 rounded-full bg-orange-500" onClick={() => openCard()}>INFO</button>
                        </NavLink>
                        :
                        <NavLink className="flex justify-center items-center h-20 w-20 border-8 border-[#123E59] bg-white rounded-full absolute z-40" to={`/pbnj/types/${typeName !== undefined ? typeName : singlePokemon?.type1}/${name}`}>
                            <button className="w-full h-full" onClick={() => openCard()}>INFO</button>
                        </NavLink>}
                    <section className="text-red-500 bg-white text-center font-bold rounded-b-full w-72 h-36 justify-self-end border-8 border-t-[12px] border-[#123E59]">
                        <h3 className="mt-8 capitalize text-4xl"><em>{name || "Loading..."}</em></h3>
                    </section>
                </div>
            </article>
                <>
                    {render
                        ?
                    <ItemDetailContainer pokemonDetails={pokemonDetails} pokemonImage={pokemonImage} />
                        :
                        null
                    }
                </>
            
        </>
    );
}