import React from "react";
import Item from './Item';

export default function ItemListContainer({items , itemsLoaded}) {

    return (
        <>
            {itemsLoaded ? 
                <>
                    <div className="flex justify-center mt-5">
                        {items.map((item) => {
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