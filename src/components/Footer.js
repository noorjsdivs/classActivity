import toast, { Toaster } from "react-hot-toast";

function Footer() {
  const handleEmail = () => {
    toast.error("Provide a vaild email to continue!");
  };
  return (
    <div className="max-w-7xl mx-auto bg-gray-50">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-900">
        <div className="grid max-w-screen-xl grid-cols-1 mx-auto lg:grid-cols-2">
          <div className="px-4 py-16 border-b border-gray-800 md:border-b-0 md:border-l lg:pl-12 lg:order-last">
            <div className="mt-12 space-y-4 lg:mt-0">
              <span className="block w-16 h-1 bg-indigo-500 rounded"></span>

              <div>
                <h5 className="text-2xl font-medium text-white">
                  Admission Inquiry
                </h5>

                <p className="max-w-xs mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro voluptatum debitis quia pariatur iusto in nisi expedita
                  placeat vero magni.
                </p>
              </div>

              <form>
                <div className="relative max-w-lg">
                  <label className="sr-only" for="email">
                    Email
                  </label>

                  <input
                    className="w-full py-4 pl-3 pr-16 text-sm bg-gray-800 border-none rounded-lg"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />

                  <button
                    onClick={handleEmail}
                    className="absolute p-3 text-white -translate-y-1/2 bg-blue-600 rounded-md top-1/2 right-1.5"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="px-4 py-16 lg:pr-12">
            <div className="grid grid-cols-3 gap-8 lg:mt-12">
              <div>
                <p className="font-bold text-white">Helpful</p>
                <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                  <a className="hover:opacity-75">Contact</a>
                  <a classNameName="hover:opacity-75">Live Chat</a>
                  <a className="hover:opacity-75">Resources</a>
                </nav>
              </div>
              <div>
                <p className="font-bold text-white">Solutions</p>
                <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                  <a className="hover:opacity-75">Instant Checkout</a>
                  <a className="hover:opacity-75">Product Upsell</a>
                  <a className="hover:opacity-75">Slideout Cart</a>
                  <a className="hover:opacity-75">User Dashboards</a>
                </nav>
              </div>

              <div>
                <p className="font-bold text-white">About</p>
                <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                  <a className="hover:opacity-75">About Us</a>
                  <a className="hover:opacity-75">Meet the Team</a>
                  <a className="hover:opacity-75">History</a>
                  <a className="hover:opacity-75">Careers</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
