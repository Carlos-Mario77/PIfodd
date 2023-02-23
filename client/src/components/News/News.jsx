import React from "react";
import News1 from '../../assets/News1.jpg';
import News2 from '../../assets/News2.jpg';
import News3 from '../../assets/News3.jpg';
import './News.css';


export default function News () {

    return ( 
        <div className='news' >
            <h1>Enlaces externos</h1>
            <div className="container-News">
                <a href="https://www.eurofarma.cl/articulos/9-beneficios-de-una-alimentacion-saludable" target="_blank" rel="noreferrer noopener">
                    <img src={News1} alt="News 1" />
                    <h2>Beneficios de una alimentación saludable</h2>
                </a>
            </div>
            <div className="container-News">
                <a href="https://mejorconsalud.as.com/10-alimentos-te-ayudaran-estar-mas-feliz/" target="_blank" rel="noreferrer noopener">
                    <img src={News2} alt="News 2" />
                    <h2>10 alimentos para ser más feliz</h2>
                </a>
            </div>
            <div className="container-News">
                <a href="https://elpais.com/elpais/2019/05/09/buenavida/1557401824_623394.html" target="_blank" rel="noreferrer noopener">
                    <img src={News3} alt="News 3" />
                    <h2>Come lo que quieras sin engordar</h2>
                </a>
            </div>
        </div>
    );
};