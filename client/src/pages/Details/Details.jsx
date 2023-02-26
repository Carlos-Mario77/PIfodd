import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackTotopButton from "../../components/scroll/BackTotopButton";
import { getRecipesDetails } from '../../redux/actions/index';
// import { BsCheck2 } from 'react-icons/bs';
// import { GiCook } from 'react-icons/gi';
import './Details.css';


export default function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(state => state.recipesDetails);


    useEffect(() => {
        dispatch(getRecipesDetails(id));
    }, [dispatch, id]);

    return (
        <div className="details">
            {details.length > 0 ? (
                <div className="container-Details">
                    <div className="container-DetailOne">
                        <div className="detail-ImageTittle">
                            <img className="imageDetails" alt='Imagen' src={details[0].image} />
                            <h1>{details[0].name}</h1>
                        </div>
                        <div className="details-Diets">
                            <div className="details-DietsTittle">
                                <h2>Diets: </h2>
                            </div>
                            <div className="container-DetailsDiets">
                                <p className="parrafoDetails">{ details[0].diets } </p>
                            </div>
                        </div>

                        <div className="details-Diets">
                            <div className="details-DietsTittle">
                                <h2>Cuisines: </h2>
                            </div>
                            <div className="container-DetailsDiets">
                            <p className="parrafoDetails">{ details[0].cuisines } </p>
                            </div>
                        </div>

                        <div className="details-Others">
                            <h2>Health Score: </h2>
                            <p>Score {details[0].health_Score} out of 100</p>
                        </div>
                        <div className="details-Others">
                            <h2>Time: </h2>
                            <p>{details[0].time} minutes</p>
                        </div>
                        <div className="details-Others">
                            <h2>Servings: </h2>
                            <p>Servings for {details[0].servings} people</p>
                        </div>

                        <div className="details-Others">
                            <h2>Ingedients: </h2>
                            <p>{details[0].ingredients}</p>
                            {/* {details[0].ingredients.map((ingredient, index) => (
                                <p className="firsletter-Ingredients" key={index}><BsCheck2 /> {ingredient.trim()}</p>
                            ))} */}
                        </div>

                        <div>
                            <Link to={`/actualizar/${id}`}>
                                <button className="buttons-Details">UPDATE</button>
                            </Link>
                            <Link to="/home">
                                <button className="buttons-Details">BACK</button>
                            </Link>
                        </div>

                    </div>
                    <div className="container-DetailTwo">
                        <div className="details-Summary">
                            <h1 className="h2Details">Summary: </h1>
                            <p>{details[0].summary}</p>
                        </div>

                        <div className="details-Instructions">
                            <h1>Instructions: </h1>
                            <p>{ details[0].instructions }</p>
                            {/* {details[0].instructions.map((instruction, index) => (
                                <p key={index}>{instruction.trim()}</p>
                            ))} */}
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