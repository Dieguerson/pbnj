import React , { useContext } from "react";
import { cartContext } from './CartContext.jsx'
import Loader from "./Loader.jsx";
import Item from './Item';

export default function ItemList({pokemonList}) {

    const {listCreated} = useContext(cartContext)
    console.log(pokemonList)

    return (
        <>
            {listCreated === true ? 
                <>
                    <div className="grid grid-cols-3">
                        {pokemonList.map((pokemon) => {
                            return <Item name={pokemon.name} imgUrl={pokemon.sprite} singlePokemon={pokemon} key={pokemon.number} type1={pokemon.type1} fullRender={true} />
                        })}
                    </div>
                </>
                :
                <>
                    <div className="flex justify-center">
                        <Loader className="m-auto" />
                    </div>
                </>
            }
        </>
    );
}