import React from "react";
import Diets from "../Diets/Diets";
import Cuisine from "../Cuisines/Cuisines";
import './CuisinesDiets.css';


export default function CuisinesDiets () {

    return ( 
        <div className='cuisinesDiets'>
            <Diets />
            <Cuisine />
        </div>
    );
};