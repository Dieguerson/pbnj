import React , { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList";
import axios from 'axios';

export default function ItemListContainer({message , classes}) {
    const {typeName} = useParams()
    const [pokemonList, setPokemonList] = useState([])
    
    const componentWillMount = () => {
        let firstGenNames = [];
        let namesByType = []
        let firstGenByType = []
        const firstGenPokemon = axios.get('https://pokeapi.co/api/v2/generation/1/');
        const pokemonPromise = axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        firstGenPokemon
            .then((res) => {
                firstGenNames = res.data.pokemon_species.map(pokemon => pokemon.name)
                const typeUrl = () => {
                    if(typeName === undefined){
                        return ""
                    }else{
                        return res.data.types.find(type => type.name === typeName.replace(":", "")).url
                    }
                }
                if(typeUrl() !== ""){
                    const pokemonByType = axios.get(`${typeUrl()}`);
                    pokemonByType
                        .then((res => {
                            namesByType = res.data.pokemon.map(individual => individual.pokemon.name)
                            firstGenByType = namesByType.filter(name => firstGenNames.includes(name))
                            pokemonPromise
                                .then((res) => {
                                    setPokemonList(res.data.results.filter(pokemon => firstGenByType.includes(pokemon.name)))
                                })
                        }))
                }else{
                    firstGenByType = firstGenNames
                    pokemonPromise
                        .then((res) => {
                            setPokemonList(res.data.results.filter(pokemon => firstGenByType.includes(pokemon.name)))
                        })
                }
            })
    }
    
    useEffect(()=>{
        componentWillMount()
    }, [typeName])

    return (
        <>
            <h1 className={classes}>{message}</h1>
            <ItemList pokemonList={pokemonList} />
        </>
    );
}