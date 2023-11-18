import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSideBar = () => {
    setShowSidebar(false);
  };

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${
        showSidebar ? "hidden" : "flex"
      } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-black w-[6%] hover:w-[15%] h-[100vh] fixed`}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          {" "}
          <AiOutlineHome size={26} className="mr-2 mt-[3rem]" />{" "}
          <span className="hidden nav-item-name mt-[3rem]">Home</span>{" "}
        </Link>
        {/* Fin du premier */}

        <div className="flex flex-col justify-center space-y-4">
          <Link
            to="/shop"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            {" "}
            <AiOutlineShopping size={26} className="mr-2 mt-[3rem]" />{" "}
            <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
          </Link>
          {/* <Link /> */}
        </div>
        {/* Fin du deuxième */}

        <div className="flex flex-col justify-center space-y-4">
          <Link
            to="/cart"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            {" "}
            <AiOutlineShoppingCart size={26} className="mr-2 mt-[3rem]" />{" "}
            <span className="hidden nav-item-name mt-[3rem]">CART</span>{" "}
          </Link>
        </div>
        {/* Fin du troisième */}

        <div className="flex flex-col justify-center space-y-4">
          <Link
            to="/favorite"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            {" "}
            <FaHeart size={26} className="mr-2 mt-[3rem]" />{" "}
            <span className="hidden nav-item-name mt-[3rem]">FAVORITE</span>{" "}
          </Link>
        </div>
        {/* Fin du quatrième */}

        <ul>
          <li>
            <Link
              to="/login"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              {" "}
              <AiOutlineLogin size={26} className="mr-2 mt-[3rem]" />{" "}
              <span className="hidden nav-item-name mt-[3rem]">LOGIN</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              {" "}
              <AiOutlineUserAdd size={26} className="mr-2 mt-[3rem]" />{" "}
              <span className="hidden nav-item-name mt-[3rem]">REGISTER</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
