import React, { useEffect } from "react";
import './About.css';

function Desc() {
    useEffect(() => {
        const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        };

        const handleScroll = (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            scrollToSection(targetId);
        };

        const links = document.querySelectorAll('.scroll-link');
        links.forEach(link => {
            link.addEventListener('click', handleScroll);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleScroll);
            });
        };
    }, []);

    return (
        <div className="flex flex-col">
            <div className="mt-16">
                <h1 className="text-4xl text-center font-mono font-extrabold text-pretty text-black">Welcome !</h1>
                <p className="text-lg text-center font-serif font-medium text-gray-800">
                    I'm Dinesh, a full-stack developer focusing on the MERN stack. Skilled in crafting seamless user experiences and robust server-side functionality, I also enjoy sharing insights on web development. Let's connect and bring ideas to life!
                </p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Know More About Me</h2>
                <div className="flex justify-between p-4 border-x-8 border-purple-400">
                    <div className="a-div rounded-s-full flex justify-center items-center h-20 w-40 text-center text-black text-xl hover:bg-red-500 hover:text-white">
                        <a href="#qualifications" className="scroll-link text-center font-bold text-black">Qualifications</a>
                    </div>
                    <div className="b-div flex rounded-full justify-center items-center h-20 w-40 text-center text-black text-xl hover:bg-red-500 hover:text-white">
                        <a href="#early-life" className="scroll-link text-center font-bold text-black">Early Years</a>
                    </div>
                    <div className="c-div flex rounded-e-full justify-center items-center h-20 w-40 text-center text-black text-xl hover:bg-red-500 hover:text-white">
                        <a href="#work-history" className="scroll-link text-center font-bold text-black">Work History</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desc;
