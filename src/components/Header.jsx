import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { axiosInstance } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import PropTypes from 'prop-types';

const categoriesFetcher = async() => {
  const res = await axiosInstance('/categories.json');
  return res.data;
}

const Categories = ({type, icon, cates, setShowDrawer}) => {
  const [showSubCategories, setShowSubCategories] = useState(false);

  return (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 transition duration-75 rounded-lg hover:bg-gray-200 group"
        onClick={() => setShowSubCategories(!showSubCategories)}
      >
        <img className="w-5 h-5 flex-shrink-0" src={icon} alt={`${type}'s Icon`} />
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{type}</span>
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
      <div>
        {
          cates?.length && <ul className="h-0 overflow-hidden transition-[height] duration-300 flex flex-col justify-center bg-gray-100 rounded-lg" style={showSubCategories ? {height: `${40*cates.length}px`, marginBlock: '8px'} : {}}>
            {
              cates?.map(item => <li key={item.name}>
                <Link
                  to={`/categories/${item.name}`}
                  className="block w-full p-2 transition duration-75 rounded-lg pl-11 hover:bg-gray-200"
                  onClick={() => setShowDrawer(false)}
                >{item.name}</Link>
              </li>)
            }
          </ul>
        }
      </div>
    </li>
  );
}

const Header = () => {
  const {data: categories} = useQuery({queryKey: ['categories'], queryFn: categoriesFetcher});

  const [showSearch, setShowSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <header>
      {/* Top Header */}
      <section className="border-b border-gray-200 fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="mx-6 md:mx-auto md:container">
          <nav className="relative flex justify-between items-center gap-6 py-4 bg-white">
            <div className="flex justify-center items-center gap-4">
              <svg
              className="w-5 h-5 md:hidden cursor-pointer select-none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              onClick={() => setShowDrawer(!showDrawer)}
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
              <div>
                <svg
                  className="w-6 h-6 cursor-pointer select-none"
                  onClick={() => setShowSearch(!showSearch)}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>

                <form className="absolute right-0 top-0 bottom-0 -z-10 w-full sm:max-w-[400px] transition-[top] duration-300 rounded-lg" onSubmit={(e) => e.preventDefault()} style={showSearch ? {top: "112%", bottom: "auto"} : {}}>
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
                      className="block w-full p-4 pl-10 pr-[98px] text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-[transparent]"
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

        {/* <nav className="border-t border-gray-200 py-3">Category Nav</nav> */}
      </section>

      {/* Bottom Navigation For Small Devices */}
      <section className="md:hidden fixed bottom-0 left-0 right-0 z-10 h-16 bg-white border-t border-gray-200">
        <div className="grid h-full grid-cols-4 xsm:grid-cols-5">
          <NavLink
            to='/'
            className="inline-flex flex-col items-center justify-center font-medium px-5 text-gray-500"
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
            className="inline-flex flex-col items-center justify-center font-medium px-5 text-gray-500"
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
            className="flex-col items-center justify-center font-medium px-5 text-gray-500 hidden xsm:inline-flex"
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
            className="inline-flex flex-col items-center justify-center font-medium px-5 text-gray-500"
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
            className="inline-flex flex-col items-center justify-center font-medium px-5 text-gray-500"
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
      <section>
        <div
          className="fixed top-0 bottom-0 -left-[280px] z-20 h-screen p-4 bg-white w-3/4 max-w-[280px] transition-[left] duration-300 overflow-y-auto"
          style={showDrawer ? {left: '0'} : {}}
        >
          <h5 className="font-semibold text-gray-500 uppercase">Categories</h5>
          <button type="button" className="text-gray-500 bg-transparent hover:bg-gray-200 rounded-md w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center" onClick={() => setShowDrawer(false)}>
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
          <div className="py-4">
            <ul className="space-y-2 font-medium">
              {
                categories?.map(item => <Categories key={item.type} type={item.type} icon={item.icon} cates={item.categories} setShowDrawer={setShowDrawer} />)
              }
            </ul>
          </div>

          <h5 className="font-semibold text-gray-500 uppercase mt-4"
          >Other Pages</h5>
          <div className="py-4">
            <ul className="space-y-2 font-medium">
              <li>
                <Link to='/about'
                  className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-200"
                  onClick={() => setShowDrawer(false)}
                >
                  <img className="flex-shrink-0 w-5 h-5" src="https://i.ibb.co/xqHP6wk/about.png" alt="About Icon" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">About Us</span>
                </Link>
              </li>
              <li>
                <Link to='/branches'
                  className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-200"
                  onClick={() => setShowDrawer(false)}
                >
                  <img className="flex-shrink-0 w-5 h-5" src="https://i.ibb.co/W3k5v9h/branches.png" alt="Branches Icon" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Our Branches</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="fixed inset-0 z-10 bg-primary bg-opacity-40 hidden" style={showDrawer ? {display: "block"} : {}} onClick={() => setShowDrawer(false)}></div>
      </section>
    </header>
  );
};

export default Header;

Categories.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  cates: PropTypes.array,
  setShowDrawer: PropTypes.func
}