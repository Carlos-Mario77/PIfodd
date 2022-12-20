import React from 'react';
import './Paginado.css';

export default function Paginado ({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i + 1);
    };

    return (
        <div className='containerPaginado'>
            <ul className="paginado">                   {/**pageNumbers && Se fija si en pageNumbers hay algo */}
                {pageNumbers &&             
                    pageNumbers.map(number => (
                        <li className="numberPaginado" key= { number }>
                            <button className="botonPaginado" onClick={() => paginado(number)}>{ number }</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};