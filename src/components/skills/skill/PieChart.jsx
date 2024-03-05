import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartConfig = {
      type: 'doughnut',
      data: {
        labels: ['Express', 'Node.js', 'React.js', 'MongoDB'],
        datasets: [{
          data: [30, 30, 20, 20],
          backgroundColor: ['#fb8500', '#ffafcc', '#588157', '#e63946']
        }]
      },
      options: {
        cutout: '50%',
        plugins: {
          title: {
            display: true,
            text: 'MERN Stack ',
            position: 'bottom'
          },
          legend: {
            display: false
          },
          hoverOffset: 8, // Add some offset on hover to create the effect of sections coming out of the pie
          animation: {
            animateRotate: true,
            animateScale: true
          },
          interaction: {
            mode: 'index',
            intersect: false
          },
          datalabels: {
            display: false
          },
          doughnutlabel: {
            labels: [
              {
                text: 'MERN',
                font: {
                  size: '30'
                }
              }
            ]
          }
        }
      }
    };

    const myChart = new Chart(chartRef.current, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;
