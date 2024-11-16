import React from 'react';
import Header from './components/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // Hide the Header on the /notfound route
  const showHeader = location.pathname !== "/notfound";

  return (
    <>
      { showHeader && <Header />}
      
      <main>
      <Outlet />
      </main>
    </>
  )
}
export default Layout;  