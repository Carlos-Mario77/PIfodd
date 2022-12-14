import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipesDetails } from '../../redux/actions/index';


export default function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(state => state.recipesDetails);
    //console.log(details);

    useEffect(() => {
        dispatch(getRecipesDetails(id));
    }, [dispatch, id]);

    return (
        <div className="bodyHome">
            <Link to = "/home">
                <button className = "buttonNav">Volver</button>
            </Link>
            {   details.length > 0 ?
                <div>
                    <h1>{ details[0].name }</h1>                                {/*'details' tiene todos las recetas en un array, y solo seleccionamos la receta con el id del params, entonces ese array queda con un solo obj que contine la info del id del params, por eso el [0]*/}
                    <img alt='Imagen' src={ details[0].image } />
                    <p>Summary: { details[0].summary }</p>
                    <p>Health Score: { details[0].health_Score }</p>
                    <p>Instructions: { details[0].instructions }</p>
                    <h2>Diets: { details[0].diets } </h2>
                </div> : <p>Loading...</p>
            }

            <Link to = "/home">
                <button className = "buttonNav">Volver</button>
            </Link>
        </div>
    );
};