import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header>
      {/* Top Header */}
      <section className="py-4 border-b border-gray-200 fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="mx-6 md:mx-auto md:container">
          <nav className="flex justify-between items-center gap-6">
            <div className="flex justify-center items-center gap-4">
              <svg
              className="w-5 h-5 md:hidden cursor-pointer select-none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 17 14"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
              <Link to='/' className="text-2xl font-bold [letter-spacing:1px]">MobileO</Link>
            </div>

            <ul className="hidden md:flex justify-center items-center gap-6">
              <li>
                <NavLink to='/' className={({isActive}) => isActive ? 'font-bold' : ''}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/products' className={({isActive}) => isActive ? 'font-bold' : ''}>All Products</NavLink>
              </li>
              <li>
                <NavLink to='/about' className={({isActive}) => isActive ? 'font-bold' : ''}>About Us</NavLink>
              </li>
              <li>
                <NavLink to='/branches' className={({isActive}) => isActive ? 'font-bold' : ''}>Branches</NavLink>
              </li>
            </ul>

            <div className="flex justify-center items-center gap-3">
              <div className="relative">
                <svg className="w-6 h-6 cursor-pointer select-none" onClick={() => setShowSearch(!showSearch)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>

                <form className="absolute -right-2 top-[calc(100%+30px)] hidden min-w-[280px]" onSubmit={(e) => e.preventDefault()} style={showSearch ? {display: "block"} : {}}>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary"
                      placeholder="Search Products"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-[7px] bottom-[7px] btn-primary"
                    >
                      Search
                    </button>
                  </div>
                </form>

              </div>
              <Link to='/cart'>
                <svg className="w-6 h-6 cursor-pointer select-none xsm:hidden md:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                </svg>
              </Link>
              <Link to='/wishlist'>
                <svg className="w-6 h-6 cursor-pointer select-none hidden md:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                </svg>
              </Link>
              <Link to='/login' className="hidden md:block btn-primary">Login</Link>
            </div>
          </nav>
        </div>
      </section>

      {/* Bottom Navigation For Small Devices */}
      <section className="md:hidden fixed bottom-0 left-0 right-0 z-10 h-16 bg-white border-t border-gray-200">
        <div className="grid h-full grid-cols-4 xsm:grid-cols-5 mx-auto">
          <NavLink
            to='/'
            className="inline-flex flex-col items-center justify-center font-medium px-5 group text-gray-500"
            style={({isActive}) => isActive ? {color: "#1F2022"} : {}}
          >
            <svg className="w-5 h-5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span className="text-sm">
              Home
            </span>
          </NavLink>
          <NavLink
            to='/products'
            className="inline-flex flex-col items-center justify-center font-medium px-5 group text-gray-500"
            style={({isActive}) => isActive ? {color: "#1F2022"} : {}}
          >
            <svg className="w-5 h-5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.876.517A1 1 0 0 0 17 0H3a1 1 0 0 0-.871.508C1.63 1.393 0 5.385 0 6.75a3.236 3.236 0 0 0 1 2.336V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.044a3.242 3.242 0 0 0 1-2.294c0-1.283-1.626-5.33-2.124-6.233ZM15.5 14.7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8v2.4ZM16.75 8a1.252 1.252 0 0 1-1.25-1.25 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0A1.252 1.252 0 0 1 3.25 8 1.266 1.266 0 0 1 2 6.75C2.306 5.1 2.841 3.501 3.591 2H16.4A19.015 19.015 0 0 1 18 6.75 1.337 1.337 0 0 1 16.75 8Z"/>
            </svg>
            <span className="text-sm">
              Products
            </span>
          </NavLink>
          <NavLink
            to='/cart'
            className="flex-col items-center justify-center font-medium px-5 group text-gray-500 hidden xsm:inline-flex"
            style={({isActive}) => isActive ? {color: "#1F2022"} : {}}
          >
            <svg className="w-5 h-5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
            </svg>
            <span className="text-sm">
              My Cart
            </span>
          </NavLink>
          <NavLink
            to='/wishlist'
            className="inline-flex flex-col items-center justify-center font-medium px-5 group text-gray-500"
            style={({isActive}) => isActive ? {color: "#1F2022"} : {}}
          >
            <svg className="w-5 h-5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
            </svg>
            <span className="text-sm">
              Wishlist
            </span>
          </NavLink>
          <NavLink
            to='/login'
            className="inline-flex flex-col items-center justify-center font-medium px-5 group text-gray-500"
            style={({isActive}) => isActive ? {color: "#1F2022"} : {}}
          >
            <svg className="w-5 h-5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <span className="text-sm">
              Account
            </span>
          </NavLink>
        </div>
      </section>

      {/* Drawer For Small Devices */}
      <section
        id="drawer-navigation"
        className="fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-3/4 max-w-[280px]"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase"
        >
          Categories
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-500 bg-transparent hover:bg-gray-200 rounded-md w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-200"
                aria-controls="dropdown-1"
                data-collapse-toggle="dropdown-1"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-primary"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 384 512"
                >
                  <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Smartphone
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
              </button>
              <ul id="dropdown-1" className="hidden py-2">
                <li>
                  <Link
                    to='/products/categories/Apple'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >Apple</Link>
                </li>
                <li>
                  <Link
                    to='/products/categories/Samsung'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >Samsung</Link>
                </li>
                <li>
                  <Link
                    to='/products/categories/OnePlus'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >OnePlus</Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-200"
                aria-controls="dropdown-2"
                data-collapse-toggle="dropdown-2"
              >
                <svg 
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-primary"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Smartwatch</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
              </button>
              <ul id="dropdown-2" className="hidden py-2">
                <li>
                  <Link
                    to='/products/categories/Apple'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >Apple</Link>
                </li>
                <li>
                  <Link
                    to='/products/categories/Samsung'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >Samsung</Link>
                </li>
                <li>
                  <Link
                    to='/products/categories/OnePlus'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >OnePlus</Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-200"
                aria-controls="dropdown-3"
                data-collapse-toggle="dropdown-3"
              >
                <svg 
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-primary"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 80C141.1 80 48 173.1 48 288V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288C0 146.6 114.6 32 256 32s256 114.6 256 256V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V352zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h16z"/></svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Headphone
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
              </button>
              <ul id="dropdown-3" className="hidden py-2">
                <li>
                  <Link
                    to='/products/categories/Apple'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >Apple</Link>
                </li>
                <li>
                  <Link
                    to='/products/categories/Samsung'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >Samsung</Link>
                </li>
                <li>
                  <Link
                    to='/products/categories/OnePlus'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >OnePlus</Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-200"
                aria-controls="dropdown-4"
                data-collapse-toggle="dropdown-4"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-primary"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Accessories
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
              </button>
              <ul id="dropdown-4" className="hidden py-2">
                <li>
                  <Link
                    to='/products/categories/Apple'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >Apple</Link>
                </li>
                <li>
                  <Link
                    to='/products/categories/Samsung'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >Samsung</Link>
                </li>
                <li>
                  <Link
                    to='/products/categories/OnePlus'
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200"
                  >OnePlus</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase mt-4"
        >
          Other Pages
        </h5>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to='/about'
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-200"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-primary"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link to='/branches'
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-200"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-primary"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Our Branches
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;