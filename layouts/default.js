import React from 'react';
import Meta from '../components/meta';
import Navbar from '../components/navbar';

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
