import React , { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import axios from 'axios';

export default function ItemDetailContainer({pokemonDetails, pokemonImage}) {

    const [pokemonDescription, setPokemonDescription] = useState("");
    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    const [gradientColor1, setGradientColor1] = useState("");
    const [gradientColor2, setGradientColor2] = useState("");
    const [articleClasses, setArticleClasses] = useState("");
    
    useEffect(() => {
        
        const characteristicsSearch = axios.get(pokemonDetails.species.url)
        characteristicsSearch
            .then((res => {
                let fullDescription = ""
                const englishDescription = res.data.flavor_text_entries.find(englishText => englishText.language.name === "en");
                const textSplitter = englishDescription.flavor_text.split("\f");
                textSplitter.forEach(fragment => fullDescription += " " + fragment);
                fullDescription.trim();
                setPokemonDescription(fullDescription)                
                
                if(pokemonDetails.types.length === 2){
                    setType1(pokemonDetails.types[0].type.name);
                    setType2(pokemonDetails.types[1].type.name);
                }else{
                    setType1(pokemonDetails.types[0].type.name);
                    setType2(pokemonDetails.types[0].type.name);
                }

                switch (type1){
                    case "normal":
                        setGradientColor1("from-warmGray-500");
                        break;
                    case "fire":
                        setGradientColor1("from-orange-400");
                        break;
                    case "water":
                        setGradientColor1("from-blue-400");
                        break;
                    case "grass":
                        setGradientColor1("from-lime-400");
                        break;
                    case "electric":
                        setGradientColor1("from-amber-400");
                        break;
                    case "ice":
                        setGradientColor1("from-emerald-200");
                        break;
                    case "fighting":
                        setGradientColor1("from-red-700");
                        break;
                    case "poison":
                        setGradientColor1("from-fuchsia-700");
                        break;
                    case "ground":
                        setGradientColor1("from-orange-300");
                        break;
                    case "flying":
                        setGradientColor1("from-violet-400");
                        break;
                    case "psychic":
                        setGradientColor1("from-rose-400");
                        break;
                    case "bug":
                        setGradientColor1("from-lime-500");
                        break;
                    case "rock":
                        setGradientColor1("from-yellow-600");
                        break;
                    case "ghost":
                        setGradientColor1("from-blueGray-500");
                        break;
                    case "dark":
                        setGradientColor1("from-warmGray-600");
                        break;
                    case "dragon":
                        setGradientColor1("from-violet-600");
                        break;
                    case "steel":
                        setGradientColor1("from-blueGray-300");
                        break;
                    case "fairy":
                        setGradientColor1("from-rose-300");
                        break;
                    default:
                        setGradientColor1("from-[#0596A6]");
                }

                switch (type2){
                    case "normal":
                        setGradientColor2("to-warmGray-500");
                        break;
                    case "fire":
                        setGradientColor2("to-orange-400");
                        break;
                    case "water":
                        setGradientColor2("to-blue-400");
                        break;
                    case "grass":
                        setGradientColor2("to-lime-400");
                        break;
                    case "electric":
                        setGradientColor2("to-amber-400");
                        break;
                    case "ice":
                        setGradientColor2("to-emerald-200");
                        break;
                    case "fighting":
                        setGradientColor2("to-red-700");
                        break;
                    case "poison":
                        setGradientColor2('to-fuchsia-700');
                        break;
                    case "ground":
                        setGradientColor2("to-orange-300");
                        break;
                    case "flying":
                        setGradientColor2("to-violet-400");
                        break;
                    case "psychic":
                        setGradientColor2("to-rose-400");
                        break;
                    case "bug":
                        setGradientColor2("to-lime-500");
                        break;
                    case "rock":
                        setGradientColor2("to-yellow-600");
                        break;
                    case "ghost":
                        setGradientColor2("to-blueGray-500");
                        break;
                    case "dark":
                        setGradientColor2("to-warmGray-600");
                        break;
                    case "dragon":
                        setGradientColor2("to-violet-600");
                        break;
                    case "steel":
                        setGradientColor2("to-blueGray-300");
                        break;
                    case "fairy":
                        setGradientColor2("to-rose-300");
                        break;
                    default:
                        setGradientColor2("to-[#0596A6]");
                }

                setArticleClasses(`flex flex-col items-center border-8 rounded-lg border-amber-300 w-72 h-min bg-gradient-to-br ${gradientColor1} ${gradientColor2}`)
            })).catch((err) => {
                    console.log(err)
                })
                    
    }, [pokemonDetails, type1, type2, gradientColor1, gradientColor2])

    return (
        <>
            <ItemDetail pokemonDetails={pokemonDetails} pokemonImage={pokemonImage} pokemonDescription={pokemonDescription} articleClasses={articleClasses}/>
        </>
    );
}