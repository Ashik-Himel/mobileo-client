import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const HeaderDrawerCategories = ({type, icon, brands, setShowDrawer}) => {
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
        {
          showSubCategories ? <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h16"
            />
          </svg> : <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
          </svg>
        }
      </button>
      <div>
        {
          brands?.length && <ul className="h-0 overflow-hidden transition-[height] duration-300 flex flex-col justify-center bg-gray-100 rounded-lg" style={showSubCategories ? {height: `${40*brands.length}px`, marginBlock: '8px'} : {}}>
            {
              brands?.map(item => <li key={item.name}>
                <Link
                  to={`/brands/${item.name}`}
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
};

export default HeaderDrawerCategories;

HeaderDrawerCategories.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  brands: PropTypes.array,
  setShowDrawer: PropTypes.func
}