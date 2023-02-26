import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getdiets } from '../../redux/actions/index';
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Books from "../../components/Book/Book";
import CarouselCuisines from "../../components/CarouselCuisines/CarouselCuisines";
import Diets from "../../components/Diets/Diets";
import Card from "../../components/Cards/Cards";
import Searchbar from "../../components/Searchbar/Searchbar";
import Ordenamiento from "../../components/Ordenamiento/Ordenamiento";
import Paginado from "../../components/Paginado/Paginado";
import BackTotopButton from "../../components/scroll/BackTotopButton";
import { deleteRecipe } from '../../redux/actions/index';
import './Home.css';


export default function Home() {
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes);

    //Estados locales para el paginado
    const [ recipesPage, setCurrentPage ] = useState(1);
    const [ recipesPerPage ] = useState(12);
    const indexOfLastRecipe = recipesPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //Carga todas las recetas al montarse el componente
    useEffect (() => {
        dispatch(getRecipes());
        dispatch(getdiets());
    }, [dispatch]);


    // Handler para resetear todos los filtros y demás
    function handlerClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    };

    //Función para eliminar recetas creadas
    const handleDelete = (e)=> {
        const idDelete = e.target.value;
        dispatch(deleteRecipe(idDelete));
        window.location.reload();
    };


    return (
        <div className="containerHome">
            <Carousel />
            <Books />
            <CarouselCuisines />
            <div className="firsFilter">
                <div className="container-Reset">
                    <div className="container-ResetSearchCreate">
                        <button className='buttonReset' onClick={ (e) => { handlerClick(e) } }>RESET ALL</button>
                        <Searchbar />
                        <button className="botonCrearRecataHome"><Link to='/createrecipes' style={{ textDecoration: 'none', color:'white' }}>Crea tu receta!!!</Link></button>
                    </div>
                </div>
                <Ordenamiento />
            </div>
            <Diets />
            <div className='containerCardHome1'>
                {currentRecipes?.map((el) => {
                    return (
                        <div key={ el.id }>
                            <Link to={'/detail/' + el.id} style={{ textDecoration: 'none' }} >
                                <Card name={ el.name } image={ el.image } health_Score={ el.health_Score } servings={ el.servings } time={ el.time } favorites={ el.favorites }/>
                            </Link>
                            { el.id.toString().split("").length > 10 ? <button className="button-Delete" value={ el.id } onClick={ e => handleDelete(e) }>Delete</button> : null }
                        </div>
                    );
                })}
            </div>
            <BackTotopButton />
            <Paginado recipesPerPage={ recipesPerPage } allRecipes={ allRecipes.length } paginado={ paginado } currentPage={ recipesPage }/>
        </div>
    );
};