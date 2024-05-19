import React, { useContext, useState } from "react";
// images
import Logo from "../img/logo.png";
// icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
//link
import { Link } from "react-router-dom";
// componets
import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";
// cart context
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [cartNavMobile, SetCartNavMobile] = useState(false);

  return (
    <header className=" bg-primary py-2 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between xl:mb-0">
          {/* menu  */}
          <div
            onClick={() => SetCartNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div
            className={`${
              cartNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile SetCartNavMobile={SetCartNavMobile} />
          </div>
          {/* logo  */}
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
          {/* searchfrom show only on desktop  */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          {/* phone and cart  */}
          <div className="flex items-center gap-x-[10px]">
            {/* phone */}
            <div className="hidden xl:flex uppercase">
              Need Help? 123 456 789
            </div>
            {/* cart icon */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              {/* amout  */}
              <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
                {itemsAmount}
              </div>
            </div>
          </div>
          {/* cart  */}
          <div
            className={`${isOpen ? "right-0" : "-right-full"}
               bg-slate-950 fixed shadow-xl top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
          >
            <Cart />
          </div>
        </div>
        {/* search form show on mobile only  */}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
