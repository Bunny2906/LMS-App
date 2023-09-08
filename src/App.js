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
import Favourites from './favourites';
import Footer from './footer';
import {Route,Routes,BrowserRouter,Switch} from 'react-router-dom';
import { useEffect, useState,useContext,Navigate} from 'react';
function App() {
  const [userName,setUserName] = useState("");
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user)
            {
                setUserName(user.displayName);
            }
            else
            {
                setUserName("");
            }
        });
    },[])
  return (
    <div className="App">
          {auth?.currentUser?(<Navbar />):(<Navbar2 />)}
          <Routes>
            <Route exact path='/' element={<Home2 />}></Route>
            <Route exact path='/home' element={<Home name={userName}/>}></Route>
            <Route exact path={'/signin'} element={<Signin></Signin>}></Route>
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
