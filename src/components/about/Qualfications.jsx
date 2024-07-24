import React from 'react';
import './About.css';

function Qualifications() {
    return (
        <div id='qualifications' className="section bg-gray-100 py-12 px-6">
            <h2 className="section-title text-3xl text-center font-bold mb-6 text-gray-800">Qualifications</h2>
            <ul className="qualification-list">
                <li className="qualification-item border-b border-gray-300 pb-6 mb-6">
                    <h3 className="qualification-title text-xl font-semibold mb-2 text-gray-900">Bachelor's Degree in Mechanical Engineering</h3>
                    <h3 className="qualification-title text-l font-semibold mb-2 text-purple-300">
    <a href='https://www.soa.ac.in/' target="_blank" rel="noopener noreferrer">
        Shiksha 'O' Anusandhan University : 2014 - 2018
    </a>
</h3>

                    <p className="qualification-description text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mollis nisi. Vestibulum vehicula vestibulum tellus, at maximus nisi tempor vel. Nullam interdum tincidunt metus, at vestibulum nisi commodo a.</p>
                    <p className="qualification-duration text-gray-600">2014 - 2018</p>
                </li>
                <li className="qualification-item border-b border-gray-300 pb-6 mb-6">
                    <h3 className="qualification-title text-xl font-semibold mb-2 text-gray-900">Bachelor's Degree in Mechanical Engineering</h3>
                    <h3 className="qualification-title text-l font-semibold mb-2 text-purple-300">
    <a href='https://www.soa.ac.in/' target="_blank" rel="noopener noreferrer">
        Shiksha 'O' Anusandhan University : 2014 - 2018
    </a>
</h3>

                    <p className="qualification-description text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mollis nisi. Vestibulum vehicula vestibulum tellus, at maximus nisi tempor vel. Nullam interdum tincidunt metus, at vestibulum nisi commodo a.</p>
                    <p className="qualification-duration text-gray-600">2014 - 2018</p>
                </li>
                <li className="qualification-item border-b border-gray-300 pb-6 mb-6">
                    <h3 className="qualification-title text-xl font-semibold mb-2 text-gray-900">Higher Secondary in Science</h3>
                    <h3 className="qualification-title text-xl font-semibold mb-2 text-gray-900">Bachelor's Degree in Mechanical Engineering</h3>

                    <p className="qualification-description text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mollis nisi. Vestibulum vehicula vestibulum tellus, at maximus nisi tempor vel. Nullam interdum tincidunt metus, at vestibulum nisi commodo a.</p>
                    <p className="qualification-duration text-gray-600">2022 - Present</p>
                </li>
                {/* Add more qualifications as needed */}
            </ul>
        </div>
    );
}

export default Qualifications;
