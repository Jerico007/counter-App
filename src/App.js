import React from "react";

import "./index.css";
import StateBasics from "./Components/StateBasics";

import IncreamentDecreament from "./Components/IncreamentDecreament";


import PrintMessage from "./Components/PrintMessage";

import PrintMedalsObject from "./Components/PrintMedalsObject";


const App = ()=>{
    return (
        <div className="App">
           {/* <StateBasics/> */}
           {/* <IncreamentDecreament/> */}
           {/* <PrintMessage/> */}
           <PrintMedalsObject/>
        </div>
    );
}


export default App;