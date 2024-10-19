// src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import Header from '../components/sidebar/Header';

const Layout = ({ children }) => {
  const location = useLocation();

  const routesWithoutSidebar = [
    '/',
    '/joblisting',
    '/applicationlisting',
    '/applicationdetails/:id'
  ];
  const isRouteWithoutSidebar = routesWithoutSidebar.includes(location.pathname);
  return (
    <>
      <Header />
      {!isRouteWithoutSidebar && <SideBar />}
      <div className={isRouteWithoutSidebar ? 'nosidebarcontent' : 'content'}>
        {children}
      </div>
    </>
  );
};

export default Layout;
