import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TechGraphs = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const databaseRef = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    const frontendCtx = frontendRef.current.getContext('2d');
    const backendCtx = backendRef.current.getContext('2d');
    const databaseCtx = databaseRef.current.getContext('2d');
    const toolsCtx = toolsRef.current.getContext('2d');

    let frontendChart, backendChart, databaseChart, toolsChart;

    const frontendConfig = {
      type: 'bar',
      data: {
        labels: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Ajax'],
        datasets: [{
          label: 'Frontend Technologies',
          data: [30, 20, 15, 25, 10, 10, 15],
          backgroundColor: '#6366F1'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const backendConfig = {
      type: 'bar',
      data: {
        labels: ['Node.js', 'Express', 'RabbitMQ', 'Redis'],
        datasets: [{
          label: 'Backend Technologies',
          data: [40, 30, 15, 15],
          backgroundColor: '#10B981'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const databaseConfig = {
      type: 'bar',
      data: {
        labels: ['MongoDB', 'Oracle', 'MySQL', 'Firebase'],
        datasets: [{
          label: 'Databases',
          data: [35, 20, 25, 20],
          backgroundColor: '#FBBF24'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const toolsConfig = {
      type: 'bar',
      data: {
        labels: ['GitHub', 'Putty', 'SQL Developer', 'WinSCP', 'MongoDB Compass'],
        datasets: [{
          label: 'Tools',
          data: [30, 15, 25, 15, 15],
          backgroundColor: '#EF4444'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    if (frontendChart) frontendChart.destroy();
    if (backendChart) backendChart.destroy();
    if (databaseChart) databaseChart.destroy();
    if (toolsChart) toolsChart.destroy();

    frontendChart = new Chart(frontendCtx, frontendConfig);
    backendChart = new Chart(backendCtx, backendConfig);
    databaseChart = new Chart(databaseCtx, databaseConfig);
    toolsChart = new Chart(toolsCtx, toolsConfig);

    return () => {
      if (frontendChart) frontendChart.destroy();
      if (backendChart) backendChart.destroy();
      if (databaseChart) databaseChart.destroy();
      if (toolsChart) toolsChart.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Frontend Technologies</h2>
        <canvas ref={frontendRef}></canvas>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Backend Technologies</h2>
        <canvas ref={backendRef}></canvas>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Databases</h2>
        <canvas ref={databaseRef}></canvas>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Tools</h2>
        <canvas ref={toolsRef}></canvas>
      </div>
    </div>
  );
};

export default TechGraphs;
