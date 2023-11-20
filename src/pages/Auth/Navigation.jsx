/* eslint-disable no-unused-vars */
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
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";

function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

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

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-800 focus:outline-none"
          >
            {userInfo ? (
              <span className="text-white"> {userInfo.username} </span>
            ) : (
              <></>
            )}

            {userInfo && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 ${
                  dropdownOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            )}
          </button>
          {dropdownOpen && userInfo && (
            <ul
              className={`absolute right-0 mt-2 mr-14 space-y-2 bg-white text-gray-600 ${
                !userInfo.isAdmin ? "-top-20" : "-top-80"
              } bg-black`}
            >
              {userInfo.isAdmin && (
                <>
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/productlist"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/categorylist"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/orderlist"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/userlist"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/logout"
                      onClick={logoutHandler}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>

        {!userInfo && (
          <ul>
            <li>
              <Link
                to="/login"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                {" "}
                <AiOutlineLogin size={26} className="mr-2 mt-[3rem]" />{" "}
                <span className="hidden nav-item-name mt-[3rem]">Login</span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                {" "}
                <AiOutlineUserAdd size={26} className="mr-2 mt-[3rem]" />{" "}
                <span className="hidden nav-item-name mt-[3rem]">Register</span>{" "}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navigation;
