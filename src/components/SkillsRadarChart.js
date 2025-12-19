import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ChartContainer = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(0, 255, 159, 0.2);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 2rem auto;
`;

const Title = styled.h3`
  color: #00ff9f;
  font-family: 'Fira Code', monospace;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &::before {
    content: '>';
    color: #ff006e;
  }
`;

const ChartWrapper = styled.div`
  position: relative;
  height: 400px;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const SkillsRadarChart = () => {
  const data = {
    labels: [
      'Frontend',
      'Backend',
      'DevOps',
      'Databases',
      'Cloud',
      'AI/ML',
      'System Design',
      'Problem Solving'
    ],
    datasets: [
      {
        label: 'Skill Proficiency',
        // Based on your actual tech stack and projects
        data: [85, 90, 75, 85, 70, 65, 75, 88],
        backgroundColor: 'rgba(0, 255, 159, 0.2)',
        borderColor: '#00ff9f',
        borderWidth: 2,
        pointBackgroundColor: '#00ff9f',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00ff9f',
        pointRadius: 5,
        pointHoverRadius: 7,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(148, 163, 184, 0.2)',
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.2)',
        },
        pointLabels: {
          color: '#e2e8f0',
          font: {
            size: 12,
            family: "'Fira Code', monospace",
          },
        },
        ticks: {
          color: '#94a3b8',
          backdropColor: 'transparent',
          font: {
            size: 10,
          },
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#e2e8f0',
          font: {
            size: 12,
            family: "'Fira Code', monospace",
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#00ff9f',
        bodyColor: '#e2e8f0',
        borderColor: '#00ff9f',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.r}%`;
          }
        }
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  return (
    <ChartContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title>Technical Expertise Radar</Title>
      <ChartWrapper>
        <Radar data={data} options={options} />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default SkillsRadarChart;
