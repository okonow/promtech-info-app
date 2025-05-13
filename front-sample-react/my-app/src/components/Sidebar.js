import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Главная', icon: '🏠', path: '/' },
    { id: 'docs', label: 'Документы', icon: '📄', path: '/docs' },
    { id: 'map', label: 'Карта', icon: '🗺️', path: '/map' },
    { id: 'contacts', label: 'Справочник', icon: '👥', path: '/contacts' },
    { id: 'profile', label: 'Профиль', icon: '👤', path: '/profile' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">OKB АКС</div>
      <nav className="main-nav">
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => 
              `nav-btn ${isActive ? 'active' : ''}`
            }
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 