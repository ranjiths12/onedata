import React from 'react';
import Header from './Header';
import './SideBar.css'; // Ensure this CSS is properly defined
import { NavLink } from 'react-router-dom';
import MenuItems from './MenuItems';

const SideBar = () => {
  // Function to close the sidebar when navigating
  const closeSidebar = () => {
    document.body.classList.remove('toggle-sidebar');
  };

  return (
    <>
      <Header />
      <aside className='side-bar' id="side-bar">
        <div className='list-group'>
          <ul>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  onClick={closeSidebar} // Close sidebar on menu item click
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
