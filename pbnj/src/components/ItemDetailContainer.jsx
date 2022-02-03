import React from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({pokemonDetails, pokemonImage}) {

    let type1 = "";
    let type2 = "";
    let gradientColor1 = "";
    let gradientColor2 = "";
    let articleClasses = "";

    if(pokemonDetails.types.length === 2){
        type1 = pokemonDetails.types[0].type.name;
        type2 = pokemonDetails.types[1].type.name;
        console.log(pokemonDetails)
    }else{
        type1 = pokemonDetails.types[0].type.name;
        type2 = pokemonDetails.types[0].type.name;
    }
    console.log(type1, type2)
    switch (type1){
        case "normal":
            gradientColor1 = "from-[#A8A878]";
            break;
        case "fire":
            gradientColor1 = "from-orange-400";
            break;
        case "water":
            gradientColor1 = "from-blue-400";
            break;
        case "grass":
            gradientColor1 = "from-lime-400";
            break;
        case "electric":
            gradientColor1 = "from-amber-400";
            break;
        case "ice":
            gradientColor1 = "from-emerald-200";
            break;
        case "fighting":
            gradientColor1 = "from-red-700";
            break;
        case "poison":
            gradientColor1 = "from-fuchsia-700";
            break;
        case "ground":
            gradientColor1 = "from-orange-300";
            break;
        case "flying":
            gradientColor1 = "from-purple-400";
            break;
        case "psychic":
            gradientColor1 = "from-rose-400";
            break;
        case "bug":
            gradientColor1 = "from-lime-500";
            break;
        case "rock":
            gradientColor1 = "from-yellow-600";
            break;
        case "ghost":
            gradientColor1 = "from-[#705898]";
            break;
        case "dark":
            gradientColor1 = "from-warmGray-600";
            break;
        case "dragon":
            gradientColor1 = "from-violet-600";
            break;
        case "steel":
            gradientColor1 = "from-[#B8B8D0]";
            break;
        case "fairy":
            gradientColor1 = "from-rose-300";
            break;
        default:
            gradientColor1 = "from-[#0596A6]";
    }

    switch (type2){
        case "normal":
            gradientColor2 = "to-[#A8A878]";
            break;
        case "fire":
            gradientColor2 = "to-orange-400";
            break;
        case "water":
            gradientColor2 = "to-blue-400";
            break;
        case "grass":
            gradientColor2 = "to-lime-400";
            break;
        case "electric":
            gradientColor2 = "to-amber-400";
            break;
        case "ice":
            gradientColor2 = "to-emerald-200";
            break;
        case "fighting":
            gradientColor2 = "to-red-700";
            break;
        case "poison":
            gradientColor2 = 'to-fuchsia-700';
            break;
        case "ground":
            gradientColor2 = "to-orange-300";
            break;
        case "flying":
            gradientColor2 = "to-purple-400";
            break;
        case "psychic":
            gradientColor2 = "to-rose-400";
            break;
        case "bug":
            gradientColor2 = "to-lime-500";
            break;
        case "rock":
            gradientColor2 = "to-yellow-600";
            break;
        case "ghost":
            gradientColor2 = "to-[#705898]";
            break;
        case "dark":
            gradientColor2 = "to-warmGray-600";
            break;
        case "dragon":
            gradientColor2 = "to-violet-600";
            break;
        case "steel":
            gradientColor2 = "to-[#B8B8D0]";
            break;
        case "fairy":
            gradientColor2 = "to-rose-300";
            break;
        default:
            gradientColor2 = "to-[#0596A6]";
    }

    articleClasses = `flex flex-col items-center border-8 rounded-lg border-amber-300 w-72 h-min bg-gradient-to-br ${gradientColor1} ${gradientColor2}`
    
    return (
        <>
            <ItemDetail pokemonDetails={pokemonDetails} pokemonImage={pokemonImage} articleClasses={articleClasses}/>
        </>
    );
}