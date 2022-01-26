import React , { useState , useEffect } from "react";
import Item from './Item';
import axios from 'axios';

export default function ItemList({pokemonList}) {

    let [pokemons , setPokemons] = useState([]);
    const [loadedPokemons , setLoadedPokemons] = useState(false);

    useEffect(() => {
        let loadingPokemon = []
        pokemonList.forEach(individual => {
            const eachPokemon = axios.get(individual.url)
            eachPokemon
                .then((res) => {
                    loadingPokemon.push(res.data);
                    if(loadingPokemon.length === 10){
                        loadingPokemon.sort((a, b) => a.id - b.id)
                        setPokemons(loadingPokemon)
                        setTimeout(() => {setLoadedPokemons(true);}, 1500)
                    }
                }).catch((err) => {
                        console.log(err);
                    });
        })
    }, [pokemonList])

    return (
        <>
            {loadedPokemons ? 
                <>
                    <div className="grid grid-cols-3">
                        {pokemons.map((pokemon) => {
                            return <Item name={pokemon.name} imgUrl={pokemon.sprites.other['official-artwork'].front_default} singlePokemon={pokemon} key={pokemon.id} />
                        })}
                    </div>
                </>
                :
                <>
                    <div className="grid grid-cols-3">
                        <Item />
                    </div>
                </>
            }
        </>
    );
}