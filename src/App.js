import axios from'axios';
import {auth} from './firebase';
import './App.css';
import './logins.css';
import Home from './home';
import Navbar from './navbar';
import Signin from './pages/signin'
import Signup from './pages/signup'
import Admin from './pages/admin'
import Footer from './footer'
import {Route,Routes,BrowserRouter,Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
 
  return (
    <div className="App">
        <Navbar />
          <Routes>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/signin' element={<Signin></Signin>}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
          </Routes>  
    </div>
  );
}
export default App;
