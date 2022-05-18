import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../components/assets/images/img1.png";
import toast, { Toaster } from "react-hot-toast";

function ActivityList() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("This Form is not ready to use!");
  };
  return (
    <div className="max-w-7xl mx-auto bg-gray-100 border-r-4 border-gray-900 border-l-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full h-bodyHeight flex">
        {/* left side  */}
        <div className="h-full bg-commonBg w-1/4">
          <img src={bannerImg} alt="" />
          <div className="text-white ml-7 mt-12 leading-7">
            <p>
              <span className="font-bold">Name: </span>A B M Shawon Islam
            </p>
            <p>
              <span className="font-bold">Designation: </span>MERN Stack
              Developer
            </p>
            <p>
              <span className="font-bold">Office Time: </span>11am - 8pm
            </p>
            <p>
              <span className="font-bold">Offday: </span>Sunday
            </p>
          </div>
          <div className="mt-20">
            <div>
              <Link to="/employee">
                <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
                  Employee List
                </p>
              </Link>
            </div>
            <Link to="/class">
              <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
                Today's Class
              </p>
            </Link>
            <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
              Post Activity
            </p>
            <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
              Activity List
            </p>
            <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
              Apply for Leave
            </p>
            <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
              Late List
            </p>
          </div>
        </div>
        {/* Right Side  */}
        <div className="h-full w-3/4">
          <div>
            <form className="w-3/5 mx-auto flex flex-col mt-10">
              <div className="flex justify-evenly">
                <div>
                  <input
                    className="px-12 py-2 border-2 mb-6 rounded-full outline-none bg-white text-black placeholder:text-black"
                    type="text"
                    placeholder="name"
                  />
                  <input
                    className="px-12 py-2 border-2 rounded-full outline-none bg-white text-black placeholder:text-black"
                    type="text"
                    placeholder="Office Time"
                  />
                </div>
                <div>
                  <input
                    className="px-12 py-2 mb-6 border-2 rounded-full outline-none bg-white text-black placeholder:text-black"
                    type="text"
                    placeholder="Designation"
                  />
                  <input
                    className="px-12 py-2 border-2 rounded-full outline-none bg-white text-black placeholder:text-black"
                    type="text"
                    placeholder="Day Off"
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full rounded-full bg-commonBg py-2 text-white hover:bg-commonHover transition ease-in-out duration-500 mt-6"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-full mt-20 px-6">
            <ul className="flex justify-between gap-4 mb-8">
              <li className="topButton w-52 ">Name</li>
              <li className="topButton w-52">Designation</li>
              <li className="topButton ">Office Time</li>
              <li className="topButton ">Offday</li>
              <li className="topButton ">Phone No.</li>
            </ul>
            <ul className="flex justify-between gap-4 mb-5">
              <li className="bottomButton w-52">A B M Shawon Islam</li>
              <li className="bottomButton w-52">MERN Stack Developer</li>
              <li className="bottomButton ">11am - 8pm</li>
              <li className="bottomButton ">Sunday</li>
              <li className="bottomButton ">01990779824</li>
            </ul>
            <ul className="flex justify-between gap-4 mb-5">
              <li className="bottomButton w-52">A B M Shawon Islam</li>
              <li className="bottomButton w-52">MERN Stack Developer</li>
              <li className="bottomButton ">11am - 8pm</li>
              <li className="bottomButton ">Sunday</li>
              <li className="bottomButton ">01990779824</li>
            </ul>
            <ul className="flex justify-between gap-4 mb-5">
              <li className="bottomButton w-52">A B M Shawon Islam</li>
              <li className="bottomButton w-52">MERN Stack Developer</li>
              <li className="bottomButton ">11am - 8pm</li>
              <li className="bottomButton ">Sunday</li>
              <li className="bottomButton ">01990779824</li>
            </ul>
            <ul className="flex justify-between gap-4 mb-5">
              <li className="bottomButton w-52">A B M Shawon Islam</li>
              <li className="bottomButton w-52">MERN Stack Developer</li>
              <li className="bottomButton ">11am - 8pm</li>
              <li className="bottomButton ">Sunday</li>
              <li className="bottomButton ">01990779824</li>
            </ul>
            <ul className="flex justify-between gap-4 mb-5">
              <li className="bottomButton w-52">A B M Shawon Islam</li>
              <li className="bottomButton w-52">MERN Stack Developer</li>
              <li className="bottomButton ">11am - 8pm</li>
              <li className="bottomButton ">Sunday</li>
              <li className="bottomButton ">01990779824</li>
            </ul>
            <ul className="flex justify-between gap-4 mb-5">
              <li className="bottomButton w-52">A B M Shawon Islam</li>
              <li className="bottomButton w-52">MERN Stack Developer</li>
              <li className="bottomButton ">11am - 8pm</li>
              <li className="bottomButton ">Sunday</li>
              <li className="bottomButton ">01990779824</li>
            </ul>
            <ul className="flex justify-between gap-4 mb-5">
              <li className="bottomButton w-52">A B M Shawon Islam</li>
              <li className="bottomButton w-52">MERN Stack Developer</li>
              <li className="bottomButton ">11am - 8pm</li>
              <li className="bottomButton ">Sunday</li>
              <li className="bottomButton ">01990779824</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityList;
