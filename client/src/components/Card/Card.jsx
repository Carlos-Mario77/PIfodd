import React from "react";
import './Card.css';

export default function Card({ image, name, diets }) {
    return (
        <div className='contenedorCard'>
            <img className='imageCard' src={ image } alt="Img not found" />
            <h3 className='tituloCard'>{ name }</h3>
            <br />
            <h3 className='tituloCard'>{ diets }</h3>
        </div>
    );
};