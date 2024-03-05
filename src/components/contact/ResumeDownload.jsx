import React from 'react';

const ResumeDownload = () => {
  return (
    <div className="max-w-lg shadow-md rounded px-8 py-6 mr-4 mt-0" style={{ backgroundColor: '#b5838d' }}>
      <h1 className="text-3xl font-bold text-center mb-6">Download Resume</h1>
      <div className="flex justify-center">
        <a
          href="src\assets\Resume_Dinesh Kumar_Jha.pdf" // Replace with the actual path to your resume file
          download="Dinesh's_Resume.pdf" // Replace with your desired file name
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeDownload;
