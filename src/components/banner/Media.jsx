import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub, FaJava, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiPhp, SiJavascript, SiDjango } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          {/* <div className="flex gap-4">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            </a>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            
            <span className="bannerIcon">
            
              <FaLinkedinIn />
            </span>
            
          </div> */}
        <div className="flex gap-4">
          
        <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/nishmitha-s123/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            </a>

            </div>
            <div className="flex gap-4">
            <a href="https://github.com/Nishukvgce" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
            </a>

            </div>
            <div className="flex gap-4">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            </a>

            </div>

            </div>


        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
          

            <span className="bannerIcon">
              <FaReact />
            </span>
            
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiPhp />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media