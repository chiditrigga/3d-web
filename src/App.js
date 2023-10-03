import { useState } from 'react';
import './index.css'
import {motion} from 'framer-motion'


function App() {
  const [animate,setAnimate] = useState(false)
  const [loca,setLoca] = useState(0)
  const [locay,setLocay] = useState("60vh")
  const [pickColor,setPickColor] = useState("red")
  return (
    <>

<div className='btn'>


<button onMouseLeave={()=> {setAnimate(!animate) 
      setLocay("60vh")
     setPickColor("red")
     setLoca(0) 
    }
   } onMouseEnter={ ()=> {setAnimate(!animate) 
     setLocay("5vh")
     setPickColor("black")
     setLoca("15vw") 
     
  }}>see color black</button> 
  
  <button  onMouseLeave={ ()=> {setAnimate(!animate) 
   setLocay("60vh") 
   setLoca(0) 
   setPickColor("red")
} } onMouseEnter={ ()=> {setAnimate(!animate) 
     setLocay("5vh")
     setLoca("47vw")
     setPickColor("yellow")

  }}>see color yellow</button>
  
  <button onMouseLeave={()=> {setAnimate(!animate) 
      setLocay("60vh")
     setPickColor("red")
     setLoca(0) 
    }
   } onMouseEnter={ ()=> {setAnimate(!animate) 
     setLocay("5vh")
     setPickColor("blue")
     setLoca("82vw") 
     
  }}>see color blue</button>
   
   </div>
   <motion.div className='box1' animate={{
    x: animate? loca:0,
    opacity:animate?1:0.5,
    rotate:animate?360: 0,
    y: animate? locay: "60vh",background: pickColor
   }} initial={{
    opacity:0.1,x: "0px",background:"red"
   }}  transition={{
   type:"spring",
   stiffness:200
   }} >

   </motion.div>
   
     
    
    </>
  );
}

export default App;
