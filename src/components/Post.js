import { Link } from "react-router-dom";
import bannerImg from "../components/assets/images/img1.png";
import Header from "./Header";
import Footer from "./Footer";

function Post() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-7xl mx-auto bg-gray-50">
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
        <div className="h-full w-3/4 mt-32">
          <div className="w-full mx-auto mt-20 px-6 font-bodyFont">
            <ul className="flex justify-evenly gap-4 mb-8">
              <li className="topButton w-56">Name</li>
              <li className="topButton w-48">Time</li>
              <li className="topButton w-96">Details</li>
            </ul>
            <ul className="flex justify-evenly gap-4 mb-5">
              <li className="bottomButton w-56">Ecommerce</li>
              <li className="bottomButton w-48">2HR</li>
              <li className="bottomButton w-96">
                Login Reagistration page done with form validation
              </li>
            </ul>
            <ul className="flex justify-evenly gap-4 mb-5">
              <li className="bottomButton w-56">Ecommerce</li>
              <li className="bottomButton w-48">2HR</li>
              <li className="bottomButton w-96">
                Login Reagistration page done with form validation
              </li>
            </ul>
            <ul className="flex justify-evenly gap-4 mb-5">
              <li className="bottomButton w-56">Ecommerce</li>
              <li className="bottomButton w-48">2HR</li>
              <li className="bottomButton w-96">
                Login Reagistration page done with form validation
              </li>
            </ul>
            <ul className="flex justify-evenly gap-4 mb-5">
              <li className="bottomButton w-56">Ecommerce</li>
              <li className="bottomButton w-48">2HR</li>
              <li className="bottomButton w-96">
                Login Reagistration page done with form validation
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Post;
