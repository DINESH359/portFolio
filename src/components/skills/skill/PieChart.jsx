import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartConfig = {
      type: 'pie',
      data: {
        labels: ['Express', 'Node.js', 'React.js', 'MongoDB'],
        datasets: [{
          data: [30, 30, 20, 20],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'MERN Stack Distribution'
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
