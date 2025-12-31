import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother' 

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother)

const App = () => {

  useGSAP(()=>{
    ScrollSmoother.create({
      wrapper:'#wrapper',
      content:'#content',
      smooth:1.2,
      effects:true
    })

    gsap.to("#page2 h1",{
      transform:"translateX(-58%)",
      duration:2,
      scrollTrigger:{
        trigger:"#page2",
        scroller:"#wrapper",
        start:"top 0%",
        end:"top -78%",
        scrub:2,
        pin:true
      }
    })

    

  },[])

  return (
    <div id='wrapper' className=''>
      <div id='content' >
        <div id='page1' className='h-screen bg-black'></div>
        <div id='page2' className='h-screen bg-blue-300 flex items-center pb-20'>
          <h1 className='text-[40vw] font-semibold uppercase leading-none'>Experience</h1>
        </div>
        <div id='page3' className='h-screen bg-black'></div>
      </div>

    </div>
  )
}

export default App