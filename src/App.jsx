import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);



const navlinks =[
  {id:1,title:'Home',link:'/'},
  {id:2,title:'About',link:'/about'},
  {id:3,title:'Service',link:'/service'},
  {id:4,title:'Blogs',link:'/blogs'},
]

const App = () => {

  useGSAP(()=>{

    const tl = gsap.timeline();

    tl.from('#logo',{
      y:10,
      duration:1,
      opacity:0,
      delay:0.2
    })
    tl.from('#links',{
      y:10,
      duration:0.5,
      opacity:0,
      stagger:0.5
    })

    gsap.from('#button',{
      duration:1.2,
      opacity:0,
    })

    gsap.from("#box1",{
      scale:0,
      delay:0.3,
      duration:2,
      rotate:360,
    })



      gsap.from('#dialog1',{
        opacity:0,
        x:20,
        duration:1.2,
        scrollTrigger:{
          trigger:'#page2 #dialog1',
          start:'top center'
        }
      })
      gsap.from('#dialog2',{
        opacity:0,
        x:20,
        duration:1.2,
        delay:.5,
        scrollTrigger:{
          trigger:'#page2 #dialog1',
          start:'top center',
        }
      })
      gsap.from('#dialog3',{
        opacity:0,
        x:20,
        duration:1.2,
        delay:1,
        scrollTrigger:{
          trigger:'#page2 #dialog1',
          start:'top center'
        }
      })

  },[])

  return (
    <div className='h-screen'>
      <header className='h-[10vh] bg-blue-300 flex items-center justify-between px-10'>
        <h1 id='logo' className='text-2xl font-semibold'>Arun</h1>
        <ul className='flex justify-center items-center gap-5 font-semibold'>
          {navlinks.map((item,index)=>(
            <li id='links' key={index}>{item.title}</li>
          ))}
          
        </ul>
        <button id='button' className='bg-black/80 text-white rounded-md px-5 py-2'>Contact</button>
      </header>
      <main className='h-[100vh] bg-green-400 flex items-center justify-center'>
        <div id='box1' className='w-40 h-40 bg-red-500'></div>
      </main>
      <main id='page2' className='h-[100vh] bg-purple-300 flex flex-col items-center justify-center'>
        
        <h1 id='dialog1' className='text-3xl'>Hallo, Arun kumar..</h1>
        <h1 id='dialog2' className='text-3xl'>Hallo, Arun kumar..</h1>
        <h1 id='dialog3' className='text-3xl'>Hallo, Arun kumar..</h1>
      </main>
      <footer className='h-[40vh] bg-blue-300'></footer>
    </div>
  )
}

export default App