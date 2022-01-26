import React from "react";
import LoadImg from '../img/loading.jpeg';
import ItemDetailContainer from './ItemDetailContainer';

export default function Item({name, imgUrl, singlePokemon}) {
    const pokemonDetails = singlePokemon
    const pokemonImage = imgUrl
    return (
        <>
            <article className="mt-4">
                <div className="w-72 h-72 m-auto flex flex-col items-center justify-center">
                    <section className="bg-red-500 rounded-t-full w-72 h-36 justify-self-start border-8 border-b-[12px] border-[#123E59]">
                        <img src={imgUrl || LoadImg} className="rounded-t-full max-w-64 max-h-28 mx-auto mt-3" alt={name || "Loading"} />
                    </section>
                    <button className="h-20 w-20 border-8 border-[#123E59] bg-white rounded-full absolute z-40">INFO</button>
                    <section className="text-red-500 bg-white text-center font-bold rounded-b-full w-72 h-36 justify-self-end border-8 border-t-[12px] border-[#123E59]">
                        <h3 className="mt-8 capitalize text-4xl"><em>{name || "Loading..."}</em></h3>
                    </section>
                </div>
            </article>
            {pokemonDetails ? 
                <>
                    <ItemDetailContainer pokemonDetails={pokemonDetails} pokemonImage={pokemonImage} />
                </>
                :
                "Loading..."
            }
            
        </>
    );
}