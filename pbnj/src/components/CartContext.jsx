import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const cartContext = createContext();

export default function CartContext({children}) {

    const [originalPokemonList] = useState([])
    const [listCreated, setListCreated] = useState(false)

    const [pokemonCart, setPokemonCart] = useState([])
    const [finishPurchase, setFinishPurchase] = useState(false)
    
    const onAdd = (ammount, name, price, number) => {
        if(ammount > 0){
            const checker = pokemonCart.find((pokemon) => pokemon.name === name)
            if (checker) {
                const place = pokemonCart.indexOf(checker)
                pokemonCart[place].ammount += ammount
                pokemonCart[place].price += price * ammount
                originalPokemonList[number - 1].stock -= ammount
                setFinishPurchase(true);
            } else {
                    const newItem = {}
                    newItem.name = name
                    newItem.ammount = ammount
                    newItem.unitPrice = price
                    newItem.price = price * ammount
                    originalPokemonList[number - 1].stock -= ammount
                    setPokemonCart([...pokemonCart, newItem])
                    setFinishPurchase(true);
                    alert(ammount + " units have been added to the cart!");
                }
        } else {
            alert("There's nothing to add!")
        }
    }
        
    useEffect(() => {
        const componentWillMount = async () => {
            const firstGenPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    
            firstGenPokemon.data.results.forEach((pokemonPrimer) => {
                originalPokemonList.push(pokemonPrimer)
            })
    
            originalPokemonList.forEach(async (pokemon) => {
                const pokemonDetails = await axios.get(pokemon.url)
    
                if (pokemon.name === "farfetchd") {
                    pokemon.name = "farfetch'd"
                }
    
                if (pokemon.name === "nidoran-f") {
                    pokemon.name = "nidoran"
                }
    
                if (pokemon.name === "nidoran-m") {
                    pokemon.name = "nidoran"
                }
    
                pokemon.number = pokemonDetails.data.id
                pokemon.speciesUrl = pokemonDetails.data.species.url
                pokemon.sprite = pokemonDetails.data.sprites.other['official-artwork'].front_default
                pokemon.types = pokemonDetails.data.types
                pokemon.stock = parseInt(pokemonDetails.data.id + 50 / 33.56)
                pokemon.price = parseInt(pokemonDetails.data.id + 100 / 9.16)
    
                const pokemonFlavor = await axios.get(pokemon.speciesUrl)
                const preProcessedFlavor = pokemonFlavor.data.flavor_text_entries.find((flavorText) => flavorText.language.name === "en").flavor_text.split("\f")
                let processedFlavor = ""
                preProcessedFlavor.forEach(fragment => processedFlavor += " " + fragment)
                pokemon.englishFlavor = processedFlavor.trim()
                setListCreated(true)
            })
        }

        componentWillMount()
    }, [])

    return (
        <>
            <cartContext.Provider value={{originalPokemonList, listCreated, onAdd, finishPurchase, setFinishPurchase}}>
                {children}
            </cartContext.Provider>
        </>
    );
}