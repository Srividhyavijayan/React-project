import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/upload');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="footer">
      <button className="back-button" onClick={handleBackClick}>
        Go back
      </button>
      <p className="auto-save">Progress Automatically Saved</p>
      <div className="navigation">
        <button className="preview-button">Preview</button>
        <button className="next-button" onClick={handleNextClick}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Footer;