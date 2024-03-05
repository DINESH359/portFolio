import React from 'react';
import PieChart from './skill/PieChart';
import TechGraphs from './skill/TechGraphs';

const Skills = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 h-screen">
            {/* First quadrant */}
            <div className="col-span-1 row-span-1 bg-gray-200 p-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dapibus justo.</p>
            </div>
            {/* Second quadrant */}
            <div className="col-span-1 row-span-1 bg-gray-200 p-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dapibus justo.</p>
            </div>
            {/* Third quadrant */}
            <div className="col-span-1 row-span-1 bg-gray-200 p-4">
                <PieChart />
            </div>
            {/* Fourth quadrant */}
            <div className="col-span-1 row-span-1 bg-gray-200 p-4">
                <TechGraphs />
            </div>
        </div>
    );
};

export default Skills;
