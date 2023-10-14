import React ,{useState} from "react";


let a = 0;

function updateA(){
    a = a + 1;
}

const StateBasics = ()=>{
  
    //Create a use state variable for updateing num
    let [num , setNum] = useState(0);
    
    return (
        <div className="stateBasics">
            <p className="display1">Display1 : {num}</p>
            <p className="display2">Display2 : {a}</p>

            <button type="button" onClick={()=>(setNum(num+1))} >click Me 1</button>
            <button type="button" onClick={updateA} >click Me 2</button>
        </div>
    )
}

export default StateBasics