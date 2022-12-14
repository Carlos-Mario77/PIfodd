import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from '../../redux/actions/index';
import { Link } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import Card from "../../components/Card/Card";
import Diets from "../../components/Diets/Diets";
import Paginado from "../../components/Paginado/Paginado";
import Ordenamiento from "../../components/Ordenamiento/Ordenamiento";


export default function Home() {
    const dispatch = useDispatch();                                                                 //1ro
    const allRecipes = useSelector((state) => state.recipes);                                       //2do

    //Estados locales para el paginado
    const [ currentPage, setCurrentPage ] = useState(1);                                            //Estado inicial en 1 donde empieza el paginado
    const [ charactersPerPage ] = useState(9);                                                      //Personajes por páginas indicados
    const indexOfLastCharacter = currentPage * charactersPerPage;                                   //6
    const indexOfFirstCharacter= indexOfLastCharacter - charactersPerPage;                          //6
    const currentCharacters = allRecipes.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //Carga todas las recetas al montarse el componente
    useEffect (() => {                                                                              //3ro                 //Cuando se monte el componente, traerá todas las recetas del state de Redux
        dispatch(getRecipes())                                                                      //Este dispatch es lo mismo que hacer el mapStateToProps
    }, [dispatch]);

    //Handler para resetear todos los filtros y demás
    function handlerClick(e) {                                                                      //7mo
        e.preventDefault();
        dispatch(getRecipes())                                                                      //8vo Recetea todas las recetas de vuelta SIRVE
    };

    return (
        <div>
            <h1>Hola, mi PI de Food</h1>                                                            {/*4to*/}
            <Searchbar />
            <Link to='/createrecipes'>Crear una receta</Link>                                       {/*5to*/}
            <button onClick={ (e) => { handlerClick(e) } }>Cargar todas las recetas</button>        {/*6to*/}
            <Diets />
            <Ordenamiento />
            <Paginado charactersPerPage={charactersPerPage} allRecipes={allRecipes.length} paginado={ paginado } />

            {currentCharacters?.map((el) => {
                return (
                    <div>
                        <Link to={'/detail/' + el.id}>
                            <Card name={el.name} image={el.image} diets={el.diets} key={ el.id }/>
                        </Link>
                    </div>
                );
            })};
        </div>
    );
};