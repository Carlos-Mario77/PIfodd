import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Details';
import CreateRecipes from './pages/CreateRecipes/CreateRecipes';
import ActualizarRecetas from './pages/ActializarRecetas/ActualizarRecetas';
import Error from "./components/404NotFound/index";
import Footer from "./components/Footer/Footer";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <LandingPage /> } />
                <Route path ='/home' element = { <Home />  } />
                <Route path='/detail/:id' element={ <Detail /> } />
                <Route path='/createrecipes' element={ <CreateRecipes /> } />
                <Route path='/actualizar/:id' element={ <ActualizarRecetas /> } />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
};


export default App;
//import ScrollToTop from "react-scroll-to-top";                  //Scroll bar ejemplo 1, se descarga npm i react-scroll-to-top, se importa aquí y se invoca en el return como <ScrollToTop smooth color='#464EAF'/>
//Si el "behavior: 'smooth'" no funciona, ir a 'chrome://flags/#smooth-scrolling' y seleccionar 'Enabled', esto porque Google deshabilitó esta opción