import React , { useEffect, useContext } from "react";
import { cartContext } from './CartContext.jsx'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList";

export default function ItemListContainer({message , classes}) {
    
    const {originalPokemonList, filterByType, pokemonListByType} = useContext(cartContext)
    const {typeName} = useParams()
    
    useEffect(() => {
        filterByType(typeName)
    }, [typeName])
    

    return (
        <>
            <h1 className={classes}>{message}</h1>
            <ItemList pokemonList={typeName === undefined ? originalPokemonList : pokemonListByType} />
        </>
    );
}