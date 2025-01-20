
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo1 from "../assets/Vector1.svg"
import logo2 from "../assets/Vector2.svg"
import logo3 from "../assets/Vector3.svg"
import Avtar from "../assets/Avatar.svg"
import image from "../assets/image1.svg"

const Header = () => {
  return (
    <div className="w-[1440px] h-[1100px] bg-white mx-auto">
      {/* Dropdown Header Navigation */}
      <header
        className="w-full h-[80px] border-b border-gray-300 bg-gray-50 flex items-center justify-center"
      >
        <div className="w-[1280px] h-auto flex justify-between items-center px-[32px]">
        <div
          className="flex items-center justify-between"
          style={{
            width: "528.61px",
            height: "32px",
            gap: "40px",
          }}
        >
          {/* Company Logo Section */}
          <div
            className="flex items-center justify-center"
            style={{
              width: "84.61px",
              height: "32px",
              position: "relative",
            }}
          >
            <img
              src={logo1}
              alt="Logo 1"
              className="absolute"
              style={{
                width: "42.15px",
                height: "23.62px",
                top: "8.2px",
                left: "0px",
                objectFit: "contain",
              }}
            />
            <img
              src={logo2}
              alt="Logo 2"
              className="absolute"
              style={{
                width: "18.83px",
                height: "18.62px",
                top: "13.37px",
                left: "38.84px",
                objectFit: "contain",
              }}
            />
            <img
              src={logo3}
              alt="Logo 3"
              className="absolute"
              style={{
                width: "42.79px",
                height: "32px",
                top: "0px",
                left: "41.82px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Navigation Section */}
          <div
          className="flex items-center justify-between"
          style={{
            width: "404px",
            height: "32px",
            gap: "32px",
          }}
        >
              <nav>
                <ul className="flex gap-4 items-center">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Home
                    </a>
                  </li>
                  <li className="relative group">
                    <button className="flex items-center text-gray-700 hover:text-gray-900">
                      Resources <FaChevronDown className="ml-2 group-hover:hidden" /> <FaChevronUp className="ml-2 hidden group-hover:block" />
                    </button>
                    {/* Dropdown menu for Resources */}
                    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-300 shadow-lg">
                      <ul className="py-2">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Docs</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Guides</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative group">
                    <button className="flex items-center text-gray-700 hover:text-gray-900">
                      Product <FaChevronDown className="ml-2 group-hover:hidden" /> <FaChevronUp className="ml-2 hidden group-hover:block" />
                    </button>
                    {/* Dropdown menu for Product */}
                    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-300 shadow-lg">
                      <ul className="py-2">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Features</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pricing</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>
              </div>
        </div>


          {/* Profile Avatar Section */}
          <div>
            <img
              src={Avtar}
              alt="Profile Avatar"
              className="h-10 w-10 rounded-full border border-gray-300"
            />
          </div>
        </div>
      </header>
      <section className="w-full max-w-[1440px] h-[1020px] pt-[96px] gap-[64px]">
  {/* First Container */}
  <div className="w-[1280px] h-[300px] px-[32px] gap-[32px] ">
    {/* Sub-container */}
    <div className="w-full max-w-[1216px] h-[300px] gap-[48px] ">
      {/* CS1 Container */}
      <div className="w-[1024px] h-[204px] gap-[24px] ">
        {/* CH1 Container */}
        <div className="w-full max-w-[1024px] h-[120px] gap-[16px] ">

          {/* BadgeGroup */}
          <div className="w-auto h-auto gap-[12px]">
            {/* Badge */}
            <div
              className="w-[102px] h-[24px] px-[10px] py-[2px] gap-0 rounded-tl-[16px] border-t-[1px] border-solid border-[#E63F3A]">
              {/* Badge text */}
              <div className="w-[82px] h-[20px] gap-0">
                <span
                  className="text-center text-orange-900 text-[14px] font-medium leading-[20px]"
                  style={{
                    fontFamily: 'Inter',
                    textDecorationSkipInk: 'none',
                    textUnderlinePosition: 'from-font',
                  }}
                >
                  New Features
                </span>
              </div>
            </div>
          </div>
          <div className="w-[1024px] h-[72px] ">
            <h1
              className="text-center text-black text-[50px] font-semibold leading-[72px] tracking-[-0.02em]"
              style={{
                fontFamily: 'Inter',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
              }}
            >
              Beautiful analytics to grow smarter
            </h1>
          </div>
        </div>

        {/* Supporting Text in CS1 Container */}
        <div
          className="w-[768px] h-[60px]">
          <p
            className="text-center text-slate-600 text-[20px] font-normal leading-[30px]"
            style={{
              fontFamily: 'Inter',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
      </div>

      {/* CS2 Container */}
      <div className="w-auto h-auto gap-[12px] ">
        {/* Add content here */}
      </div>
    </div>
  </div>

  {/* Second Container */}
  <div className="w-[1280px] h-[560px] px-[32px] gap-[32px] ">
    {/* Sub-container */}
    <div className="w-full max-w-[1216px] h-[560px] gap-0">
      {/* 3:2 Screen Markup */}
      
        {/* SVG Image inside the 3:2 Screen */}
        <div className="w-full h-full">
            {/* Replace this with your SVG */}
            <img
              className="w-full h-full"
              src={image}
              alt="image"
            >

            </img>
          </div>
    </div>
  </div>
</section>
</div>
  );
};

  

export default Header;

