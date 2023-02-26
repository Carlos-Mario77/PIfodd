import React, { useEffect } from "react";
import News1 from '../../assets/News1.jpg';
import './News.css'


export default function News () {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="instagram-widget">
            <h1>Enlaces externos</h1>
            <div className="container-News">
                <a href="https://www.eurofarma.cl/articulos/9-beneficios-de-una-alimentacion-saludable" target="_blank" rel="noreferrer noopener">
                    <img src={News1} alt="News 1" />
                    <h2>Beneficios de una alimentación saludable</h2>
               </a>
            </div>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CO2_kJEHSo3/" data-instgrm-version="13"></blockquote>
        </div>
    );
}