import React, { useState } from "react";
import axios from 'axios';
import { Route, Routes,Link, useNavigate } from "react-router-dom";
import {auth} from '../firebase';
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
function Signup()
{
    const [name,setName]=useState("");
    const [rollno,setRollNo]=useState("");
    const [username,setUserName]=useState("");
    const [createPassword,setCreatePassword]=useState("");
    const [password,setPassword]=useState("");
    const [errMsg,setErrMsg] = useState("");
    const navigate = useNavigate();
    const details = {
        Name:name,
        RollNo:rollno,
        UserName:username,
        Password:password
    }
    const goToHome = ()=>{
        navigate("/home");
    };

    const submit=(e)=>
    {
        e.preventDefault();
        if(!name || !rollno || !username || !password)
        {
            setErrMsg("Fill all fields");
        }
        if(createPassword != password)
        {
            alert("create password and confirm password doesn't match !!");
        }
        else
        {
            axios.post(`https://lmsapp-31da4-default-rtdb.firebaseio.com/userDetails.json`,details)
            .then().catch((err)=>{alert(err)});
            createUserWithEmailAndPassword(auth,username,password)
            .then(async(response)=>{console.log(response);goToHome();alert("Account created successfully");
            localStorage.setItem('token',"logged in");
            localStorage.setItem("name",name);
            const user = response.user;
            await updateProfile(user,{displayName:details.Name});
            })
            .catch(err=>alert(err));
            console.log("submitted");
            }
    }
    return(
        <div className="signup">
            <h1>Student Registration</h1>
            <form onSubmit={submit}>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" required></input>
                <input onChange={(e)=>setRollNo(e.target.value)} type="text" placeholder="Roll Number" required></input>
                <input onChange={(e)=>setUserName(e.target.value)} type="email" placeholder="Email ID" required></input>
                <input onChange={(e)=>setCreatePassword(e.target.value)} type="password" placeholder="Create Password" required></input>
                <input onChange={(e)=>{setPassword(e.target.value)}}type="password" placeholder="Re-enter Password" required></input>
                <input type="submit" value="Sign Up"></input>
            </form>
            <p>Already have an account? <Link to="/signin">Login here</Link></p>
            </div>
    )
}
export default Signup;
