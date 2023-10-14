import React , {useState} from "react";


const PrintMessage = ()=>{
   
    //Use state for storing input
    const [message , setMessage] =  useState("");

    //use state for showing output
    const [showMessage , setShow] = useState("");
    return (<div className="PrintMessage">
        <input type="text" onInput={(e)=>(setMessage(e.target.value))}></input>
        <p>{showMessage}</p>
        <button onClick={()=>(setShow(message))}>Show Message</button>
    </div>)
}

export default PrintMessage