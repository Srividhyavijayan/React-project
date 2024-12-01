import React, { useState, useEffect } from 'react';

const Content: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    venueName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    // Auto-save form data
    localStorage.setItem('pageData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="content">
      <h2>How do you want to be called?</h2>
      <p>Enter the Company's name and also the name of your venue, which will be the title of the listing.</p>
      <form className="form">
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder="Company Name"
          className="input-field"
          required
        />
        <input
          type="text"
          name="venueName"
          value={formData.venueName}
          onChange={handleInputChange}
          placeholder="Name of Your Venue"
          className="input-field"
          required
        />
      </form>
    </div>
  );
};

export default Content;