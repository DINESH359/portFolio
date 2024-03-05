import React from 'react';
import './Main.css';


const Main = () => {
    return (
        <div id="main" className="home-hero__content flex flex-col items-center justify-center h-screen">
            <h1 className="heading-primary">Hey, I'm Dinesh Kumar Jha</h1>
            <div className="home-hero__info">
                <p className="text-primary">
                    A Result-Oriented Full Stack Developer building and managing Websites and
                    Web Applications that lead to the success of the overall product
                </p>
            </div>
            <div className="home-hero__cta mt-8">
                <a href="#projects" className="button">Projects</a>
            </div>
            
        </div>
    );
};

export default Main;
