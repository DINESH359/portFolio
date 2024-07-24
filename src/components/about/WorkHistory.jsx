import React from 'react';
import './About.css';

function WorkHistory() {
    return (
        <div id='work-history' className="section bg-gray-100 py-12 px-6">
            <h2 className="section-title text-3xl font-bold mb-6 text-gray-800">Work History</h2>
            <div className="work-history-content">
                <div className="work-item mb-8">
                    <h3 className="work-title text-xl font-semibold mb-2 text-gray-900">Software Engineer</h3>
                    <p className="work-company text-lg text-gray-700 mb-2">ABC Technologies</p>
                    <p className="work-duration text-gray-600">2019 - Present</p>
                    <p className="work-description text-lg text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mollis nisi. 
                        Vestibulum vehicula vestibulum tellus, at maximus nisi tempor vel. 
                        Nullam interdum tincidunt metus, at vestibulum nisi commodo a.
                    </p>
                </div>
                <div className="work-item mb-8">
                    <h3 className="work-title text-xl font-semibold mb-2 text-gray-900">Frontend Developer</h3>
                    <p className="work-company text-lg text-gray-700 mb-2">XYZ Corporation</p>
                    <p className="work-duration text-gray-600">2017 - 2019</p>
                    <p className="work-description text-lg text-gray-700">
                        Integer nec velit nec velit congue feugiat. Donec vel tortor vel risus elementum accumsan. 
                        Ut quis tempor risus. Aliquam ullamcorper, ipsum ut scelerisque interdum, lorem ligula vehicula felis, 
                        vitae convallis eros risus et quam.
                    </p>
                </div>
                {/* Add more work history items as needed */}
            </div>
        </div>
    );
}

export default WorkHistory;
