import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='contacts'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >
        <a href='mailto:gargnaman016@gmail.com' target='_blank' className="items">
          <SiGmail className='icons'/>
        </a>
        <a href='https://www.instagram.com/garg.naman_02/' target='_blank' className="items">
          <FaInstagram className='icons'/>
        </a>
        <a href='https://www.linkedin.com/in/naman-garg02/' target='_blank' className="items">
          <FaLinkedinIn className='icons'/>
        </a>
        <a href='https://github.com/namangarg2002' target='_blank' className="items">
          <FaGithub className='icons'/>
        </a>
        <a href='https://leetcode.com/u/namangarg20021128/' target='_blank' className="items">
          <SiLeetcode className='icons'/>
        </a>
        <a href='https://www.hackerrank.com/profile/namangarg2002111' target='_blank' className="items">
          <FaHackerrank className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact