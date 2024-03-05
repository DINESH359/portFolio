import React from "react";
import './About.css';

function About() {
    return (
        <div className=" about-container w-50%" > 
         <div className="h-screen">
            <h1 className="text-4xl text-center underline underline-offset-3px font-mono font-extrabold text-pretty text-black">ABOUT ME</h1>

            <p className="mt-8 text-lg text-center font-serif font-medium text-gray-800">
                Welcome to my portfolio! I'm Dinesh, a versatile full-stack developer specializing in the MERN stack - MongoDB, Express, React, and Node.js. With proficiency in both frontend and backend development, I excel at crafting seamless user experiences while ensuring robust server-side functionality.
            </p>

            <p className="mt-4 text-lg text-center font-serif font-medium text-gray-800">
                In addition to my development work, I'm passionate about sharing insights and knowledge with the developer community. You can find me actively engaging on platforms like LinkedIn and Instagram, where I share valuable content related to web development and programming.
            </p>

            <p className="mt-4 text-lg text-center font-serif font-medium text-gray-800">
                I'm always on the lookout for new opportunities that allow me to leverage my skills and expertise to contribute, learn, and grow. If you have a position that aligns with my capabilities, feel free to reach out.
            </p>

            <p className="mt-4 text-lg text-center font-serif font-medium text-gray-800">
                Let's connect and explore how we can collaborate to bring your ideas to life!
            </p>
        </div>

        <div>

        </div>

        </div>
       
    );
}

export default About;
