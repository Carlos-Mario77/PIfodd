import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getNameRecipes } from '../../redux/actions/index';

export default function Searchbar() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');

    //Guardamos lo que el usuario digite en el input, se guarda en el estado local,y se despacha con el handlerSubitmi
    function handlerInputChange(e) {
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    };

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(getNameRecipes(name))    //El botón despacha la action
        console.log(name)
    };

    return (
        <div>
            <input type="text" placeholder='Buscar...' onChange={(e) => handlerInputChange(e)} />
            <button type='submit' onClick={(e) => handlerSubmit(e)} >Buscar</button>
        </div>
    );
};