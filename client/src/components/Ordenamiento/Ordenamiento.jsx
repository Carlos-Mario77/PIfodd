import React, { useState } from "react";
import { orderByNames, orderByHealthScore } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import "./Ordenamiento.css";


export default function Ordenamiento() {
    const dispatch = useDispatch();
    const [active, setActive] = useState("Ascendente");

    const orderBy = (e) => {
        e.preventDefault();
        if (e.target.value === "Ascendente" || e.target.value === "Descendente") {
            dispatch(orderByNames(e.target.value));
        } else if (e.target.value === "Mayor" || e.target.value === "Menor") {
            dispatch(orderByHealthScore(e.target.value));
        }
        setActive(e.target.value); // Actualizar el estado "active" con el valor del botón seleccionado
    };


    return (
        <div className="ordenamiento">
            <div className="container-Ordenamiento">
                <h1>Order by:</h1>
                <div className="ordenamiento-Options">
                    <button className={`buttonOrdenamiento ${active === "Ascendente" ? "active3" : ""}`} value="Ascendente" onClick={orderBy} >A - Z</button>
                    <button className={`buttonOrdenamiento ${active === "Descendente" ? "active3" : ""}`} value="Descendente" onClick={orderBy} >Z - A</button>
                </div>
                <div className="ordenamiento-Options">
                    <button className={`buttonOrdenamiento ${active === "Mayor" ? "active3" : ""}`} value="Mayor" onClick={orderBy} >High score</button>
                    <button className={`buttonOrdenamiento ${active === "Menor" ? "active3" : ""}`} value="Menor" onClick={orderBy}>Low score</button>
                </div>
            </div>
        </div>
    );
};