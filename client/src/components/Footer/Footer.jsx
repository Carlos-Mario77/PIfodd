import React from "react";
import { FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import './Footer.css';


export default function Footer () {

    return (
        <div className='footer'>
            <div className='container-footerName'>
                <span className='container-footerNameA'>Carlos</span>
                <span className='container-footerNameB'>Mario</span>
            </div>
            <div className="footer-ContainerSocialNetwork">
                <a href="https://www.linkedin.com/in/carlosmario-pro/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="landing-LinkedinIn" /></a>
                <a href="https://twitter.com/home" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter className="landing-Twitter" /></a>
                <a href="https://github.com/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><BsGithub className="landing-Github" /></a>
                <a href="https://co.pinterest.com/CarlosMarioPro/" target="_blank" rel="noreferrer noopener"><FaPinterest className="landing-Pinterest" /></a>
            </div >
            <p className='copyRight'>© 2023 Carlos Mario. Todos los Derechos Reservados.</p>
        </div>
    );
};