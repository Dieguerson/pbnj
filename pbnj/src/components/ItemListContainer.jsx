import React , { useState , useEffect } from "react";
import ItemList from "./ItemList";
import axios from 'axios';

export default function ItemListContainer({message , classes}) {

    const [pokemonList , setPokemonList] = useState([]);

    let pokemonPromise;

    useEffect(() => {

        const pokemonPromise = axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')

        pokemonPromise
            .then((res) => {
                setPokemonList(res.data.results);
            }).catch((err) => {
                    console.log(err);
                });

    }, [pokemonPromise]);

    return (
        <>
            <h1 className={classes}>{message}</h1>
            <ItemList pokemonList={pokemonList} />
        </>
    );
}