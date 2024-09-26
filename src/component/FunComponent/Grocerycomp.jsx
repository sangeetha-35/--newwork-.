import React, { useEffect, useState } from "react";


function Grocerycomp(){

    const [grocerydata,setgrocerydata]=useState([])
    

    //http://localhost:3000/todoList
    const handlefetch=async()=>{
        let res = await fetch("http://localhost:3000/todoList")
        let data=await res.json()
        setgrocerydata(data)
    }

    useEffect(()=>{
        handlefetch()
    },[])

    return(
        <>
        <h1>GroceryList</h1>
        <input placeholder="Enter the values"></input>
        <button className="ms-4">sumbit</button>
        <ol>
        {grocerydata.map((da)=>(
        <div>
        <li> {da.task}</li>
        </div>
    

        ))}
        </ol>

        </>
    )
}export default Grocerycomp