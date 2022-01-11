import React from "react";

export default function CartWidjet({mensaje , clases}) {
    return (
        <>
            <h1 className={clases}>Hola! {mensaje}</h1>
        </>
    );
}