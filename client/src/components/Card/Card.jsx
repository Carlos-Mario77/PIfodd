import React from "react";
import style from './Card.css'

export default function Card({ image, name, diets }) {
    return (
        <div className={style.contenedor}>
            <img src={ image } alt="Img not found" width='300px' height='250px'/>
            <h3>{ name }</h3>
            <h3>{ diets }</h3>
        </div>
    );
};