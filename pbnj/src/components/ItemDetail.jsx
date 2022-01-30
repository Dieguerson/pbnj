import React, {  useState } from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({pokemonDetails, pokemonImage, articleClasses, pokemonDescription}) {

    const [pokemonCart, setPokemonCart] = useState([])
    const [finishPurchase, setFinishPurchase] = useState(false)
    const pokemonItem = {...pokemonDetails };
    const stock = parseInt((pokemonDetails.id + 100) / 3);
    const itemPrice = parseInt((pokemonDetails.id + 200) / 4.3)
    pokemonItem.stock = stock
    pokemonItem.itemPrice = itemPrice
    
    const onAdd = (ammount) => {
        if(ammount > 0){
            pokemonItem.stock -= ammount
            pokemonDetails.ammount= ammount
            setPokemonCart([...pokemonCart, pokemonDetails])
            setFinishPurchase(true);
            alert(ammount + " units have been added to the cart!");
        }else{
            alert("There's nothing to add!")
        }
    }

    return (
        <>
            <article className={articleClasses}>
                <h3 className="w-full text-center capitalize font-bold">{pokemonDetails.name || "Loading..."}</h3>
                <img src={pokemonImage} className="w-1/2 h-fit" alt={pokemonDetails.name}/>
                {pokemonDetails.types.map(type => <p className="w-full ml-4" key={type.slot}><b>Type {type.slot}:</b> <em className="capitalize">{type.type.name}</em></p>)}
                <p className="w-full px-2"><b>Description:</b> {pokemonDescription}</p>
                <ItemCount stock={pokemonItem.stock} itemPrice={pokemonItem.itemPrice} finishPurchase={finishPurchase}  onAdd={onAdd} />
            </article>
        </>
    );
}