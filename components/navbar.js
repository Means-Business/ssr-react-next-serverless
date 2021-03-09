import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dogs">Dogs</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
