import React from "react";
import './About.css';
import Desc from './Desc';
import Panel from "./Panel";
import Qualifications from "./Qualfications";
import EarlyYears from "./EarlyYears";
import WorkHistory from './WorkHistory';

function About() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between p-6 pt-16">
                <Panel className="w-1/2"></Panel>
                <Desc className="w-1/2"></Desc>
            </div>
            <div>
                <Qualifications></Qualifications>
            </div>
            <div>
                <EarlyYears></EarlyYears>

            </div>
            <div>
            <WorkHistory></WorkHistory>
            </div>
        </div>
    );
}

export default About;
