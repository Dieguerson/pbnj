import React from "react";
import ItemDetail from "../item/ItemDetail";

export default function ItemDetailContainer({singlePokemon, close}) {
    
    return (
        <>
            <ItemDetail singlePokemon={singlePokemon} close={close} />
        </>
    );
}