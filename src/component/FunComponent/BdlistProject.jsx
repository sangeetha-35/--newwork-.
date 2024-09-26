import React,{useState} from "react";
import "./bdlist.css"
function BdlistProject(){


const [bdlist,setbdlist]= useState(
    [
        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
      ]
      
)

    return(
        <div>
            <div className="bgclr">
            <h1 className="head">{bdlist.length}BirthDayList</h1>
            {bdlist.map((bd)=>(
            <div>
              <img src={bd.image} className="image"/>
              <h1 className="h1">{bd.name}</h1>
              <h3 className="h3">{bd.age}</h3>
              
 
             </div>
            ))}



            </div>
        </div>
    )
}export default BdlistProject