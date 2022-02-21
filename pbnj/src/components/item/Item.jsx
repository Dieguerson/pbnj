import React, { useState, useContext, useEffect } from "react";
import { cartContext } from '../context/CartContext';
import { NavLink, useParams } from 'react-router-dom';
import ItemDetailContainer from '../item/ItemDetailContainer';

export default function Item({singlePokemon}) {
    
    const {setFinishPurchase, closePrev, setClosePrev, isOpen, setIsOpen} = useContext(cartContext);
    const {typeName, individual} = useParams();
    const name = singlePokemon.name;
    const [render, setRender] = useState(false);
    const [close, setClose] = useState(false);
    const upAnimation = render ? close ? "down" : "up" : null;
    const downAnimation = render ? close ? "up" : "down" : null;
    const openAndClose = render ? () => closeCard() : () => openCard();
    const buttonUrl = typeName !== undefined ? (individual !== undefined && individual === name ? ("types/" + typeName + "/") : ("types/" + typeName + "/" + name)) : (individual ? (render ? "" : name) : name);
    const openCard = () => {
        if (individual) {
            setClosePrev(true);
        }
        setIsOpen(true);
        setClose(false);
        if (isOpen === true) {
            setTimeout(() => {
                setRender(render ? false : true);
                setFinishPurchase(false);
            }, 300);
        } else {
            setRender(render ? false : true);
            setFinishPurchase(false);
        }
    }
    const closeCard = () => {
        setClose(true);
        setTimeout(() => {
            setRender(render ? false : true);
            setClose(false);
        }, 1000);
        setFinishPurchase(false);
    }

    useEffect(() => {
        setRender(false);
        if(name === individual){
            setRender(true);
            setIsOpen(true);
        }
    }, [])

    useEffect(() => {
        if (individual === undefined) {
            setIsOpen(false);
        }
    }, [individual])

    useEffect(() => {
        if (closePrev === true && name !== individual && render) {
            closeCard();
            setClosePrev(false);
        }
    }, [closePrev]);

    return (
        <>
            <article className="mt-4 col-span-4 sm:col-span-2 xl:col-span-1">
                <div className="w-72 h-full m-auto flex flex-col items-center justify-start">
                    <section className={`bg-red-500 rounded-t-full w-72 h-36 justify-self-start border-8 border-b-[12px] border-[#123E59] ${upAnimation}`}>
                        <img src={singlePokemon.sprite} className="max-w-64 max-h-28 mx-auto mt-3" alt={name} />
                        <NavLink activeClassName="!bg-orange-500" className="flex items-center justify-center h-20 w-20 border-8 border-[#123E59] bg-white rounded-full relative left-[96px] bottom-[29px] z-40" to={`/pbnj/${buttonUrl}`}>
                                <button className={`w-full h-full rounded-full border-4 border-white`} onClick={openAndClose}>INFO</button>
                        </NavLink>
                    </section>
                        {render
                            ?
                                <ItemDetailContainer singlePokemon={singlePokemon} close={close}/>
                            :
                                null
                        }
                    <section className={`text-red-500 bg-white text-center font-bold rounded-b-full w-72 min-h-[144px] justify-self-end border-8 border-t-[12px] border-[#123E59] ${downAnimation}`}>
                        <h3 className="mt-8 capitalize text-4xl"><em>{name}</em></h3>
                    </section>
                </div>
            </article>        
        </>
    );
}