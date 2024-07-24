import React from "react";
import './About.css';


function Panel() {
    return (
        <div className="rounded-2xl shadow-xl ">
            <img className="border-b-orange-100 rounded-3xl" src="src\assets\myImage.jpeg" alt="Display image" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }} />
        </div>
    );
}

export default Panel;
