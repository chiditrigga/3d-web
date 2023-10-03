import { useState } from 'react';

import {motion} from 'framer-motion'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


import './index.css'


function App() {
  const [animate,setAnimate] = useState(false)
  const [loca,setLoca] = useState(0)
  const [locay,setLocay] = useState("60vh")
  const [pickColor,setPickColor] = useState("#F44336")
 

  const [bg,setBg] = useState("grey")

  return (
    <div style={{background:bg}} className='vh-100 vw-100'>

<div className='btn '>


<button onMouseLeave={()=> {setAnimate(!animate) 
      setLocay("60vh")
     setPickColor("red")
     setLoca(0) 
    
    }
   } onMouseEnter={ ()=> {setAnimate(!animate) 
     setLocay("5vh")
     setPickColor("black")
     setLoca("15vw") 
     
     
  }} onClick={ ()=> setBg("black")}>set background color</button> 
  
  <button  onMouseLeave={ ()=> {setAnimate(!animate) 
   setLocay("60vh") 
   setLoca(0) 
   setPickColor("red")
 
} } onMouseEnter={ ()=> {setAnimate(!animate) 
     setLocay("5vh")
     setLoca("47vw")
     setPickColor("#FFFF00")
    

  }} onClick={ ()=> setBg("#FFFF00")}>set background color</button>
  
  <button onMouseLeave={()=> {setAnimate(!animate) 
      setLocay("60vh")
     setPickColor("red")
     setLoca(0) 
     
    }
   } onMouseEnter={ ()=> {setAnimate(!animate) 
     setLocay("5vh")
     setPickColor("#2196F3")
     setLoca("82vw") 
    
     
  }}   onClick={ ()=> setBg("#2196F3")}>set background color</button>
   
   </div>

  
   <motion.div className='box1' animate={{
    x: animate? loca:0,
    opacity:animate?1:0.5,
    rotate:animate?360: 0,
    y: animate? locay: "60vh",background: animate? pickColor:"red",scale: animate? 2:1
   }} initial={{
    opacity:0.1,x: "0px",background:  "red"
   }}  transition={{
   type:"spring",
   stiffness:70
   }} >
        
   </motion.div>
   
     
    
    </div>
  );
}

export default App;
