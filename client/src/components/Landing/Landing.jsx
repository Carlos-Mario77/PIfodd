import React from "react";
import { FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import './Landing.css';


export default function Landing () {

    return (
        <div className='landing'>
            <h1>I  Foods</h1>
            <p className="landing-Paragraph">Nuestra pasión es la cocina... y cocinar en casa es nuestro mejor hobie</p>
            <div className="landing-ContainerSocialNetwork">
                <a href="https://www.linkedin.com/in/carlosmario-pro/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="landing-LinkedinIn" /></a>
                <a href="https://twitter.com/home" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter className="landing-Twitter" /></a>
                <a href="https://github.com/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><BsGithub className="landing-Github" /></a>
                <a href="https://co.pinterest.com/CarlosMarioPro/" target="_blank" rel="noreferrer noopener"><FaPinterest className="landing-Pinterest" /></a>
            </div >
            <p className="landing-Paragraph__SocialNetwork">Síguenos en nuestras redes sociales</p>
        </div>
    );
};