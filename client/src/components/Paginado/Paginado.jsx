import React from 'react';
import './Paginado.css';

export default function Paginado({ recipesPerPage, allRecipes, paginado, currentPage, }) 
{
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i + 1);
    };

    return (
        <div className="containerPaginado">
        {
            pageNumbers &&
            pageNumbers.map(number => (
                <button key={number} className={`botonPaginado ${number === currentPage ? 'active' : ''}`} onClick={() => paginado(number)} > {number} </button>
            ))
        }
        </div>
    );
};