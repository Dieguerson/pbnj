import React , { useEffect, useContext } from "react";
import { cartContext } from './CartContext.jsx'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList";

export default function ItemListContainer({message , classes}) {
    
    const {originalPokemonList, filterByType, pokemonListByType, filterByIndividual, pokemonListByIndividual} = useContext(cartContext)
    const {typeName, individual} = useParams()
    
    useEffect(() => {
        if (typeName !== undefined && individual === undefined) {
            filterByType(typeName)
            console.log("no holi")
        }
        if(typeName === undefined && individual !== undefined) {
            filterByIndividual(individual)
            console.log("holi")
        }
        if(typeName !== undefined && individual !== undefined){
            filterByType(typeName)
            filterByIndividual(individual)
            console.log("re holi")
        }
    }, [typeName, individual])
    

    return (
        <>
            <h1 className={classes}>{message}</h1>
            <ItemList pokemonList={typeName === undefined ? individual === undefined ? originalPokemonList : pokemonListByIndividual : individual !== undefined ? pokemonListByIndividual : pokemonListByType} />
        </>
    );
}