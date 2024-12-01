import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Content from './components/Content';
import Footer from './components/Footer';
import UploadLogo from './components/UploadLogo';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <ProgressBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/upload" element={<UploadLogo />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;