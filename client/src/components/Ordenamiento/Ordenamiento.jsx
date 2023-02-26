import React, { useState } from "react";
import { orderByNames, orderByHealthScore, orderByFavorites, orderByTime } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import "./Ordenamiento.css";


export default function Ordenamiento() {
    const dispatch = useDispatch();
    const [active, setActive] = useState("Ascendente");

    const orderBy = (e) => {
        e.preventDefault();
        if (e.target.value === "Ascendente" || e.target.value === "Descendente") {
            dispatch(orderByNames(e.target.value));
        }
        else if (e.target.value === "Mayor" || e.target.value === "Menor") {
            dispatch(orderByHealthScore(e.target.value));
        }
        else if (e.target.value === "High" || e.target.value === "Low") {
            dispatch(orderByFavorites(e.target.value));
        }
        else if (e.target.value === "MoreTime" || e.target.value === "LessTime") {
            dispatch(orderByTime(e.target.value));
        }
        setActive(e.target.value);
    };


    return (
        <div className="ordenamiento">
            <h1>Order by</h1>
            <div className="ordenamiento-Options">
                <button className={`buttonOrdenamiento ${active === "Ascendente" ? "active3" : ""}`} value="Ascendente" onClick={orderBy} >A - Z</button>
                <button className={`buttonOrdenamiento ${active === "Descendente" ? "active3" : ""}`} value="Descendente" onClick={orderBy} >Z - A</button>
                <button className={`buttonOrdenamiento ${active === "Mayor" ? "active3" : ""}`} value="Mayor" onClick={orderBy} >High score</button>
                <button className={`buttonOrdenamiento ${active === "Menor" ? "active3" : ""}`} value="Menor" onClick={orderBy}>Low score</button>
                <button className={`buttonOrdenamiento ${active === "MoreTime" ? "active3" : ""}`} value="MoreTime" onClick={orderBy} >More Time</button>
                <button className={`buttonOrdenamiento ${active === "LessTime" ? "active3" : ""}`} value="LessTime" onClick={orderBy}>Less Time</button>
                <button className={`buttonOrdenamiento ${active === "High" ? "active3" : ""}`} value="High" onClick={orderBy} >High Favorite</button>
                <button className={`buttonOrdenamiento ${active === "Low" ? "active3" : ""}`} value="Low" onClick={orderBy}>Low Favorite</button>
            </div>
        </div>
    );
};