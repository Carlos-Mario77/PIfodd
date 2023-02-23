import React from "react";
import { AiFillHeart } from 'react-icons/ai';
import './Cards.css';


export default function Card({ image, name, time, servings, favorites }) {

    return ( 
        <div className='card' >
            <div className="container-ImageCard">
                <img className='imageCard' src={ image } alt="Img not found" />
            </div>
            <div className="container-tituloCard">
                <div className="container-others">
                    <h3 className='tituloCardName'>{ name }</h3>
                </div>
                <h3>{ servings } Servings</h3>
                <div className="containerCardDescription">
                    <h3 className='minutes-Preparation'>🕰️ { time } minutos</h3>
                    <div className="containerfavorites">
                        <AiFillHeart className="iconFav"/>
                        <h3 className='tituloCard'>{ favorites } likes</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};