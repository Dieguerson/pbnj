import React from "react";

export default function Loader() {

    return (
        <>
            <article className="w-72 h-72 mt-4" id="loader">
                <div className="w-72 h-72 m-auto flex flex-col items-center justify-center">
                    <section className="bg-red-500 rounded-t-full w-72 h-36 justify-self-start border-8 border-b-[12px] border-[#123E59]" />
                    <span className="flex justify-center items-center h-20 w-20 border-8 border-[#123E59] bg-white rounded-full absolute z-40" id="loaderButton">
                        <button className="w-full h-full text-sm">LOADING</button>
                    </span>
                    <section className="text-red-500 bg-white text-center font-bold rounded-b-full w-72 h-36 justify-self-end border-8 border-t-[12px] border-[#123E59]" />
                </div>
            </article>
        </>
    );
}