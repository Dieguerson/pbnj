import React , { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from './Item';
import axios from 'axios';

export default function ItemList({pokemonList}) {

    const {individual} = useParams()
    let [pokemons , setPokemons] = useState([]);
    const [loadedPokemons , setLoadedPokemons] = useState(false);

    useEffect(() => {
        let loadingPokemon = []
        const nameUrl = individual?.replace(":", "")
        if(individual === undefined || !pokemonList.some(specificIndividual => specificIndividual.name === nameUrl)){
            pokemonList.forEach(individual => {
                const eachPokemon = axios.get(individual.url)
                eachPokemon
                    .then((res) => {
                        loadingPokemon.push(res.data);
                        if(loadingPokemon.length === pokemonList.length){
                            loadingPokemon.sort((a, b) => a.id - b.id)
                            setPokemons(loadingPokemon)
                            setTimeout(() => {setLoadedPokemons(true);}, 1500)
                        }
                    }).catch((err) => {
                            console.log(err);
                        });
            })
        }else if (individual){
            const thePokemonOutter = pokemonList.find(specificIndividual => specificIndividual.name === nameUrl)
            const thePokemonTrue = axios.get(thePokemonOutter.url)
            thePokemonTrue
                .then((res) => {
                    loadingPokemon.push(res.data);
                    setPokemons(loadingPokemon)
                    setTimeout(() => {setLoadedPokemons(true);}, 1500)
                }).catch((err) => {
                        console.log(err);
                    });
        }
    }, [pokemonList])

    return (
        <>
            {loadedPokemons ? 
                <>
                    
                    <div className="grid grid-cols-3">
                        {pokemons.map((pokemon) => {
                            return <Item name={pokemon.name} imgUrl={pokemon.sprites.other['official-artwork'].front_default} singlePokemon={pokemon} key={pokemon.id} type1={pokemon.types[0].type.name} />
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