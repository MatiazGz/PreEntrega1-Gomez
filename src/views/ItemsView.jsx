import React from "react";
import "./ItemsView.css"

function ItemView({item}) {
    return (
        <div className="itemView">
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <img src ={item.image} alt=
            {item.name + "image"}/>
        </div>
    )
}

export default ItemView