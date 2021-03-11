import React, { useState, useReducer } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/actions/themeActions';

import Switch from './Switch';

const actionTypes = {
  toggle: 'TOGGLE',
  on: 'ON',
  off: 'OFF',
};

function toggleReducer(state, action) {
  switch (action.type) {
    case actionTypes.toggle: {
      return { on: !state.on };
    }
    case actionTypes.on: {
      return { on: true };
    }
    case actionTypes.off: {
      return { on: false };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}

function useToggle({ reducer = toggleReducer } = {}) {
  const dark = useSelector((state) => state.theme.dark);
  const themeDispatch = useDispatch();
  const [{ on }, dispatch] = useReducer(reducer, { on: false });

  const toggle = () => dispatch({ type: actionTypes.toggle });
  const themeToggle = () => themeDispatch(toggleTheme(dark));
  const setOn = () => dispatch({ type: actionTypes.on });
  const setOff = () => dispatch({ type: actionTypes.off });

  return { on, toggle, themeToggle, setOn, setOff };
}

function Toggle() {
  const [clicksSinceReset, setClicksSinceReset] = useState(0);
  const tooManyClicks = clicksSinceReset >= 4;

  const { on, toggle, themeToggle, setOn, setOff } = useToggle({
    reducer(currentState, action) {
      const changes = toggleReducer(currentState, action);
      return changes;
      // if (tooManyClicks && action.type === actionTypes.toggle) {
      //   return { ...changes, on: currentState.on };
      // } else {
      //   return changes;
      // }
    },
  });
  // const { on, toggle, themeToggle, setOn, setOff } = useToggle({
  //   reducer(currentState, action) {
  //     const changes = toggleReducer(currentState, action);
  //     if (tooManyClicks && action.type === actionTypes.toggle) {
  //       return { ...changes, on: currentState.on };
  //     } else {
  //       return changes;
  //     }
  //   },
  // });

  return (
    <div className="flex flex-wrap space-x-2">
      <button onClick={setOff}>กลางวัน</button>
      {/* {tooManyClicks ? (
        <button onClick={() => setClicksSinceReset(0)}>Reset</button>
      ) : null} */}
      <Switch
        onClick={() => {
          toggle();
          themeToggle();
          setClicksSinceReset((count) => count + 1);
        }}
        on={on}
      />

      <button onClick={setOn}>กลางคืน</button>
    </div>
  );
}

const Navbar = () => {
  // const dark = useSelector((state) => state.theme.dark);
  // console.log('NavbarDark', dark);
  // const dispatch = useDispatch();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 dark:text-gray-300 mb-4 md:mb-0">
          <img
            src="https://assets.means-business.com/bunchee-online-logo2.svg"
            width="30"
            height="30"
            alt="MooCoding Logo"
          />
        </a>
        <p className="ml-2 dark:text-gray-300">SSR &amp; Serverless</p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
              Home
            </a>
          </Link>
          <Link href="/dogs">
            <a className="mr-5 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
              Dogs
            </a>
          </Link>
          {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        {/* <div className="flex items-center justify-center">
          <label htmlFor="toggleA" className="flex items-center cursor-pointer">
            <div className="relative">
              <input id="toggleA" type="checkbox" className="hidden" />
              <div className="toggle-line w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                className="toggle-dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                onClick={() => dispatch(toggleTheme(dark))}
              ></div>
              <Toggle />
              <Switch onClick={() => dispatch(toggleTheme(dark))} />
            </div>
            <div className="ml-3 text-gray-700 font-medium">
              {dark ? 'Light' : 'Dark'} Theme
            </div>
          </label>
        </div> */}
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <div
            className="btn btn-blue mx-auto my-2"
            onClick={() => dispatch(toggleTheme(dark))}
          >
            {dark ? 'Light' : 'Dark'} Theme
          </div>
        </button> */}
        <Toggle />
      </div>
    </header>
  );
};
export default Navbar;
