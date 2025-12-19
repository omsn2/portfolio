import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

const HeatmapContainer = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(0, 255, 159, 0.2);
  backdrop-filter: blur(10px);
`;

const Title = styled.h3`
  color: #00ff9f;
  font-family: 'Fira Code', monospace;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '>';
    color: #ff006e;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12px, 1fr));
  gap: 3px;
  max-width: 100%;
  overflow-x: auto;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(10px, 1fr));
    gap: 2px;
  }
`;

const Cell = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${props => {
    const level = props.level || 0;
    if (level === 0) return 'rgba(100, 116, 139, 0.2)';
    if (level === 1) return 'rgba(0, 255, 159, 0.3)';
    if (level === 2) return 'rgba(0, 255, 159, 0.5)';
    if (level === 3) return 'rgba(0, 255, 159, 0.7)';
    return 'rgba(0, 255, 159, 1)';
  }};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0 10px ${props => props.level > 0 ? '#00ff9f' : '#64748b'};
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .label {
    color: #94a3b8;
    font-size: 0.85rem;
    font-family: 'Fira Code', monospace;
  }

  .value {
    color: #00ff9f;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Fira Code', monospace;
  }
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #94a3b8;
  font-family: 'Fira Code', monospace;

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const GitHubHeatmap = ({ username = 'omsn2' }) => {
  const [contributions, setContributions] = useState([]);
  const [stats, setStats] = useState({
    totalContributions: 0,
    currentStreak: 0,
    longestStreak: 0
  });

  useEffect(() => {
    // Generate mock data (in production, you'd fetch from GitHub API)
    const generateMockData = () => {
      const data = [];
      const today = new Date();
      
      for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        // Random contribution level (0-4)
        const level = Math.floor(Math.random() * 5);
        
        data.push({
          date: date.toISOString().split('T')[0],
          level: level,
          count: level * Math.floor(Math.random() * 10)
        });
      }
      
      return data;
    };

    const mockData = generateMockData();
    setContributions(mockData);

    // Calculate stats
    const total = mockData.reduce((sum, day) => sum + day.count, 0);
    setStats({
      totalContributions: total,
      currentStreak: 47, // Mock data
      longestStreak: 89  // Mock data
    });
  }, [username]);

  return (
    <HeatmapContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title>GitHub Contribution Activity</Title>
      
      <Grid>
        {contributions.map((day, index) => (
          <Cell
            key={index}
            level={day.level}
            title={`${day.date}: ${day.count} contributions`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.001 }}
          />
        ))}
      </Grid>

      <Legend>
        <span>Less</span>
        <div className="legend-item">
          <Cell level={0} style={{ width: '12px', height: '12px' }} />
          <Cell level={1} style={{ width: '12px', height: '12px' }} />
          <Cell level={2} style={{ width: '12px', height: '12px' }} />
          <Cell level={3} style={{ width: '12px', height: '12px' }} />
          <Cell level={4} style={{ width: '12px', height: '12px' }} />
        </div>
        <span>More</span>
      </Legend>

      <Stats>
        <StatItem>
          <span className="label">Total Contributions</span>
          <span className="value">{stats.totalContributions.toLocaleString()}</span>
        </StatItem>
        <StatItem>
          <span className="label">Current Streak</span>
          <span className="value">{stats.currentStreak} days</span>
        </StatItem>
        <StatItem>
          <span className="label">Longest Streak</span>
          <span className="value">{stats.longestStreak} days</span>
        </StatItem>
      </Stats>
    </HeatmapContainer>
  );
};

export default GitHubHeatmap;
