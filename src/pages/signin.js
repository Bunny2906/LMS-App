import React,{useState} from "react";
import { Link,Routes,Route, useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import {auth} from'../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
function Signin()
{
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate("/home");
        {toast("Login successful");}
    };
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [status,setStatus]=useState("Logout");
    const submit=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,username,password)
        .then((userCred)=>{console.log(userCred);localStorage.setItem('token',userCred);alert("login success "+auth?.currentUser.displayName+" !!");goToHome();})
        .catch((err)=>{console.log(err);alert("Invalid Email-Id or Password")});
        
    }
    return(
        <div className="signin">
            <h1>Student Login</h1>
            <form onSubmit={submit}>
                <input type="email" onChange={(e)=>{setUserName(e.target.value)}} placeholder="Username" required></input>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" required></input>
                <input className="signinbtn" type="submit" value="Login"></input>
            </form>
            <p>Don't have an account? <Link to="/signup">Create One</Link></p>
        </div>
    )
}

export default Signin;
