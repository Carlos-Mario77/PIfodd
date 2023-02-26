import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { filterByDiet } from '../../redux/actions/index';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import All from '../../assets/PlatoAll.png';
import African from '../../assets/PlatoAfrican.png';
import American from '../../assets/PlatoAmerican.png';
import Asian from '../../assets/PlatoAsian.png';
import Cajun from '../../assets/PlatoCajun.png';
import Chinese from '../../assets/PlaroChinese.png';
import European from '../../assets/PlatoEuropean.png';
import Indian from '../../assets/PlatoIndian.png';
import MiddleEastern from '../../assets/PlatoMiddleEastern.png';
import Southern from '../../assets/PlatoSouthern.png';
import './CarouselCuisines.css';


let slidesToShow = 4;   //Define la cantidad de cards que se muestran en slider
const PreviousBtn = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
        <div>
            {currentSlide !== 0 && (
                <div className={className} onClick={onClick}>
                    <GrFormPrevious style={{ color: 'blue', fontSize: '30px' }} />
                </div>
            )}
        </div>
    );
};

const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    return (
        <div>
            {currentSlide !== slideCount - slidesToShow && (
                <div className={className} onClick={onClick}>
                    <GrFormNext style={{ color: 'blue', fontSize: '30px' }} />
                </div>
            )}
        </div>
    );
};

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        { breakpoint: 426, settings: { slidesToShow: 1, centerMode: false } },
        { breakpoint: 769, settings: { slidesToShow: 2, centerMode: false } },
        { breakpoint: 1025, settings: { slidesToShow: 3, centerMode: false, slidesToScroll: 1 } }
    ],
};

export default function MultiItemCarousel () {
    const dispatch = useDispatch();
    const [active, setActive] = useState("All");

    function handlerFilterDiets(e) {
        e.preventDefault();
        dispatch(filterByDiet(e.target.value));
        setActive(e.target.value); // actualizar el estado "active"
    }

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    if (width <= 426) {
        slidesToShow = 1;
    } else if (width > 426 && width <= 769) {
        slidesToShow = 2;
    } else if (width > 769 && width <= 1025) {
        slidesToShow = 3;
    } else {
        slidesToShow = 4;
    }

    return (
        <div style={{ margin: '30px' }} className='carousel multiItemCarousel'>
            <h1>Filter by types of cuisine</h1>
            <Slider {...carouselProperties}>
                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'All' ? 'active2' : ''}`} value="All" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-AllCuisine' src={All} alt='Cuisine All'/>
                            </div>
                            <div className='title-container'><h3>ALL</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'African' ? 'active2' : ''}`} value="African" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-AfricanCuisine' src={African} alt='Cuisine African'/>
                            </div>
                            <div className='title-container'><h3>AFRICAN</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'American' ? 'active2' : ''}`} value="American" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                            <img className='imagen-AmericanCuisine' src={American} alt='Cuisine American'/>
                            </div>
                            <div className='title-container'><h3>AMERICAN</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'Asian' ? 'active2' : ''}`} value="Asian" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-AsianCuisine' src={Asian} alt='Cuisine Asian'/>
                            </div>
                            <div className='title-container'><h3>ASIAN</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'Cajun' ? 'active2' : ''}`} value="Cajun" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-CajunCuisine' src={Cajun} alt='Cuisine Cajun & Creole'/>
                            </div>
                            <div className='title-container'><h3>CAJUN & CREOLE</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'Chinese' ? 'active2' : ''}`} value="Chinese" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-ChineseCuisine' src={Chinese} alt='Cuisine Chinese'/>
                            </div>
                            <div className='title-container'><h3>CHINESE</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'European' ? 'active2' : ''}`} value="European" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-EuropeanCuisine' src={European} alt='Cuisine European'/>
                            </div>
                            <div className='title-container'><h3>EUROPEAN, ITALIAN, MEDITERRANEAN</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'Indian' ? 'active2' : ''}`} value="Indian" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-IndianCuisine' src={Indian} alt='Cuisine Indian'/>
                            </div>
                            <div className='title-container'><h3>INDIAN</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'Middle Eastern' ? 'active2' : ''}`} value="Middle Eastern" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-MiddleEasternCuisine' src={MiddleEastern} alt='Cuisine Middle Eastern'/>
                            </div>
                            <div className='title-container'><h3>MIDDLE EASTERN</h3></div>
                        </div>
                    </button>
                </div>

                <div className='caruse'>
                    <button className={`buttonCuisine ${active === 'Southern' ? 'active2' : ''}`} value="Southern" onClick={handlerFilterDiets}>
                        <div className='container-ImgTitCuisine'>
                            <div className='imagen-container'>
                                <img className='imagen-SouthernCuisine' src={Southern} alt='Cuisine Southern'/>
                            </div>
                            <div className='title-container'><h3>SOUTHERN</h3></div>
                        </div>
                    </button>
                </div>
            </Slider>
        </div>
    );
};