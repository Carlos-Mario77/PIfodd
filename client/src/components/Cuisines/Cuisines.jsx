import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { filterByDiet } from '../../redux/actions/index';
import './Cuisines.css';


export default function Cuisine() {
    const dispatch = useDispatch();
    const [active, setActive] = useState("All");


    function handlerFilterDiets(e) {
        e.preventDefault();
        dispatch(filterByDiet(e.target.value));
        setActive(e.target.value); // actualizar el estado "active"
      }
    
    return (
        <div className='cuisine'>
            <h1>Select your cuisine</h1>
            <div className="cuisine-Options">
                <button className={`buttonDiets ${active === 'All' ? 'active2' : ''}`} value="All" onClick={handlerFilterDiets}>All cuisines</button>
                <button className={`buttonDiets ${active === 'African' ? 'active2' : ''}`} value="African" onClick={handlerFilterDiets}>African</button>
            </div>
            <div className="cuisine-Options">
                <button className={`buttonDiets ${active === 'American' ? 'active2' : ''}`} value="American" onClick={handlerFilterDiets}>American</button>
                <button className={`buttonDiets ${active === 'Asian' ? 'active2' : ''}`} value="Asian" onClick={handlerFilterDiets}>Asian</button>
            </div>
            <div className="cuisine-Options">
                <button className={`buttonDiets ${active === 'Cajun' ? 'active2' : ''}`} value="Cajun" onClick={handlerFilterDiets}>Cajun</button>
                <button className={`buttonDiets ${active === 'Chinese' ? 'active2' : ''}`} value="Chinese" onClick={handlerFilterDiets}>Chinese</button>
            </div>
            <div className="cuisine-Options">
                <button className={`buttonDiets ${active === 'Creole' ? 'active2' : ''}`} value="Creole" onClick={handlerFilterDiets}>Creole</button>
                <button className={`buttonDiets ${active === 'European' ? 'active2' : ''}`} value="European" onClick={handlerFilterDiets}>European</button>
            </div>
            <div className="cuisine-Options">
                <button className={`buttonDiets ${active === 'Indian' ? 'active2' : ''}`} value="Indian" onClick={handlerFilterDiets}>Indian</button>
                <button className={`buttonDiets ${active === 'Italian' ? 'active2' : ''}`} value="Italian" onClick={handlerFilterDiets}>Italian</button>
            </div>
            <div className="cuisine-Options">
                <button className={`buttonDiets ${active === 'Mediterranean' ? 'active2' : ''}`} value="Mediterranean" onClick={handlerFilterDiets}>Mediterranean</button>
                <button className={`buttonDiets ${active === 'Middle Eastern' ? 'active2' : ''}`} value="Middle Eastern" onClick={handlerFilterDiets}>Middle Eastern</button>
            </div>
            <button className={`buttonDiets ${active === 'Southern' ? 'active2' : ''}`} value="Southern" onClick={handlerFilterDiets}>Southern</button>
        </div>
    );
};