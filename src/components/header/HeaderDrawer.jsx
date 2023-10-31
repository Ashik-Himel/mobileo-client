import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../hooks/useAxios";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import HeaderDrawerCategories from "./HeaderDrawerCategories";

const typesFetcher = async() => {
  const res = await axiosInstance('/types');
  return res.data;
}

const HeaderDrawer = ({brands, showDrawer, setShowDrawer}) => {
  const {data: types} = useQuery({queryKey: ['types'], queryFn: typesFetcher});

  return (
    <section>
      <div
        className="fixed top-0 bottom-0 -left-[280px] z-20 p-4 bg-white w-3/4 max-w-[280px] transition-[left] duration-300 overflow-y-auto"
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
              types?.map(item => <HeaderDrawerCategories key={item.name} type={item.name} icon={item.icon} brands={brands} setShowDrawer={setShowDrawer} />)
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
  );
};

export default HeaderDrawer;

HeaderDrawer.propTypes = {
  brands: PropTypes.array,
  showDrawer: PropTypes.bool,
  setShowDrawer: PropTypes.func
}