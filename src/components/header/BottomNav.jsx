import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <section className="md:hidden fixed bottom-0 left-0 right-0 z-10 h-16 bg-gray-50 border-t border-gray-200">
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
  );
};

export default BottomNav;