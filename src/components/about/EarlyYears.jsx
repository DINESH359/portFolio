import React from 'react';
import './About.css';

function EarlyYears() {
    return (
        <div id='early-life' className="section bg-gray-100 py-8 px-4 md:py-12 md:px-6">
            <h2 className="section-title text-3xl font-bold mb-6 text-gray-800">Early Years</h2>
            <div className="early-years-content">
                <p className="text-lg text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mollis nisi. 
                    Vestibulum vehicula vestibulum tellus, at maximus nisi tempor vel. 
                    Nullam interdum tincidunt metus, at vestibulum nisi commodo a.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Integer nec velit nec velit congue feugiat. Donec vel tortor vel risus elementum accumsan. 
                    Ut quis tempor risus. Aliquam ullamcorper, ipsum ut scelerisque interdum, lorem ligula vehicula felis, 
                    vitae convallis eros risus et quam.
                </p>
                <p className="text-lg text-gray-700">
                    Duis auctor ex a turpis venenatis, sed ultrices nunc ultricies. 
                    Nulla ultricies metus ut erat scelerisque vulputate. 
                    Duis a metus a urna gravida molestie.
                </p>
            </div>
        </div>
    );
}

export default EarlyYears;
