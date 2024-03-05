import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import profilePic from '../../assets/main__.jpg'; // Import your profile picture here
import { Link } from "react-router-dom";

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const expandedRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (expandedRef.current && !expandedRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="text-black font-mono font-bold font-md  w-full rounded-lg mt-0.5 flex justify-between items-center fixed top-0 z-10 h-14">
            {/* Logo and other content on the left */}
            <div className="ml-10 flex items-center space-x-8">
                <div className="profile-pic" onClick={toggleExpand} ref={expandedRef}>
                    <img src={profilePic} alt="Profile" className="rounded-full w-10 h-10 cursor-pointer" />
                </div>
                {expanded && (
                    <div className="fixed top-16 right-30 bg-white p-4 rounded-md shadow-md" ref={expandedRef}>
                        <img src={profilePic} alt="Profile" className="w-80 h-80" />
                    </div>
                )}
                <h1>DINESH KUMAR JHA</h1>
                <div>
                    <i className="fa-brands fa-youtube"></i>
                </div>
    
            </div>

            {/* Navbar links on the right */}
            <div className='nav_div mr-10 flex items-center space-x-8'>
                
                <Link to="/home" className="hover:text-blue-300" onClick={() => scrollToSection('main')}>HOME</Link>
                <Link to="/about" className='hover:text-blue-300' onClick={() => scrollToSection('about')}>ABOUT ME</Link>
                <Link to="/projects" className="hover:text-blue-300" onClick={() => scrollToSection('projects')}>PROJECTS</Link>
                <Link to="/skills" className="hover:text-blue-300" onClick={() => scrollToSection('skills')}>SKILLS</Link>
                <Link to="/experience" className="hover:text-blue-300" onClick={() => scrollToSection('experience')}>EXPERIENCE</Link>
                <Link to="/contact" className="hover:text-blue-300" onClick={() => scrollToSection('contact')}>CONTACT</Link>
            </div>
        </nav>
    );
};

export default Navbar;
