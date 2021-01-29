import React, { useState } from "react";
import Weather from "./Weather";
import moment from "moment";
import { Fade } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

function Analog (props) {
   
    //Clock and Greeting settings
    let currentTime = new Date();
    const [time, setTime] = useState(moment().format("HH : mm"));
    let greeting = "";
    
    setInterval( function tick() {
        setTime(moment().format("HH : mm"));
       }, 1000 );  

       if (currentTime.getHours() < 12) {
           greeting = "Good morning, Human.";
       } else if (currentTime.getHours() < 18) {
        greeting = "Good afternoon, Human.";
       } else {
        greeting = "Good evening, Human.";
       }
    //END Clock & Greeting

    

   
    return ( //Fade in and out with Button Click
        <div className="analog">
        <Zoom in={true} timeout={{enter: 1500, exit: 500}} unmountOnExit={true}>
            {props.var ? 
               <Fade in={true} timeout={{enter: 1700, exit: 500}}>
                <div>
                    <h1>{time}</h1>
                    <p>{greeting}</p>
                </div> 
               </Fade> : 
                <div className="weather">
                 <Fade in={true} timeout={{enter: 1500, exit: 500}}>
                     <Weather/>
                 </Fade>
                </div>
               }
        </Zoom>
        </div>
    );
}

export default Analog;