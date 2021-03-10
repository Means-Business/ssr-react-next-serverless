import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/actions/themeActions';

const Navbar = (props) => {
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://assets.means-business.com/bunchee-online-logo2.svg"
            width="30"
            height="30"
            alt="MooCoding Logo"
          />
        </a>
        <p className="ml-2">SSR &amp; Serverless</p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">Home</a>
          </Link>
          <Link href="/dogs">
            <a className="mr-5 hover:text-gray-900">Dogs</a>
          </Link>
          {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <div
            className="btn btn-blue mx-auto my-2"
            onClick={() => dispatch(toggleTheme(dark))}
          >
            {dark ? 'Light' : 'Dark'} Theme
          </div>
        </button>
      </div>
    </header>
  );
};
export default Navbar;
