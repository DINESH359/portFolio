import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

import ResumeDownload from '../contact/ResumeDownload';

const Main = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/projects');
    };

    return (
        <div id="main" className="home-hero__content flex flex-col items-center justify-center h-screen">
            <h1 className="heading-primary">Hey, I'm Dinesh Kumar Jha</h1>
            <div className="home-hero__info text-center">
                <p className="text-primary">
                    A Result-Oriented Full Stack Developer building and managing Websites and
                    Web Applications that lead to the success of the overall product.
                </p>
                <div className="flex justify-center mt-6">
                    <ResumeDownload />
                </div>
            </div>
            <div className="home-hero__cta mt-8">
                <button onClick={handleNavigate} className="button">Projects</button>
            </div>
        </div>
    );
};

export default Main;
