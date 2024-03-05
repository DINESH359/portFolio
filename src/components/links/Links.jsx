import React from 'react';

import './Links.css'

function Links() {
    // Define an array of objects, each containing the icon name, link, and full name
    const socialLinks = [
        { name: 'GitHub', icon: 'fa-github', link: 'https://github.com/DINESH359' },
        { name: 'LinkedIn', icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/dinesh-jha-a9493816b/' },
        { name: 'Instagram', icon: 'fa-instagram', link: 'https://www.instagram.com/dineshjha12345?igsh=amhvYjNveG1lZ3Nw' },
        { name: 'Gmail', icon: 'fa-solid fa-square-envelope', link: 'mailto:imdineshjha@gmail.com' }
    ];

    // Function to open the provided link in a new tab
    const openLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="main-link relative flex flex-col  w-10 rounded-md border mt-12 ">
            {socialLinks.map((link, index) => (
                <div id='link-child' key={index} className="cursor-pointer flex items-center space-x-1 py-0.5 border-2 rounded-lg border-orange-400">
                    <i 
                        className={`fab ${link.icon} text-3xl hover:text-blue-500`}
                        title={link.name}
                        onClick={() => openLink(link.link)}
                    ></i>
                    <p className="text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <span className="sr-only">{link.name}</span>
                        {link.name}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Links;
