import React from 'react';
import '../contact/ResumeDownload.css';

const ResumeDownload = () => {
  return (
    <div className="w-96 h-32 shadow-md rounded-lg px-8 py-6 mr-4 mt-0 flex justify-center items-center relative" style={{ backgroundColor: '#0d0103' }}>
      <div className="absolute inset-0 rounded-lg border-gradient"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Download Resume</h1>
        <div className="flex justify-center">
          <a
            href="src/assets/Resume_Dinesh_Kumar_Jha.pdf" // Replace with the actual path to your resume file
            download="Dinesh's_Resume.pdf" // Replace with your desired file name
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;
