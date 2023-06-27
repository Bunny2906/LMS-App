import React, { useState } from "react";
import axios from 'axios';
import { Route, Routes,Link, useNavigate } from "react-router-dom";
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
function Signup()
{
    const [name,setName]=useState("");
    const [rollno,setRollNo]=useState("");
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();
    const goToSignIn = ()=>{
        navigate("/signin");
    };

    const submit=(e)=>
    {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,username,password)
        .then(user=>{console.log(user);goToSignIn()})
        .catch(err=>console.log(err));
        console.log("submitted");
    }
    return(
        <div className="signup">
            <h1>Student Registration</h1>
            <form onSubmit={submit}>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" required></input>
                <input onChange={(e)=>setRollNo(e.target.value)} type="text" placeholder="Roll Number" required></input>
                <input onChange={(e)=>setUserName(e.target.value)} type="email" placeholder="Email ID" required></input>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Create Password" required></input>
                <input type="password" placeholder="Re-enter Password" required></input>
                <input type="submit" value="Sign Up"></input>
            </form>
            <p>Already have an account? <Link to="/signin">Login here</Link></p>
            </div>
    )
}
export default Signup;