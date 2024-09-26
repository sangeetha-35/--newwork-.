import { useState } from "react";


function RenderingList(){
    
  const [namelist,setnamelist]= useState( [ {id:1,name:"REDROSE"},
        {id:2,name:"WHITE ROSE"},
        {id:3,name:"SPINK ROSE"},
        {id:4,name:"LOTUS"},
        {id:5,name:"LILLY"},
        {id:6,name:"JASMINE"},

    ] );


    return(
        <>
        <div>
            <h1> FLOWER LIST</h1>
            {namelist.map((li,i)=>(
            
                <div>
                    <h1>
                        {i+1}.{li.name}
                    </h1>
               </div>

                ))}
            
            </div>
        </>
    );
}export default  RenderingList;