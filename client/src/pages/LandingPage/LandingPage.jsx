import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typed from 'typed.js';
import './LandingPage.css';

export default function LandingPage () {
    //Efecto máquina de escribir
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Chef...', 'Design...', 'Developer...', 'Henry...'], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 150,
            backDelay: 150,
            smartBackspace: true,
            loop: true,
            showCursor: false,
        });
        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className="containerLandingPage">
            {/* Efecto máquina de escribir */}
            <h1 className="otros">I'm <span className='menssage' ref={el}></span></h1>

            <div className="container2LandingPage">
                <h1 className="tituloLandingPage">Deli Foods...</h1>
                <p className="recetaLandingPage">+ de 100 Recetas</p>
                <p className="textoLandingPage">11 Tipos de dietas</p>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <button className="botonLandingPage" >Ingresar</button>
                </Link>
            </div>

            <div className="redes-socialesLandingPage">
                <a href="https://www.linkedin.com/in/carlosmario-pro/" target="_blank" rel="noreferrer noopener"><FaLinkedin className="linkedinLandingPage" /></a>
                <a href="https://github.com/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><FaGithub className="githubLandingPage" /></a>
            </div>
            
        </div>
    );
}