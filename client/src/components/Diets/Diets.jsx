import React from "react";
import { useDispatch } from "react-redux";
import { filterByDiet } from '../../redux/actions/index';
import './Diets.css';


export default function Home() {
    const dispatch = useDispatch();   

    function handlerFilterDiets(e){
        e.preventDefault();
        dispatch(filterByDiet(e.target.value))
    };

    return (
        <div className='containerDiets'>
            <label>Select your diets </label>
            <select className='selectDiets' onChange={ (e) => handlerFilterDiets(e) }>
                <option value="All">All diets</option>
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="paleo">Paleo</option>
                <option value="primal">Primal</option>
                <option value="low fodmap">Low Fodmap</option>
                <option value="whole 30">Whole30</option>
            </select>
        </div>
    );
};