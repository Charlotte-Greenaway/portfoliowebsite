"use client"
import { useEffect, useState, useRef } from "react";
export default function TopButton() {
    const [isVisible,setIsvisible]=useState(false);

    const topValue = () =>{
        if(window.scrollY>10){
            setIsvisible(true)
        }else{
            setIsvisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    useEffect(()=>{
        document.addEventListener("scroll",topValue)
    },[])
  return (
    <>
      <div onClick={scrollToTop} className={`hover-container ${isVisible?"fixed":"hidden"} flex items-center justify-center bottom-1 right-1 rounded-full bg-slate-300/60 hover:bg-slate-400/70 transition-all w-12 h-12 cursor-pointer`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
        //   fill="#000000"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 511.735 511.735"
          className="svg-fill w-4 h-4"
        >
          <g>
            <g>
              <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04    c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213    C512.734,381.753,512.734,375.247,508.788,371.087z" />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
