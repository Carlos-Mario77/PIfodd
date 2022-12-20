import React from 'react';
import { orderByNames, orderByHealthScore } from '../../redux/actions/index';
import { useDispatch,  } from 'react-redux';
import './Ordenamiento.css';


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
        <div className='containerOrdenamiento'>
            <label className=''>Ordenar: </label>
            <select className='selectOrdenamiento' onChange={e => orderBy(e)}>
                <option value="select">Seleccionar</option>
                <option value="Ascendente">A - Z</option>
                <option value="Descendente">Z - A</option>
                <option value="Mayor">High health score</option>
                <option value="Menor">Low health score</option>
            </select>
        </div>
    );
};