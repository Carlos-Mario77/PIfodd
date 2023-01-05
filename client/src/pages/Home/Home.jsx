import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getdiets } from '../../redux/actions/index';
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import Card from "../../components/Card/Card";
import Diets from "../../components/Diets/Diets";
import Paginado from "../../components/Paginado/Paginado";
import Ordenamiento from "../../components/Ordenamiento/Ordenamiento";
import BackTotopButton from "../../components/scroll/BackTotopButton";                              //Scroll bar ejemplo 2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireBurner } from '@fortawesome/free-solid-svg-icons';
import { deleteRecipe } from '../../redux/actions/index';
import './Home.css';


export default function Home() {
    //const navigate = useNavigate();
    const dispatch = useDispatch();                                                                 //1ro
    const allRecipes = useSelector((state) => state.recipes);                                       //Estado donde se guardan todas las recetas
    //const recipeCreateId = useSelector((state) => state.reloadRecipeOne);                                       //Estado donde se guarda el nombre de laa nueva receta creada

    //Estados locales para el paginado
    const [ recipesPage, setCurrentPage ] = useState(1);                                            //Estado inicial en 1 donde empieza el paginado
    console.log(recipesPage + ' Página actual');
    const [ recipesPerPage ] = useState(9);                                                         //Recetas por páginas indicados
    const indexOfLastRecipe = recipesPage * recipesPerPage;
    const indexOfFirstRecipe= indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginado = (pageNumber) => {                                                              //Fn que modifica el estado 'recipesPage' con el evento que genera el componente 'Paginado'
        setCurrentPage(pageNumber);
    };

    const end = Math.ceil(allRecipes.length / recipesPerPage);
    console.log(end + ' Página final');

    //Next Page
    function handlerNext(e) {
        setCurrentPage(recipesPage + 1);                                                            //8vo Recetea todas las recetas de vuelta SIRVE
    };

    //Prev Page
    function handlerPrev(e) {
        setCurrentPage(recipesPage - 1);                                                            //8vo Recetea todas las recetas de vuelta SIRVE
    };


    //Carga todas las recetas al montarse el componente
    useEffect (() => {                                                                              //3ro                 //Cuando se monte el componente, traerá todas las recetas del state de Redux
        dispatch(getRecipes());                                                                     //Este dispatch es lo mismo que hacer el mapStateToProps
        dispatch(getdiets());
    }, [dispatch]);

    //
    // useEffect (() => {
    //     if (recipeCreateId) {
    //         dispatch(getRecipesIdOne(recipeCreateId));
    //     }  console.log('Ensayo segundo useEffect ' + recipeCreateId);
    // }, [recipeCreateId]);


    //Handler para resetear todos los filtros y demás
    function handlerClick(e) {                                                                      //7mo
        e.preventDefault();
        dispatch(getRecipes());                                                                     //8vo Recetea todas las recetas de vuelta SIRVE
    };

    //Función para eliminar recetas creadas
    const handleDelete = (e)=> {
        const idDelete = e.target.value;                                                            //Guardamos el 'id' de la receta
        dispatch(deleteRecipe(idDelete));                                                           //Despachamos el 'id' para la 'action type' que elimina
        window.location.reload();                                                                   //Recarga la página cuando se elimina la receta
    };


    return (
        <div className="containerHome">
            <nav className='menuHome'>
                <div className=''>
                    <button className='iconoHome' onClick={ (e) => { handlerClick(e) } }><FontAwesomeIcon icon={ faFireBurner }/></button>        {/*6to*/}
                </div>
                <Diets />
                <Ordenamiento />
                <Searchbar />  
            </nav>

            <div className="contenedorBotonesHome">
                <button className="botonCrearRecataHome"><Link to='/createrecipes' style={{ textDecoration: 'none', color:'wheat' }}>Crea tu receta!!!</Link></button>
                <button className="botonVolverLandingPage"><Link to='/' style={{ textDecoration: 'none', color:'wheat'  }}>Landing Page</Link></button>
            </div>   

            <div className="prevNext">
                {/* Mostrar el botón de "Anterior" solo si no estamos en la primera página */}
                {recipesPage > 1 && (
                    <button className="prev" onClick={() => handlerPrev()}>PREV</button>
                )}
                {/* Mostrar el botón de "Siguiente" solo si no estamos en la última página */}
                {recipesPage < end && (
                    <button className="next" onClick={() => handlerNext()}>NEXT</button>
                )}
            </div>

            <Paginado recipesPerPage={ recipesPerPage } allRecipes={ allRecipes.length } paginado={ paginado } currentPage={ recipesPage }/>

            <div className='containerCardHome1'>
                {currentRecipes?.map((el) => {
                    return (
                        <div className='containerCardHome' key={ el.id }>
                            <Link to={'/detail/' + el.id} style={{ textDecoration: 'none' }} >
                                <Card name={ el.name } image={ el.image } diets={ el.diets } cuisines={ el.cuisines }/>
                            </Link>

                            {/* Muestra el boton para modificar*/}
                            {/* { el.id.toString().split("").length > 10 ? <button value={ el.id } onClick={ e => handleModificar(e) }>Modificar</button> : null } */}

                            {/* Muestra el boton para eliminar*/}
                            { el.id.toString().split("").length > 10 ? <button className="botonEliminar" value={ el.id } onClick={ e => handleDelete(e) }>Delete</button> : null }
                        </div>
                    );
                })};
            </div>

            <div className="prevNext">
                {/* Mostrar el botón de "Anterior" solo si no estamos en la primera página */}
                {recipesPage > 1 && (
                    <button className="prev" onClick={() => handlerPrev()}>PREV</button>
                )}
                {/* Mostrar el botón de "Siguiente" solo si no estamos en la última página */}
                {recipesPage < end && (
                    <button className="next" onClick={() => handlerNext()}>NEXT</button>
                )}
            </div>

            {/* Scroll bar ejemplo 2 */}
            <BackTotopButton />

            <Paginado recipesPerPage={ recipesPerPage } allRecipes={ allRecipes.length } paginado={ paginado } currentPage={ recipesPage }/>
        </div>
    );
};




//Revisar http://pastie.org/p/3kmxO80e2n5zWpPc2cAVTs
// const handleNext = () => {
//     if (rangeEnd < totalPages) {
//       setRangeStart(rangeStart + 5);
//       setRangeEnd(rangeEnd + 5);
//     }
//   };


//   // Función para mover el rango a la izquierda
//   const handlePrev = () => {
//     if (rangeStart > 1) {
//       setRangeStart(rangeStart - 5);
//       setRangeEnd(rangeEnd - 5);
//     }
//   };