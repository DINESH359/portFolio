import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectSection = ({ project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-wrap items-start">
      {/* Column 1: Carousel */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        {/* Carousel code */}
        <Slider {...settings}>
          <div>
            <img src="/src/assets/mongo.png" alt="Project Image 1" />
          </div>
          <div>
            <img src="/src/assets/node.png" alt="Project Image 2" />
          </div>
          <div>
            <img src="/src/assets/express.png" alt="Project Image 3" />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>

      {/* Column 2: Description and buttons */}
      <div className="w-full md:w-1/2 md:ml-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="mb-4">{project.overview}</p>
          <p className="mb-4">Technologies Used: {project.techStack}</p>
          <div className="flex space-x-4">
            <a href={project.githubUrl} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              GitHub
            </a>
            <a href={project.websiteUrl} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Project Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
