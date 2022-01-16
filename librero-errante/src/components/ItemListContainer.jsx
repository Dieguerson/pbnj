import React from "react";
import ItemCount from './ItemCount'

export default function ItemListContainer({mensaje , clases}) {

    const stockArray = [{name: "Premade Characters" , stock: 5} , {name: "Short Stories" , stock: 10} , {name: "Long Stories" , stock: 0}]

    return (
        <>
            <h1 className={clases}>Hola! {mensaje}</h1>
            <div className="flex justify-center">
                <ItemCount name={stockArray[0].name} stock={stockArray[0].stock} />
                <ItemCount name={stockArray[1].name} stock={stockArray[1].stock} />
                <ItemCount name={stockArray[2].name} stock={stockArray[2].stock} />
            </div>
        </>
    );
}