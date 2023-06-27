import React from "react";
function Admin()
{
    const submit = ()=>
    {
        console.log("submitted");   
    }
    return(
        <div className="admin">
            <h1>Admin Login</h1>
            <form onSubmit={submit}>
                <input type="email" placeholder="Username" required></input>
                <input type="password" placeholder="Password" required></input>
                <input type="submit" value="Sign In"></input>    
            </form>
        </div>
    )
}
export default Admin;