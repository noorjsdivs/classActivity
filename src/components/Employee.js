import { Link } from "react-router-dom";
import bannerImg from "../components/assets/images/img1.png";
import Header from "./Header";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";

function Employee() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("This Form is not ready to use!");
  };
  return (
    <div className="max-w-7xl mx-auto bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <div className="w-full h-bodyHeight flex border-r-4 border-gray-900 border-l-4">
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
            <Link to="/post">
              <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
                Post Activity
              </p>
            </Link>
            <Link to="/">
              <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
                Activity List
              </p>
            </Link>
            <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
              Apply for Leave
            </p>
            <p className="text-white hover:bg-commonHover cursor-pointer transition ease-in-out duration-500 py-4 px-7">
              Late List
            </p>
          </div>
        </div>
        {/* Right Side  */}
        <div className="h-full w-3/4 mt-20">
          <div>
            <form className="w-4/5 mx-auto flex flex-col mt-24">
              <div className="flex justify-evenly flex-col">
                <div className="flex justify-between">
                  <input
                    className="px-20 py-2 rounded-full outline-none border-2 bg-white text-black placeholder:text-black"
                    type="text"
                    placeholder="Activity Name "
                  />
                  <input
                    className="px-20 py-2 rounded-full outline-none border-2 bg-white text-black placeholder:text-black"
                    type="text"
                    placeholder="Hour take"
                  />
                </div>
                <div className="w-full mt-8">
                  <textarea
                    className="px-12 w-full py-2 border-2 rounded-md h-52 outline-none bg-white text-black placeholder:text-black"
                    type="text"
                    placeholder="Activity Details"
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full rounded-full bg-commonBg py-2 text-white hover:bg-commonHover transition ease-in-out duration-500 mt-8"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Employee;
