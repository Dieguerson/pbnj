import React , { useContext } from "react";
import { cartContext } from '../context/CartContext';
import Loader from "../item/Loader";
import Item from '../item/Item';

export default function ItemList({pokemonList}) {

    const {newLoading} = useContext(cartContext);

    return (
        <>
            <div className={`${newLoading? "grid grid-cols-4" : "hidden"}`}>
                {pokemonList.map((pokemon) => {
                    return <Item singlePokemon={pokemon} key={pokemon.number} />
                })}
            </div>
            {!newLoading 
                &&
            <div className={`${newLoading ? "invisible" : "flex justify-center"}`}>
                <Loader className="m-auto" />
            </div>
            }
        </>
    );
}