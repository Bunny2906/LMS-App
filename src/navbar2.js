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
        navigate("");
    };
    return(
        <div className="navbar2">
            <h1>e-Book</h1>
            <div className="right2">
                <Link style={{textDecoration:'none',color:"black"}} to="./"><li>Home</li></Link>
                <Link to={"./signin"}><button className="signdirect">Login</button></Link>
            </div>    
        </div>
    )
}
export default Nav;
