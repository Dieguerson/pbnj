import React from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({pokemonDetails, pokemonImage}) {
    
    return (
        <>
            <ItemDetail pokemonDetails={pokemonDetails} pokemonImage={pokemonImage}/>
        </>
    );
}