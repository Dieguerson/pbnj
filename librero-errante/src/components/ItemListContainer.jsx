import React , { useState , useEffect } from "react";
import Item from './Item';
import Grimund from '../img/grimund.jpg';
import Woric from '../img/woric.jpg';
import LiZhu from '../img/liZhu.jpg';

export default function ItemListContainer({message , classes}) {

    const [itemArray , setItemArray] = useState([]);
    const [itemArrayDone , setItemArrayDone] = useState(false);

    const itemArrayPromise = new Promise ((resolve , reject) =>{
        setTimeout(() => {
            resolve([
                {id: 1, title: "Premade Characters" , description: "Full fledged characters." , price: 3 , stock: 5 , imgUrl: Grimund},
                {id: 2, title: "Short Stories" , description: "Up to 500 words." , price: 5 , stock: 10 , imgUrl: Woric},
                {id: 3, title: "Long Stories" , description: "Up to 1000 words." , price: 8 , stock: 0 , imgUrl: LiZhu},
            ]);
            reject("err");
        } , 2000);
    });

    useEffect(() => {
        itemArrayPromise
            .then((res) => {
                setItemArray(res);
                setItemArrayDone(true);
            })  .catch((err) => {
                    console.log(err);
                });
    });
    

    return (
        <>
            <h1 className={classes}>{message}</h1>
            {itemArrayDone ? 
                <>
                    <div className="flex justify-center mt-5">
                        {itemArray.map((item) => {
                            return <Item name={item.title} stock={item.stock} itemPrice={item.price} description={item.description} imgUrl={item.imgUrl} key={item.id} />
                        })}
                    </div>
                </>
                :
                <>
                    <div className="flex justify-center mt-5">
                        <Item />
                    </div>
                </>
            }
        </>
        
        
    );
}