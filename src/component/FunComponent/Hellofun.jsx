import React from "react";
import react ,{useState}from "react";

function Hello(){

const[name,setname]=useState("roses are most beautiful flower in the world ")
const[email,setemail]=useState("sangeetha87@gamil.com")


const handleemailchange=()=>{
    setemail("keytha87@gamil.com")
}
 
const handlenamechange=()=>{
    setname("ROSE is the symbol of LOVE")
 }
    return(
        <>
        
        <h1>welcome to ROSES world</h1>
        <h2>{name}</h2>
        
        <h2>{email}</h2>
        
        <button onClick={handlenamechange}>namechange</button>
        <button onClick={handleemailchange}>emailchange</button>
        <img src=" https://th.bing.com/th?id=OIP.rGm0lIy6F2tDFZGDsrV31gHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        </>
    )
}
export default Hello;