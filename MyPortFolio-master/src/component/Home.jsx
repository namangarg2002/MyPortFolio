import React from 'react'
import pdf from '../pdf/sg_resume.pdf'
import hero from './Data/hero.json'
import Typed from 'typed.js'
import { useEffect } from 'react'
import { useRef } from 'react'

const Home = () => {
  const typedRef = useRef(null);
  useEffect(()=>{
    const options = {
      strings:["Welcome to my PortFolio","My name is Siddhant Gautam", "I am a Fullstack Developer", "I am DSA Enthusiast"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current, options)
    return () => {
      typed.destroy();
    }
  },[])
  return (
    <>
    <div className="container home" id='home'>
        <div className="left"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        >
            <h1 ref={typedRef}></h1>
            <p>Uses MERN Stack for web development and also have keen intrest in problem solving using C++.</p>
            <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>

        <div className="right">
            <div className="img"
            data-aos="fade-up-left"
            data-aos-duration="1000"
            >
                <img src={`/assets/${hero.imgSrc}`} alt="hero" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home