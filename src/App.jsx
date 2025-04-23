import Lenis from 'lenis'
import React, { useEffect } from 'react'
import {useGSAP} from '@gsap/react'
import "./index.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'



const App = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    // Initialize Lenis
const lenis = new Lenis();

lenis.on('scroll', (e) => {
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

  })


useGSAP(()=>{

  document.querySelectorAll(".aspect-square").forEach(elem=>{
    const img = elem.querySelector("img");
    const tl = gsap.timeline();
    const xTransform =gsap.utils.random(-100,100);

    tl.set(img,{
        transformOrigin : `${xTransform < 0 ? 0 : "100%"}`,
    },"start")
    .to(img,{
        scale:0,
        ease:"none",
        scrollTrigger : {
            trigger : img,
            start:"top top",
            stop :"bottom top",
            scrub: true,
        }
    },"start")
    .to(img,{
        xPercent :xTransform,
        ease:"Power4.easeInOut",
        scrollTrigger : {
            trigger : img,
            start:"top bottom",
            stop :"bottom top",
            scrub: true,
        }
    },"start")
})

})

  return (
    <div className='w-full h-full'>
        <div className="wrapper w-full bg-zinc-900">
          <div className="grid grid-cols-8 grid-rows-20 gap-4 p-8 overflow-hidden">
            <div className="aspect-square" style={{gridRow: 1, gridColumn: 3}}>
              <img src="https://plus.unsplash.com/premium_photo-1706429469485-6bc2ad16d7fb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 1, gridColumn: 7}}>
              <img src="https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 2, gridColumn: 2}}>
              <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 2, gridColumn: 5}}>
              <img src="https://images.unsplash.com/photo-1566343965810-d52d7987c8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 3, gridColumn: 1}}>
              <img src="https://images.unsplash.com/photo-1732562534798-9d7198f459d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 3, gridColumn: 8}}>
              <img src="https://images.unsplash.com/photo-1611703321166-c7fdda00e5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 4, gridColumn: 4}}>
              <img src="https://images.unsplash.com/photo-1633549446051-82a0599e9e02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 4, gridColumn: 6}}>
              <img src="https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 5, gridColumn: 2}}>
              <img src="https://images.unsplash.com/photo-1614426007375-904fd4934df9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 5, gridColumn: 7}}>
              <img src="https://images.unsplash.com/photo-1635902549184-cf89a051e463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 6, gridColumn: 3}}>
              <img src="https://plus.unsplash.com/premium_photo-1741374962858-4c9422bdb0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 6, gridColumn: 8}}>
              <img src="https://images.unsplash.com/photo-1731501697687-b32beca69067?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 7, gridColumn: 1}}>
              <img src="https://images.unsplash.com/photo-1717196214699-6bb84568ad5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 7, gridColumn: 5}}>
              <img src="https://images.unsplash.com/photo-1656760599918-c8916fc5811c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 8, gridColumn: 4}}>
              <img src="https://images.unsplash.com/photo-1634595478068-17f36549dd5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 8, gridColumn: 6}}>
              <img src="https://images.unsplash.com/photo-1613224630301-cf82ccee18b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 9, gridColumn: 2}}>
              <img src="https://images.unsplash.com/photo-1645075421949-bb58338b44f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 9, gridColumn: 7}}>
              <img src="https://images.unsplash.com/photo-1635229873829-2a279025ace4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 10, gridColumn: 3}}>
              <img src="https://images.unsplash.com/photo-1701351382146-035bd68cdb6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZhY2UlMjBwaWNzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square" style={{gridRow: 10, gridColumn: 8}}>
              <img src="https://images.unsplash.com/photo-1601522089844-8ac5e2ae6773?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div className="fixed inset-0 flex flex-col items-center justify-center">
            <h1 className="text-7xl text-white font-bold mb-4" style={{fontFamily: "Helvetica Now Display"}}>
              THOMAS VANCE
              <sup>®</sup>
            </h1>
            <h2 className="text-2xl text-white capitalize">二兎を追う者は一兎をも得ず</h2>
          </div>
          <div className="w-full h-screen bg-[#D1D1D1] py-20 relative z-[999] flex justify-center items-center">
            <p className="w-3/4 text-center text-black text-3xl leading-[2.5rem] font-regular">
              THOMAS VANCE is a contemporary fashion brand that blends minimalist aesthetics with avant-garde design. Founded on the principles of quality craftsmanship and innovative styling, our collections embody the perfect balance between luxury and street culture. Each piece is thoughtfully created to reflect modern sophistication while maintaining practical wearability for the discerning individual.®
            </p>
          </div>
        </div>
    </div>
  )
}

export default App
