import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const App = () => {
  

  useGSAP(()=>{
    var string = document.querySelector('#string') ;
    string.addEventListener("mousemove",function(dets){
      const path =`M 10 100 Q 500 ${dets.y<250 ? dets.y: '250'} 980 100`

      gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:'power3.out'
      })
    });


    string.addEventListener("mouseleave",function(dets){
      const path =`M 10 100 Q 500 100 980 100`

      gsap.to("svg path",{
        attr:{d:path},
        duration:0.8,
        ease:"elastic.out(1,0.2)"
      })
    })
    

  },[])

  return (
    <div>
      <div
        id="string"
        className="bg-black w-screen h-[40vh]"
      >
        <svg viewBox="0 0 1000 200" className="w-full h-[200px]" preserveAspectRatio="none">
          <path d="M 10 100 Q 500 100 980 100" fill="transparent" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="w-full h-[60vh] bg-black">

      </div>
    </div>
  );
};

export default App;
