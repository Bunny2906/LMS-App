import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import {auth} from './firebase';
import firebase from './firebase'
import {Navbar,NavDropdown} from 'react-bootstrap';
import {signOut,getAuth} from "firebase/auth";
function Nav()
{
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate("./");
    };
    const signout = ()=>{
        const auth = getAuth();
        signOut(auth).then(()=>{localStorage.removeItem('token');console.log(auth.currentUser);console.log("signed out succesfully");})
        .catch((err)=>{console.log(err)})
        
    }
    return(
        <div className="navbar">
            <h1>📖e-Book</h1>
            <div className="right">
                <Link style={{textDecoration:'none',color:"black"}} to="./home"><li>Home</li></Link>
                <Link style={{textDecoration:'none',color:"black"}} to="./favourites"><li>Favourites❤️</li></Link>
                <Link to={"/"}><button onClick={()=>{signout()}} className="signdirect">Logout</button></Link>
            </div>    
        </div>
    )
}
export default Nav;
