import React , { useEffect, useContext } from "react";
import { cartContext } from '../context/CartContext';
import { useParams } from 'react-router-dom';
import ItemList from "../itemList/ItemList";

export default function ItemListContainer() {
    
    const {originalPokemonList, filterByType, pokemonListByType, listCreated} = useContext(cartContext);
    const {typeName} = useParams();
    
    useEffect(() => {
        if (typeName !== undefined && listCreated) {
            filterByType(typeName);
        }
    }, [typeName, listCreated]);

    return (
        <>
            <h1 className="flex justify-center text-center text-2xl font-bold text-[#123E59] mt-5">
                {typeName === undefined
                    ?
                        "Welcome to Our On Demand Pokemon Breeding Store!"
                    :
                        `You are now browsing our ${typeName} pokémon section!`}
            </h1>
            <ItemList pokemonList={typeName === undefined ? originalPokemonList : pokemonListByType} />
        </>
    );
}