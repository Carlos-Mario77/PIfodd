import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { filterByDiet } from '../../redux/actions/index';
import './Diets.css';


export default function Diets() {
    const dispatch = useDispatch();
    const [active, setActive] = useState("All");

    function handlerFilterDiets(e){
        e.preventDefault();
        setActive(e.target.value);
        dispatch(filterByDiet(e.target.value));
        console.log(e.target.value);
    };

    return (
        <div className='diets'>
            <h1>Select your diet</h1>
            <div className="diets-Options">
                <button className={`buttonDiets ${active === 'All' ? 'active' : ''}`} value="All" onClick={handlerFilterDiets}>All diets</button>
                <button className={`buttonDiets ${active === 'gluten free' ? 'active' : ''}`} value="gluten free" onClick={handlerFilterDiets}>Gluten Free</button>
            </div>
            <div className="diets-Options">
                <button className={`buttonDiets ${active === 'ketogenic' ? 'active' : ''}`} value="ketogenic" onClick={handlerFilterDiets}>Ketogenic</button>
                <button className={`buttonDiets ${active === 'vegetarian' ? 'active' : ''}`} value="vegetarian" onClick={handlerFilterDiets}>Vegetarian</button>
            </div>
            <div className="diets-Options">
                <button className={`buttonDiets ${active === 'lacto ovo vegetarian' ? 'active' : ''}`} value="lacto ovo vegetarian" onClick={handlerFilterDiets}>Lacto-Ovo-Vegetarian</button>
                <button className={`buttonDiets ${active === 'vegan' ? 'active' : ''}`} value="vegan" onClick={handlerFilterDiets}>Vegan</button>
            </div>
            <div className="diets-Options">
                <button className={`buttonDiets ${active === 'pescatarian' ? 'active' : ''}`} value="pescatarian" onClick={handlerFilterDiets}>Pescatarian</button>
                <button className={`buttonDiets ${active === 'paleo' ? 'active' : ''}`} value="paleo" onClick={handlerFilterDiets}>Paleo</button>
            </div>
            <div className="diets-Options">
                <button className={`buttonDiets ${active === 'primal' ? 'active' : ''}`} value="primal" onClick={handlerFilterDiets}>Primal</button>
                <button className={`buttonDiets ${active === 'low fodmap' ? 'active' : ''}`} value="low fodmap" onClick={handlerFilterDiets}>Low Fodmap</button>
            </div>
            <button className={`buttonDiets ${active === 'whole 30' ? 'active' : ''}`} value="whole 30" onClick={handlerFilterDiets}>Whole 30</button>
        </div>
    );
};