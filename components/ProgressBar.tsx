import React from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar: React.FC = () => {
  const location = useLocation();
  const progress = location.pathname === '/' ? 30 : 60;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;