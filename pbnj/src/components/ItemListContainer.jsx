import React , { useState, useEffect, useContext } from "react";
import { cartContext } from './CartContext.jsx'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList";

export default function ItemListContainer({message , classes}) {

    const {originalPokemonList, listCreated} = useContext(cartContext)
    const {typeName, individual} = useParams()

    const [typeFilteredList, setTypeFilteredList] = useState([])
    
    useEffect(() => {
        if (typeName === undefined) {
            setTypeFilteredList(originalPokemonList)
        } else {
            const typeFilter = originalPokemonList.filter((pokemon) => pokemon.types.find((type) => type.type.name === typeName))
            setTypeFilteredList(typeFilter)
        }
        console.log(typeFilteredList)
    }, [typeName, individual, originalPokemonList, listCreated])
    

    return (
        <>
            <h1 className={classes}>{message}</h1>
            <ItemList pokemonList={typeFilteredList} />
        </>
    );
}