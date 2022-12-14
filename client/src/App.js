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