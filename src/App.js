import logo from './logo.svg';
import './App.css';
import Data from './Json/movie.json'
import { useState } from 'react';
import { BrowserRouter as router, Routes, Route, Link } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import MovieDetail from './component/MovieDetail';
import Register from './component/Register';

function App() {
  // const [movie, setMovie] = useState(Data)
  console.log(Data);

  return (

    <div>
      <Link to="/Login">Login</Link>
      {/* <Link to ="/Login"></Link> */}

      <Link to="/Register">Register</Link>


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/MovieDetail/:MovieID' element={<MovieDetail />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
    </div>


  

  );

}

export default App;