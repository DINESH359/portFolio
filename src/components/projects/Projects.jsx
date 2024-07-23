import React, { useState, useEffect } from "react";
import './Project.css';
import portfolio_image_1 from '../../assets/projects/main.png';
import portfolio_image_2 from '../../assets/projects/skills.png';
import portfolio_video1 from "../../assets/projects/portfolio.mp4";

import Markdown_vid1 from "../../assets/projects/markdown.mp4";
import Markdown_img1 from "../../assets/projects/markdown.png";
import Markdown_vid2 from "../../assets/projects/markdown2.mp4";

import food_code from "../../assets/projects/Food_code.mp4";
import food_ui from "../../assets/projects/Food_ui.mp4"
import food_img from "../../assets/projects/Food_img.png"

function Projects() {
  const projects = [
    {
      title: "ZOMATO - TOMATO",
      overview: "ZOMATO - TOMATO is a user-friendly food order app where users can browse menus, add items to their cart, and manage their selections. Secure payments are handled through Stripe, ensuring a smooth checkout experience.",
      techStack: "React, Node.js, Express, stripe",
      githubUrl: "https://github.com/example2",
      media: [
        { type: 'video', src: food_ui },
        { type: 'image', src: food_code },
        { type: 'video', src: food_img },
      ],
    },
    {
      title: "HTML to Markdown Converter",
      overview: "This project is an HTML to Markdown converter that transforms HTML content into clean, readable Markdown format. It supports common HTML elements like headings, paragraphs, lists, links, and images, converting them into their Markdown equivalents. The tool aims to simplify content migration and make editing and managing content in Markdown easier.",
      techStack: "React, Node.js, Express, MongoDB",
      githubUrl: "https://github.com/DINESH359/NeoKred_Assignment",
      media: [
        { type: 'video', src: Markdown_vid2 },
        { type: 'image', src: Markdown_img1 },
        { type: 'video', src: Markdown_vid1 },
      ],
    },
    {
      title: "Portfolio",
      overview: "Built with React, Tailwind CSS, and Chart.js, this interactive data dashboard offers dynamic data visualization through various charts. It features real-time data fetching, user authentication, and a responsive design. The project showcases proficiency in modern web development and data presentation techniques.",
      techStack: "React, Tailwind CSS, Chart.js",
      githubUrl: "https://github.com/DINESH359/portFolio",
      media: [
        { type: 'image', src: portfolio_image_1 },
        { type: 'video', src: portfolio_video1 },
        { type: 'image', src: portfolio_image_2 },
      ],
    },
    
  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const media = projects[activeProjectIndex].media[currentMediaIndex];
    let interval;

    if (media.type === 'image') {
      interval = setInterval(() => {
        setCurrentMediaIndex(prevIndex => (prevIndex + 1) % projects[activeProjectIndex].media.length);
      }, 3000);
    } else if (media.type === 'video') {
      setIsVideoPlaying(true);
      interval = setTimeout(() => {
        setIsVideoPlaying(false);
        setCurrentMediaIndex(prevIndex => (prevIndex + 1) % projects[activeProjectIndex].media.length);
      }, 15000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(interval);
    };
  }, [activeProjectIndex, currentMediaIndex, projects]);

  return (
    <div className="projects-container">
      <h1 className="text-3xl font-mono font-bold text-green-200">Featured Projects</h1>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className="project-card" onClick={() => setActiveProjectIndex(projectIndex)}>
          <div className="project-media-slider">
            {project.media[currentMediaIndex].type === 'image' ? (
              <img src={project.media[currentMediaIndex].src} alt={project.title} className="project-media" />
            ) : (
              <video
                src={project.media[currentMediaIndex].src}
                controls
                className="project-media"
                autoPlay
                muted
                loop={false}
                playsInline
                onEnded={() => setIsVideoPlaying(false)}
              />
            )}
          </div>
          <div className="project-details">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-overview">{project.overview}</p>
            <p className="project-techStack"><strong>Tech stack:</strong> {project.techStack}</p>
            <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
