import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Details';
import CreateRecipes from './pages/CreateRecipes/CreateRecipes';
import ActualizarRecetas from './pages/ActializarRecetas/ActualizarRecetas';
import Error from "./components/404NotFound/index";
import Footer from "./components/Footer/Footer";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';


export default function App() {

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