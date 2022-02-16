import React, { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase/firebase.js";

export const cartContext = createContext();

export default function CartContext({children}) {

    const [originalPokemonList] = useState([])
    const [pokemonListByType, setPokemonListByType] = useState([])
    const [pokemonListByIndividual, setPokemonListByIndividual] = useState([])
    const [open, setOpen] = useState(false)
    const [listCreated, setListCreated] = useState(false)
    const [forceRender, setForceRender] = useState(false)
    const fireStore = getFirestore()

    const [pokemonCart, setPokemonCart] = useState([])
    const [finishPurchase, setFinishPurchase] = useState(false)
    const [purchaseId, setPurchaseId] = useState("")

    const filterByType = async (type) => {
        if (type !== undefined) {
            setPokemonListByType([])
            const firestoreByType =[]
            const fireStoreFilterType1 = fireStore.collection("pokemonList").where("type1", "==", type)
            const fireStoreFilterType2 = fireStore.collection("pokemonList").where("type2", "==", type)
            await fireStoreFilterType1.get().then((querySnapshot) => {
                querySnapshot.docs.map(doc => firestoreByType.push(doc.data()))
            })
            await fireStoreFilterType2.get().then((querySnapshot) => {
                querySnapshot.docs.map(doc => firestoreByType.push(doc.data()))
            })
            sortingService(firestoreByType)
            setPokemonListByType(firestoreByType)
        }
    }
    
    const filterByIndividual = async (individual) => {
        if (individual !== undefined) {
            setPokemonListByIndividual([])
            const firestoreByIndividual =[]
            const fireStoreFilterIndividual = fireStore.collection("pokemonList").where("name", "==", individual)
            await fireStoreFilterIndividual.get().then((querySnapshot) => {
                querySnapshot.docs.map(doc => firestoreByIndividual.push(doc.data()))
            })
            sortingService(firestoreByIndividual)
            setPokemonListByIndividual(firestoreByIndividual)
            setOpen(true)
            setTimeout(() => setOpen(false), 2000)
        }
    }

    const sortingService = (disorderedArray) => {
        disorderedArray.sort(function (a, b) {
            if (a.number > b.number) {
                return 1;
            }
            if (a.number < b.number) {
                return -1;
            }
            return 0
        })
    }

    const getBgGradient = (type1, type2) => {
        
        if (type2 === null) {
            type2 = type1
        }
        
        let gradientColor1 = "";
        let gradientColor2 = "";

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

        return (gradientColor1 + " " + gradientColor2)
    }

    const getTypes = (pokemonTypification) => {
        const types = [];
        if(pokemonTypification.types.length === 2){
            types.push(pokemonTypification.types[0].type.name);
            types.push(pokemonTypification.types[1].type.name);
        }else{
            types.push(pokemonTypification.types[0].type.name);
            types.push(pokemonTypification.types[0].type.name);
        }
        return types
    }
    
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
                const originalPokemon = originalPokemonList[number - 1]
                const newItem = {}
                newItem.name = name
                newItem.number = number
                newItem.ammount = ammount
                newItem.unitPrice = price
                newItem.price = price * ammount
                newItem.sprite = originalPokemon.sprite
                newItem.type1 = originalPokemon.type1
                newItem.type2 = originalPokemon.type2
                newItem.bgGradient = getBgGradient(newItem.type1, newItem.type2)
                newItem.id = originalPokemon.id
                originalPokemon.stock -= ammount
                setPokemonCart([...pokemonCart, newItem])
                setFinishPurchase(true);
                }
        } else {
            alert("There's nothing to add!")
        }
    }

    const onRemove = (ammount, id) => {
        const pokemonToRemove = pokemonCart.find(pokemon => pokemon.number === id)
        const originalPokemon = originalPokemonList[id - 1]
        originalPokemon.stock += ammount
        const position = pokemonCart.indexOf(pokemonToRemove)
        if (ammount === pokemonToRemove.ammount) {
            pokemonCart.splice(position, 1)
        } else {
            pokemonCart[position].ammount -= 1
            pokemonCart[position].price = pokemonCart[position].unitPrice * pokemonCart[position].ammount
        }
        setForceRender(!forceRender)
    }

    const onFinishPurchase = (buyer) => {
        const newOrder ={} 
        newOrder.buyer = buyer;
        newOrder.order = pokemonCart
        fireStore.collection("orderList").add(newOrder).then(async ({id}) => {setPurchaseId(id)})
        pokemonCart.forEach(pokemon => {fireStore.collection("pokemonList").doc(pokemon.id).update({stock: 
            originalPokemonList[pokemon.number - 1].stock})
        console.log(originalPokemonList[pokemon.number - 1].stock)})
    }

    useEffect(() => {
        fireStore.collection("pokemonList").get().then((querySnapshot) => {
            querySnapshot.docs.map(doc => originalPokemonList.push(doc.data()))
            sortingService(originalPokemonList)
            setListCreated(true)
        })
    }, [])

    return (
        <>
            <cartContext.Provider value={{
                originalPokemonList,
                listCreated,
                onAdd,
                onRemove,
                finishPurchase,
                setFinishPurchase,
                pokemonCart,
                getBgGradient,
                getTypes,
                forceRender,
                filterByType,
                pokemonListByType,
                pokemonListByIndividual,
                filterByIndividual,
                open,
                onFinishPurchase,
                purchaseId}}>
                {children}
            </cartContext.Provider>
        </>
    );
}