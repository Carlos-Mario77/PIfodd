import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackTotopButton from "../../components/scroll/BackTotopButton";
import { getRecipesDetails } from '../../redux/actions/index';
import { BsCheck2 } from 'react-icons/bs';
import { GiCook } from 'react-icons/gi';
import './Details.css';


export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(state => state.recipesDetails);
    // console.log(details)


  useEffect(() => {
        dispatch(getRecipesDetails(id));
  }, [dispatch, id]);

    return (
        <div className="detailContainer">
            {details.length > 0 ? (
            <div className="contenedorDetails">
                <div className="Detail1">
                    <div>
                        <h1 className="h1Details">{details[0].name}</h1>
                        <img className="imageDetails" alt='Imagen' src={details[0].image} />
                    </div>
                    <div className="glassDetails1">
                        <h2 className="h2Details">Diets: </h2>
                        {
                            details[0].diets.map((diet, index) => (
                                <p key={index}> <BsCheck2 />{diet.trim()}</p>
                            ))
                        }
                    </div>

                    <div className="glassDetails1">
                        <h2 className="h2Details">Health Score: </h2>
                        <p className="parrafoDetails">Score {details[0].health_Score} out of 100</p>
                    </div>
                    <div className="glassDetails1">
                        <h2 className="h2Details">Time: </h2>
                        <p className="parrafoDetails">{details[0].time} minutes</p>
                    </div>
                    <div className="glassDetails1">
                        <h2 className="h2Details">Servings: </h2>
                        <p className="parrafoDetails">{details[0].servings} servings</p>
                    </div>
                    <div className="glassDetails1">
                        <h2 className="h2Details">Cuisines: </h2>
                        {
                            details[0].cuisines.map((diet, index) => (
                                <p key={index}> <GiCook />{diet.trim()}</p>
                            ))
                        }
                        {/* <p className="parrafoDetails">{details[0].cuisines}</p> */}
                    </div>

                    <div className="botonesDetails">
                        <Link to={`/actualizar/${id}`}>
                            <button className="botonActualizar">Actualizar</button>
                        </Link>
                        <Link to="/home">
                            <button className="botonDetails">Volver</button>
                        </Link>
                    </div>
                </div>

                <div className="Detail2">
                    <div className="glassDetails2">
                        <h2 className="h2Details">Summary: </h2>
                        <p>{details[0].summary}</p>
                    </div>
                    <div className="glassDetails2">
                        <h2 className="h2Details">Instructions: </h2>
                        {
                            details[0].instructions.map((instruction, index) => (
                                <p key={index}>{instruction.trim()}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            ) : (
            <p>Loading...</p>
            )}
            <BackTotopButton />
        </div>
    );
};