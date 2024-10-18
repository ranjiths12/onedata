import React from 'react';
import Header from './Header';
import './SideBar.css';
import { NavLink } from 'react-router-dom';
import MenuItems from './MenuItems';


const SideBar = () => {
  return (
    <>
      <Header />
      <aside id='side-bar' className='side-bar'>
        <div className='list-group'>
          <ul>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                >
                  <span className="list-icon">{item.icon}</span>
                  <span className="list-text">{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
