import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackTotopButton from "../../components/scroll/BackTotopButton";                                              //Scroll bar ejemplo 2
import { getRecipesDetails } from '../../redux/actions/index';
import './Details.css';


export default function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(state => state.recipesDetails);
    //console.log(details);

    useEffect(() => {
        dispatch(getRecipesDetails(id));
    }, [dispatch, id]);


    return (
        <div className="detailContainer">
            {   
                details.length > 0 ?
                    <div className="contenedorDetails">
                        <div className="Detail1">
                            <div>
                                <h1 className="h1Details">{ details[0].name }</h1>                                {/*'details' tiene todos las recetas en un array, y solo seleccionamos la receta con el id del params, entonces ese array queda con un solo obj que contine la info del id del params, por eso el [0]*/}
                                <img className="imageDetails" alt='Imagen' src={ details[0].image } />
                            </div>
                            <div className="glassDetails1">
                                <h2 className="h2Details">Diets: </h2>
                                <p className="parrafoDetails">{ details[0].diets } </p>
                            </div>
                        
                            <div className="glassDetails1">
                                <h2 className="h2Details">Health Score: </h2>
                                <p className="parrafoDetails">{ details[0].health_Score }</p>
                            </div>

                            <Link to = {`/actualizar/${id}`}>
                                <button className = "botonActualizar">Actualizar</button>
                            </Link>

                            <Link to = "/home">
                                <button className = "botonDetails">Volver</button>
                            </Link>
                        </div>

                        <div className="Detail2">
                            <div className="glassDetails2">
                                <h2 className="h2Details">Summary: </h2>
                                <p>{ details[0].summary }</p>
                            </div>
                            <div className="glassDetails2">
                                <h2 className="h2Details">Instructions: </h2>
                                <p>{ details[0].instructions }</p>
                            </div>
                        </div>
                    </div> : <p>Loading...</p>
            }
            {/* Scroll bar ejemplo 2 */}
            <BackTotopButton />
        </div>
    );
};