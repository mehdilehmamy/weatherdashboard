import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import LoopIcon from '@material-ui/icons/Loop';
import Zoom from '@material-ui/core/Zoom';
import Analog from "./Analog";
import Quote from "./Quote";



function App() {

  const [click, setClick] = useState(true); //Track button click for Fade effect

  function clicked () { //Check if button is clicked for "Toggle"
    if (click === false) {
      setClick(true);
    } else {
      setClick(false);
    }
}

 

  return ( 
    <div className="App"> 
        <Zoom in={true} timeout={{enter: 1500, exit: 500}}>
        <Fab className="icon" onClick={clicked} size="small"><LoopIcon fontSize="small"/></Fab>
        </Zoom>
        <Analog var={click}/>
        <Quote/>
    </div>
  );
}

export default App;
