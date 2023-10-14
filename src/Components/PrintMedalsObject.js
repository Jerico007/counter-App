import React, { useState }  from "react";

// function updateMedals(medals,setMedals , type)
// {
//     console.log(medals)
//   if(type === "gold")
//   {
//     medals.gold += 1;
//   }
//   if(type === "silver")
//   {
//     medals.silver  += 1;
//   }
//   if(type === "bronze")
//   {
//     medals.bronze +=1;
//   }
//  setMedals(medals);

// }
const PrintMedalsObject = ()=>{
  const [medals , setMedals] =  useState({gold:0,silver:0,bronze:0});

    return(
        <div className="PrintMedalsObject">
            <p>Gold : {medals.gold} Silver : {medals.silver} Bronze : {medals.bronze}</p>
            <button onClick={()=>(setMedals({...medals,gold:medals.gold+1}))}>Increase Gold</button>
            <button onClick={()=>(setMedals({...medals,silver:medals.silver+1}))}>Increase Silver</button>
            <button onClick={()=>(setMedals({...medals,bronze:medals.bronze+1}))}>Increase Bronze</button>
        </div>
    )
}


export default PrintMedalsObject;