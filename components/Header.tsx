import React from 'react';
import { Building2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Building2 size={48} className="logo" />
      <h1>Venue Manager</h1>
    </header>
  );
};

export default Header;