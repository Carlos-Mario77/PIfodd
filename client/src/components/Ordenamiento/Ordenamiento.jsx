import React from 'react';
import { orderByNames, orderByHealthScore } from '../../redux/actions/index';
import { useDispatch,  } from 'react-redux';

export default function Ordenamiento(){
    const dispatch = useDispatch();                             //Despacha la acción sin usar el connect

    const orderBy = (e) => {
        e.preventDefault();
        //console.log(e.target.value);        
        if (e.target.value === "select"){
            return
        }
        else if (e.target.value === "Ascendente" || e.target.value === "Descendente") {
            dispatch(orderByNames(e.target.value));
        }
        else if (e.target.value === "Mayor" || e.target.value === "Menor") {
            dispatch(orderByHealthScore(e.target.value));
        }
    };

    return(
        <div >
        <label>Ordenar: </label>
        <select onChange={e => orderBy(e)}>
            <option value="select">Seleccionar</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            <option value="Mayor">Ascendente health score</option>
            <option value="Menor">Descendente health score</option>
        </select>
    </div>
    );
};