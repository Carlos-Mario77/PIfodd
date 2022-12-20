import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Details';
import CreateRecipes from './pages/CreateRecipes/CreateRecipes';
//import ScrollToTop from "react-scroll-to-top";                  //Scroll bar ejemplo 1, se descarga npm i react-scroll-to-top, se importa aquí y se invoca en el return como <ScrollToTop smooth color='#464EAF'/>


function App() {


  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <LandingPage /> } />
          <Route path ='/home' element = { <Home />  } />
          <Route path='/detail/:id' element={ <Detail /> } />
          <Route path='/createrecipes' element={ <CreateRecipes /> } />
        </Routes>
      {/* <ScrollToTop smooth color='#464EAF'/> */}
    </div>
  );
};

export default App;
//Si el "behavior: 'smooth'" no funciona, ir a 'chrome://flags/#smooth-scrolling' y seleccionar 'Enabled', esto porque Google deshabilitó esta opción