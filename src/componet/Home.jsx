import React from 'react'
import pic from "../../public/AI.webp"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div  name="Home" 
    className= "max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
        <span className="tex-xl">Welcome In My Feed</span>
        <div className="flex text-2xl md:text-4xl"> 
        
        <h1>Hell, I'm a </h1>
        {/*<span className="text-red-500 font-bold">Developer</span>*/}
        <ReactTyped
        className="text-red-500 font-bold"
          strings={["Developer", "Programer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className="text-sm md:textgt-md text-justify">As a web developer, I’m passionate about crafting intuitive and engaging digital experiences. I specialize in both front-end and back-end development, allowing me to create seamless interfaces and robust functionalities. I thrive on problem-solving, constantly learning new technologies and best practices to stay ahead in this fast-paced field.
        I enjoy collaborating with designers and clients to bring their visions to life, ensuring every website is not only visually appealing but also user-friendly and efficient. My toolkit includes HTML, CSS, JavaScript, and various frameworks and libraries, all aimed at delivering high-quality, responsive applications.
        Beyond coding, I value clean, maintainable code and strive to implement best practices in every project. I’m excited by the challenges of web development and committed to continuous improvement, always looking for ways to enhance user experience and optimize performance. Whether I'm debugging code or brainstorming innovative features, I approach every task with curiosity and enthusiasm.
        </p>
        <br />
        {/* Social Media */}
        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="space-y-2">
            <h1 className="font-bold  ">Available on</h1>
            <ul className="flex space-x-5 ">
                <a href="https://www.facebook.com/login.php/ " target="blank"><li> <FaFacebook  className="text-2xl cursor-pointer"/></li></a>
               <a href="https://www.linkedin.com/login" target="blank"> <li><FaLinkedin  className="text-2xl cursor-pointer" /></li></a>
                <a href="https://www.youtube.com/" target="balnk"><li><FaYoutube className="text-2xl cursor-pointer" /></li></a>
                <a href="https://web.whatsapp.com/" target="balnk"><li><FaWhatsapp  className="text-2xl cursor-pointer" /></li></a>
            </ul>
           </div>
           <div className="space-y-2">
           <h1 className="font-bold ">Currently working on </h1>
            <div className="flex space-x-5 ">
            <DiMongodb  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px" />
            <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px" />
            <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px" />
            <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px" />
                
            </div>

           </div>

        </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20  mt-1 order-1" >
        <img src={pic}  className ="rounded-full md:w-[450px] md:h-[450px] " alt="" />

        </div>
        </div>
    </div>

    <hr />

    </>
    
  )
}

export default Home
