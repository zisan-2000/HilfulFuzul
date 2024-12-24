import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineClose,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaBlog, FaBookOpen, FaPenNib } from "react-icons/fa";
import { MdContactMail, MdEvent } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import FirstHeader from "./FirstHeader";
import SubMenu from "./SubMenu";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-800 shadow-lg">
      <FirstHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <nav className="bgThemeColor hidden shadow-md lg:block">
        <div className="mx-auto flex max-w-full items-center justify-between p-4">
          <div className="ml-10 flex space-x-10">
            <Link to="/" className="menuHeader flex items-center">
              <AiFillHome className="mr-1" /> {/* Home icon */}
              হোম
            </Link>

            <Link to="/allbooks" className="menuHeader flex items-center">
              <FaBookOpen className="mr-1" /> {/* Home icon */}
              সকল বইসমূহ
            </Link>

            <Link to="/category" className="menuHeader flex items-center">
              <AiOutlineUnorderedList className="mr-1" />
              বিষয়সমূহ
            </Link>

            <Link to="/authors" className="menuHeader flex items-center">
              <FaPenNib className="mr-1" />
              লেখক
            </Link>

            <Link to="/publishers" className="menuHeader flex items-center">
              <FaBookOpen className="mr-1" />
              প্রকাশক
            </Link>

            <div className="menuHeader flex items-center">
              <SubMenu />
            </div>

            <Link to="/book-fair" className="menuHeader flex items-center">
              <MdEvent className="mr-1" />
              বইমেলা 2024
            </Link>

            {/* <Link to="/pre-order" className="menuHeader flex items-center">
              <MdShoppingCart className="mr-1" />
              প্রি-অর্ডার
            </Link>

            <Link
              to="/islamic-products"
              className="menuHeader flex items-center"
            >
              <MdLocalGroceryStore className="mr-1" />
              ইসলামিক পণ্য
            </Link> */}
          </div>

          <div className="mr-10 flex gap-8 rounded-full bg-slate-100 p-3 hover:bg-black ">
            <Link
              to="/contact"
              className=" flex items-center  font-bold text-purple-600 hover:text-white"
            >
              <MdContactMail className="mr-1" />
              যোগাযোগ
            </Link>

            <Link
              to="/blogList"
              className=" flex items-center font-bold text-purple-600 hover:text-white"
            >
              <FaBlog className="mr-2" />
              ব্লগসমুহ
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-gradient-to-b from-blue-600 to-indigo-800 p-8 text-white transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <AiOutlineClose />
          </button>
        </div>

        <nav className="mt-8 flex flex-col space-y-4">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md bg-indigo-700 p-2 text-white shadow-md"
                : "flex items-center gap-3 p-2 transition duration-200 hover:rounded-md hover:bg-indigo-700"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <AiFillHome className="text-xl" />
            <span className="font-medium">হোম</span>
          </NavLink>

          <NavLink
            to="/allbooks"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md bg-indigo-700 p-2 text-white shadow-md"
                : "flex items-center gap-3 p-2 transition duration-200 hover:rounded-md hover:bg-indigo-700"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaBookOpen className="text-xl" />
            <span className="font-medium">সকল বইসমূহ</span>
          </NavLink>

          <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md bg-indigo-700 p-2 text-white shadow-md"
                : "flex items-center gap-3 p-2 transition duration-200 hover:rounded-md hover:bg-indigo-700"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <AiOutlineUnorderedList className="text-xl" />
            <span className="font-medium">বিষয়সমূহ</span>
          </NavLink>

          <NavLink
            to="/authors"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md bg-indigo-700 p-2 text-white shadow-md"
                : "flex items-center gap-3 p-2 transition duration-200 hover:rounded-md hover:bg-indigo-700"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaPenNib className="text-xl" />
            <span className="font-medium">লেখক</span>
          </NavLink>

          <NavLink
            to="/publishers"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md bg-indigo-700 p-2 text-white shadow-md"
                : "flex items-center gap-3 p-2 transition duration-200 hover:rounded-md hover:bg-indigo-700"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaBookOpen className="text-xl" />
            <span className="font-medium">প্রকাশক</span>
          </NavLink>

          <NavLink
            to="/book-fair"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md bg-indigo-700 p-2 text-white shadow-md"
                : "flex items-center gap-3 p-2 transition duration-200 hover:rounded-md hover:bg-indigo-700"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <MdEvent className="text-xl" />
            <span className="font-medium">বইমেলা 2024</span>
          </NavLink>

          <NavLink
            to="/blogList"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md bg-indigo-700 p-2 text-white shadow-md"
                : "flex items-center gap-3 p-2 transition duration-200 hover:rounded-md hover:bg-indigo-700"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaBlog className="text-xl" />
            <span className="font-medium">ব্লগসমুহ</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md bg-indigo-700 p-2 text-white shadow-md"
                : "flex items-center gap-3 p-2 transition duration-200 hover:rounded-md hover:bg-indigo-700"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <MdContactMail className="text-xl" />
            <span className="font-medium">যোগাযোগ</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
