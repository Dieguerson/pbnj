import React, { useContext, useEffect, useState, useRef } from "react";
import { cartContext } from './CartContext.jsx'
import { Link } from 'react-router-dom'

export default function Cart() {

    const {pokemonCart, onRemove, forceRender, onFinishPurchase, purchaseId} = useContext(cartContext)
    const [cartTotal, setCartTotal] = useState(0)
    const nameRef = useRef();
    const mailRef = useRef();
    const phoneRef = useRef();

    const userCreation = (e) => {
        e.preventDefault()
        const buyer = {}
        buyer.name = nameRef.current.value;
        buyer.mail = mailRef.current.value;
        buyer.phone = phoneRef.current.value;
        onFinishPurchase(buyer)
    }

    useEffect(() => {
        const newTotal = () => {
            let total = 0
            pokemonCart.forEach(pokemon => total += pokemon.price)
            return total
        }
        setCartTotal(newTotal)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forceRender])

    return (
        <>
        
            <h1 className="text-2xl font-bold text-center my-4">Welcome to your Cart!</h1>
            <section className="flex flex-wrap justify-center">
                {pokemonCart.length > 0
                ?
                    pokemonCart.map(soldPokemon => 
                        <article className={`flex flex-col items-center border-8 rounded-lg border-amber-300 mt-14 mx-auto w-60 bg-gradient-to-br ${soldPokemon.bgGradient}`} key={soldPokemon.number}>
                            <h3 className="w-full text-center capitalize font-bold text-2xl">{soldPokemon.name}</h3>
                            <img src={soldPokemon.sprite} className="h-fit" alt={soldPokemon.name}/>
                            <p>Total in Cart: <b>{soldPokemon.ammount}</b></p>
                            <p>Unit Price: U$D <b>{soldPokemon.unitPrice}</b> </p>
                            <p>Total Price: U$D <b>{soldPokemon.price}</b> </p>
                            <div className="flex flex-row">
                                <button className="flex bg-red-500 rounded-md w-20 m-2 shadow" onClick={() => onRemove(1, soldPokemon.number)}>
                                    <p className="m-auto font-bold">Remove One</p>
                                </button>
                                <button className="flex bg-red-500 rounded-md w-20 m-2 shadow" onClick={() => onRemove(soldPokemon.ammount, soldPokemon.number)}>
                                    <p className="m-auto font-bold">Remove All</p>
                                </button>
                            </div>
                        </article>
                    )
                :
                <h2 className="text-lg font-bold text-center my-4">Looks like theres nothing here! Lets get <Link className="text-[#123E59] visited:text-red-500" to={"/home"}>shopping!</Link></h2>
                }
            </section>
            {pokemonCart.length > 0
            ?
                <>
                    <p className="text-center mt-5 text-2xl">Total: U$D <b>{cartTotal}</b></p>
                    <article className="flex flex-col items-center w-fit m-auto">
                        <h3 className="text-xl font-bold">Fill your personal info and finish your purchase!</h3>
                        {purchaseId ? <p>This is your unique purchase ID: <b>{purchaseId}</b>. Be sure to save it! </p> : null}
                        <form className="flex flex-col w-fit items-center">
                            <input className="my-2 rounded bg-gray-600/40 pl-2 py-auto text-black ring-2 ring-blue-300" type="text" name="fullName" ref={nameRef} placeholder="Full Name"/>
                            <input className="mb-2 rounded bg-gray-600/40 pl-2 py-auto text-black ring-2 ring-blue-300" type="number" name="phone" ref={phoneRef} placeholder="Phone"/>
                            <input className="rounded bg-gray-600/40 pl-2 py-auto text-black ring-2 ring-blue-300" type="email" name="eMail" ref={mailRef} placeholder="e-Mail"/>
                            <button className="flex bg-red-500 rounded-md font-bold justify-center w-32 m-2 shadow mb-16" onClick={userCreation}>Finish Purchase</button>
                        </form>
                    </article>
                </>
            :
            null
            }

        
            
        </>
    );
}