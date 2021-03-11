import React from 'react';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';

const Layout = ({ children, meta }) => {
  return (
    <div>
      <Meta props={meta} />
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
