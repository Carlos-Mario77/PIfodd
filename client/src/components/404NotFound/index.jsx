import React from "react";
import { Link } from "react-router-dom";
import { CgSmileSad } from 'react-icons/cg';
import "./index.css";


export default function NotFound() {
    
    return (
        <section className="notFound">
            <h1>PAGE NOT FOUND</h1>
            <CgSmileSad className="icon-NotFound"/>
            <Link to={"/home"} style={{ textDecoration: 'none' }}>
                <div><p className="redirect-NotFound">Enjoy your favorite recipes here</p></div>
            </Link>
            
        </section>
    );
};