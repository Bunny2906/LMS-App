import React from "react";
import {Link} from 'react-router-dom';
import {auth} from './firebase';
import {Navbar,NavDropdown} from 'react-bootstrap';
function Nav()
{
    return(
        <div className="navbar">
            <h1>e-Read</h1>
            <div className="right">
                <Link style={{textDecoration:'none',color:"black"}} to="/home"><li>Home</li></Link>
                <Link to="/signin"><button className="signdirect">{auth?.currentUser?("Logout"):("Login")}</button></Link>
            </div>    
        </div>
    )
}
export default Nav;
