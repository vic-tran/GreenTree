import GT from "../assets/GT.png";

function Footer() {
  return (
    <div className="w-full max-h-15 flex items-center justify-center bg-amber-50">
      <div className="md:w-2/3 w-full px-4 text-black flex flex-col">
        <div className="flex mt-4 flex-col md:flex-row md:justify-between">
          <p className="font-sans w-full md:w-2/3 text-gray-400">
            For any questions about homes, services, community events, and more:
          </p>
          <div className="w-44 pt-6 md:pt-0 transition duration-150 hover:ease-in">
            <a
              href="/Contact"
              className="bg-emerald-400 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
            >
              Contact US
            </a>
          </div>
        </div>
        <div className="max-h-30">
          <div className="flex mt-10 mb-10 flex-row justify-between">
            <div className="">
              <a href="/" className="cursor-pointer">
                <img src={GT} alt="/" width="160" height="75" />
              </a>
            </div>
            <div className="flex-auto flex lg:pt-10 lg:pl-20 gap-x-20 items-start">
              <a
                href="/"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase"
              >
                Home
              </a>
              <a
                href="/Events"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase"
              >
                Events
              </a>
              <a
                href="/Architectural"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase"
              >
                Architectural
              </a>
              <a
                href="/Contact"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase"
              >
                Contact
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-gray-600">
            Copyright © 2022 Greentree Homes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
