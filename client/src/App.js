import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Details';
import CreateRecipes from './pages/CreateRecipes/CreateRecipes';


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <LandingPage /> } />
                <Route path ='/home' element = { <Home />  } />
                <Route path='/detail/:id' element={ <Detail /> } />
                <Route path='/createrecipes' element={ <CreateRecipes /> } />
            </Routes>
        </div>
    );
};


export default App;
//import ScrollToTop from "react-scroll-to-top";                  //Scroll bar ejemplo 1, se descarga npm i react-scroll-to-top, se importa aquí y se invoca en el return como <ScrollToTop smooth color='#464EAF'/>
//Si el "behavior: 'smooth'" no funciona, ir a 'chrome://flags/#smooth-scrolling' y seleccionar 'Enabled', esto porque Google deshabilitó esta opción







// import React, { useState, useEffect } from 'react'
// import { GlobalStyle } from './GlobalStyle'
// import { Route, Routes } from 'react-router-dom'
// import LandingPage from './pages/LandingPage/LandingPage'
// import Home from './pages/Home/Home'
// import Detail from './pages/Details/Details'
// import CreateRecipes from './pages/CreateRecipes/CreateRecipes'

// function App() {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
    // Obtener el estado del modo dark del localStorage
  //   const darkModeFromStorage = localStorage.getItem('darkMode')
  //   if (darkModeFromStorage === 'true') {
  //     setDarkMode(true)
  //   } else {
  //     setDarkMode(false)
  //   }
  // }, [])

  // useEffect(() => {
    // Guardar el estado del modo dark en el localStorage
//     localStorage.setItem('darkMode', darkMode)
//   }, [darkMode])

//   return (
//     <div>
//       <button onClick={() => setDarkMode(!darkMode)}>
//         Toggle dark mode
//       </button>
//       <GlobalStyle darkMode={darkMode} />
//       <Routes>
//         <Route path='/' element={ <LandingPage /> } />
//         <Route path ='/home' element = { <Home />  } />
//         <Route path='/detail/:id' element={ <Detail /> } />
//         <Route path='/createrecipes' element={ <CreateRecipes /> } />
//       </Routes>
//     </div>
//   )
// }

// export default App