import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import MovieList from './Components/MovieList/MovieList';
import Navigation from './Components/Navigation';
import Register from './Components/Register';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import {moviesData} from './Data.js';
import { useState } from 'react';
import Footer from './Components/Footer';
import Details from './Pages/Details';


function App() {
  

    const [movies,setMovies ] = useState (moviesData)
  
    const [inputSearch, setInputSearch] = useState('')
  
    const [inputStars , setInputStars] = useState(0)
  
  const add= (newmovie) =>{
    setMovies([...movies, newmovie])
  }
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/MovieList' element={<MovieList   movies = {movies} inputSearch={inputSearch} 
         inputStars={inputStars} />} />

        <Route path='/Login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        

        <Route path= '/Details/:id' element={<Details />}/>








      </Routes>
      <Footer  className='footer'/>
     
    </div>
  );
}

export default App;
