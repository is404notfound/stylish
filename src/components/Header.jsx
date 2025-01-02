import React from 'react';
import '../styles/components/header.css';
import HeaderLogo from '../assets/header-logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  return (
    <header className="header">
        <div className="header-content">
            <img src={HeaderLogo} alt="Header Logo" onClick={goToHome} />
        </div>
    </header>
  );
}

export default Header;