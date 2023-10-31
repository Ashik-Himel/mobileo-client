import { useState } from "react";
import { axiosInstance } from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import HeaderDrawer from "./HeaderDrawer";
import BottomNav from "./BottomNav";
import TopHeader from "./TopHeader";

const brandsFetcher = async() => {
  const res = await axiosInstance('/brands');
  return res.data;
}

const Header = () => {
  const {data: brands, isLoading} = useQuery({queryKey: ['brands'], queryFn: brandsFetcher});

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <header>
      <TopHeader brands={brands} isLoading={isLoading} setShowDrawer={setShowDrawer} />
      <BottomNav />
      <HeaderDrawer brands={brands} showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </header>
  );
};

export default Header;