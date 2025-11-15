import React from 'react';
import './Header.css';

const Header = ({ onLoginClick, activeSection, onSectionChange }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>🌐 علی‌بابا</h1>
          </div>
          
          <nav className="nav">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => onSectionChange('home')}
            >
              🏠 خانه
            </button>
            <button 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => onSectionChange('services')}
            >
              🛠️ خدمات
            </button>
            <button 
              className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
              onClick={() => onSectionChange('faq')}
            >
              ❓ سوالات متداول
            </button>
             <button 
              className={`nav-link ${activeSection === 'footer' ? 'active' : ''}`}
              onClick={() => onSectionChange('footer')}
            >
              📞 پشتیبانی
            </button>
          </nav>

          <div className="header-actions">
            <button className="login-btn" onClick={onLoginClick}>
              ورود / ثبت‌نام
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;