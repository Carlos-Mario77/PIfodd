import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getNameRecipes } from '../../redux/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Searchbar.css';


export default function Searchbar() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');

    //Guardamos lo que el usuario digite en el input, se guarda en el estado local,y se despacha con el handlerSubitmi
    function handlerInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);

    };

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(getNameRecipes(name));                     //El botón despacha la action
        console.log(name);
        clearSearch(); // Llamamos la función que borra el nombre de búsqueda
    };

    function clearSearch() {
        setName('');                                        // Limpiamos el valor del estado local
    };


    return (
        <div className="containerSearchbar">
            <input className="inputSearchbar" type="text" placeholder='Buscar...' onChange={(e) => handlerInputChange(e)} value={name}/>
            <button className="botonSearchbar"  type='submit' onClick={(e) => handlerSubmit(e)} ><FontAwesomeIcon icon={ faMagnifyingGlass }/></button>
        </div>
    );
};