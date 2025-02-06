import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Задаём начальное состояние: логотип сразу отображается с scale: 6
    gsap.set(".logo", { scale: 6,  y: "45vh",});

    gsap.to(".logo", {
      scrollTrigger: {
        trigger: ".content",  
        start: "top bottom",  
        end: "top center", 
        scrub: true,               
      },
      scale: 1,             
      ease: "none",  
        y: "10",    
        end: "top center",   
    });
  }, []);

  return (
    <>
      <div className="logo-container">
        <h1 className="logo">Integral Vision</h1>
      </div>
      <div className="container" />
      <div className="content">
        <p>Прокрутите вниз и вверх, чтобы увидеть анимацию</p>
      </div>    
    </>
  );
}
