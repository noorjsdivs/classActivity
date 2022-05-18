import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
function Header() {
  const handleWelcome = () => {
    toast.success("We never quit till we hit it by CODE !", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <header className=" shadow bg-gray-800 text-white">
        <div className="container px-6 py-6 mx-auto flex justify-between flex-col md:flex-row">
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-md">
              <Link to="/">
                <img
                  onClick={handleWelcome}
                  className="w-44 object-contain cursor-pointer"
                  src="https://links.papareact.com/yvf"
                />
              </Link>
            </div>
          </div>

          <div className="items-center flex">
            <ul className="flex flex-col md:flex-row ">
              <Link to="/">
                <li className="hover:bg-gray-900  hover:text-white transform active:bg-gray-900 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
                  Activity
                </li>
              </Link>
              <Link to="/class">
                <li className="hover:bg-gray-900 hover:text-white transform active:bg-gray-900 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
                  Class
                </li>
              </Link>
              <Link to="/employee">
                <li className="hover:bg-gray-900 hover:text-white transform active:bg-gray-900 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
                  Employee
                </li>
              </Link>
              <Link to="/post">
                <li className="hover:bg-gray-900 hover:text-white transform active:bg-gray-900 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
                  Post
                </li>
              </Link>
            </ul>
          </div>
          <div className="hidden items-center lg:flex">
            <ul className="flex flex-col md:flex-row md:mx-6">
              <a href="https://www.noormohammad.live/" target="_blank">
                <li className="hover:bg-gray-900 border-2 border-rose-600 hover:text-white transform active:bg-gray-900 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
                  Follow Me
                </li>
              </a>
              <li className="hover:bg-gray-900 hover:text-white transform active:bg-gray-900 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
                Get Started
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
