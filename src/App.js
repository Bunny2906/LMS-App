import axios from'axios';
import {auth} from './firebase';
import './App.css';
import './logins.css';
import './books.css';
import Home from './home';
import Home2 from './home2';
import Navbar from './navbar';
import Navbar2 from './navbar2';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Admin from './pages/admin';
import BookList from './booklist';
import BookDetails from './bookdetails';
import Favourites from './favourites';
import Footer from './footer';
import {Route,Routes,BrowserRouter,Switch} from 'react-router-dom';
import { useEffect, useState,useContext,Navigate} from 'react';
function App() {
  const [login,setLogin] = useState(false);
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user)
            {
                localStorage.setItem("name",user.displayName);
                localStorage.setItem("email",user.email)
                setLogin(true)
            }
            else
            {
                setLogin(false);
            }
        });
    },[])
  return (
    <div className="App">
          {login ? (<Navbar />):(<Navbar2 />)}
          <Routes>
            <Route exact path='/' element={login ? (<Home />):(<Home2 />)}></Route>
            <Route exact path='/home' element={login ? (<Home />):(<Home2 />)}></Route>
            <Route exact path={'/signin'} element={<Signin />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
            <Route exact path="/booklist" element={<BookList />}></Route>
            <Route exact path="/booklist/:id" element={<BookDetails />}></Route>
            <Route exact path="/favourites" element={<Favourites />}></Route>
          </Routes>  
    </div>
  );
}
export default App;
