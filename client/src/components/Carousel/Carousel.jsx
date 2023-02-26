import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from './data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import "./Carousel.css";


const PreviousBtn = (props) => {        //Botón Prev
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <IoIosArrowBack style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};

const NextBtn = (props) => {            //Botón Next
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <IoIosArrowForward style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};

export default function Carousel () {

    return (
        <div className="carousel">
            <div className='landing'>
                <h1>I Foods</h1>
                <p className="landing-Paragraph">Our passion is cooking... and cooking at home is our hobby</p>
                <div className="landing-ContainerSocialNetwork">
                    <a href="https://www.linkedin.com/in/carlosmario-pro/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="landing-LinkedinIn" /></a>
                    <a href="https://twitter.com/home" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter className="landing-Twitter" /></a>
                    <a href="https://github.com/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><BsGithub className="landing-Github" /></a>
                    <a href="https://co.pinterest.com/CarlosMarioPro/" target="_blank" rel="noreferrer noopener"><FaPinterest className="landing-Pinterest" /></a>
                </div >
                <p className="landing-Paragraph__SocialNetwork">Follow us on our social networks</p>
            </div>
            <Slider
                autoplay
                autoplaySpeed={4000}
                initialSlide={2}
                infinite
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                customPaging={(i) => {
                    return (
                        <div>
                            {/* <img src={data[i]} alt="" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "10px", }} /> */}
                        </div>
                    );
                }}
                dotsClass="slick-dots custom-indicator"
            >
            {data.map((item) => (
                <div key={data}>
                    <img src={item} alt="" style={{ width: "100%"}} />
                </div>
            ))}
            </Slider>
        </div>
    );
};