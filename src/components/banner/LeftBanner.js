import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Full Stack Developer.", "UI Designer.","Problem solver."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className=" text-designColor capitalize">NISHMITHA S</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor=""
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a web developer who uses animation to add depth and enhance user experiences. My focus is on creating seamless, intuitive interactions 
        that simplify complex processes.By combining technical skills with a design-driven approach, I bring digital projects to life in a visually engaging
         and functional way.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner