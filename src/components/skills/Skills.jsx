import React from 'react';
import PieChart from './skill/PieChart';
import TechGraphs from './skill/TechGraphs';

const Skills = () => {
    return (
        <div className='h-screen pt-20'>
            <div>
            <h1 className="text-4xl text-center underline underline-offset-3px font-mono font-extrabold text-pretty text-black">SKILLS</h1>

            </div>
        <div className="grid grid-cols-2 ">     
           
            <div className="col-span-1 row-span-1 p-4">
                <PieChart />
            </div>
            {/* Fourth quadrant */}
            <div className="col-span-1 row-span-1 p-4">
                <TechGraphs />
            </div>
        </div>
        </div>
        
    );
};

export default Skills;
