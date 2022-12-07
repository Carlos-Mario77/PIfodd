import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from '../../redux/actions/index';
import Searchbar from "../../components/Searchbar/Searchbar";






export default function Home() {
    const dispatch = useDispatch(); 


    useEffect (() => {                  //Cuando se monte el componente, traerá todos los personajes del state de Redux
        dispatch(getRecipes())       //Este dispatch es lo mismo que hacer el mapStateToProps
    }, [dispatch]);





    return (
        <div>
            <h1>Hola, soy Carlos</h1>
            <Searchbar />














        </div>
    )
}