// src/Chart.js
import React, { useEffect, useRef } from 'react';
import { Chart as Chartjs } from 'chart.js/auto';

const Chart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chartjs(ctx, {
      type: 'line',
      data: {
        labels: data.map((_, index) => index + 1),
        datasets: [
          {
            label: 'Meditation Duration (seconds)',
            data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Chart;
