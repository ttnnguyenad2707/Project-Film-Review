import './App.css';
import Data from './Json/Movie.json'
import { useState } from 'react';
import { BrowserRouter as router, Routes, Route, Link } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import MovieDetail from './component/MovieDetail';
import Register from './component/Register';

function App() {
  // const [movie, setMovie] = useState(Data)
  // console.log(Data);
  const [search,setSearch] = useState("");
  console.log(search);
  return (
    
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'} className="btn btn-primary">Phim Hay</Link>

                <div className="collapse navbar-collapse" >
                    <Link to="/Login" >Đăng nhập</Link>
                    /
                    <Link to="/Register" >Đăng kí </Link>
                </div>
                <form className="form-inline">
                    <input  onChange={e => setSearch(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                </form>

            </nav>

      <Routes>
        <Route path='/' index element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/MovieDetail/:MovieID' element={<MovieDetail />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
      {/* <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link> */}
    </div>




  );

}

export default App;
