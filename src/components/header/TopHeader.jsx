import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const TopHeader = ({brands, isLoading, setShowDrawer}) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <section className="border-b border-gray-200 fixed top-0 left-0 right-0 z-10 bg-gray-50">
      <div className="mx-6 md:mx-auto md:container">
        <nav className="relative flex justify-between items-center gap-6 py-4 bg-gray-50">
          <div className="flex justify-center items-center gap-4">
            <svg
            className="w-5 h-5 md:hidden cursor-pointer select-none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            onClick={() => setShowDrawer(true)}
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

              <form className={`absolute right-0 top-0 bottom-0 -z-10 w-full sm:max-w-[400px] transition-[top] duration-300 rounded-lg ${showSearch ? 'top-[72px] md:top-[120px]' : ''}`} onSubmit={(e) => e.preventDefault()}>
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

      <div className="font-medium py-2 bg-primary text-white hidden md:block">
        <div className="container flex justify-center items-center gap-6">
          {
            !isLoading ? brands?.length > 7 ? brands?.slice(0, 7)?.map(item => <Link to={`categories/${item.name}`} key={item.name}>{item.name}</Link>) : brands?.map(item => <Link to={`categories/${item.name}`} key={item.name}>{item.name}</Link>) : <svg aria-hidden="true" className="w-6 h-6 text-white animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            
          }
        </div>
      </div>
    </section>
  );
};

export default TopHeader;

TopHeader.propTypes = {
  brands: PropTypes.array,
  isLoading: PropTypes.bool,
  setShowDrawer: PropTypes.func
}