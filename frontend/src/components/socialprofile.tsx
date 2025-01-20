import React from 'react';
import logo1 from "../assets/1B.svg"
import logo2 from "../assets/2L.svg"
import logo3 from "../assets/3F.svg"
import logo4 from "../assets/4S.svg"
import logo5 from "../assets/5G.svg"
import logo6 from "../assets/6N.svg"
const LogoSection = () => {
  return (
    <div className="w-full h-[296px] py-[96px] bg-default">
      {/* Outer container with full width, height, and padding */}
      <div className="w-[1280px] h-[104px] px-[32px] gap-[32px]">
        {/* Inner container with fixed width and height, and content alignment */}
        <div className="w-[1216px] h-[24px] gap-0">
          {/* Text content */}
          <p className="text-slate-600 text-center text-[16px] font-medium leading-[24px]">
            Join 4,000+ companies already growing
          </p>
        </div>

        {/* Sub-container for logos */}
        <div className="w-[1216px] h-[48px] gap-0 flex justify-between ">
          {/* Logo 1: Boltshift */}
          <div className="w-[170px] h-[48px] gap-[22px] flex items-center">
            {/* Logo 1 SVG Image */}
            <img src={logo1} alt="Boltshift" className="w-[170px] h-[48px]" />
          </div>

          {/* Logo 2: Lightbox */}
          <div className="w-[167px] h-[48px] gap-[22px]  flex items-center">
            {/* Logo 2 SVG Image */}
            <img src={logo2} alt="Lightbox" className="w-[167px] h-[48px]" />
          </div>

          {/* Logo 3: FeatherDev */}
          <div className="w-[198px] h-[48px] gap-[22px]  flex items-center">
            {/* Logo 3 SVG Image */}
            <img src={logo3} alt="FeatherDev" className="w-[198px] h-[48px]" />
          </div>

          {/* Logo 4: Spherule */}
          <div className="w-[166px] h-[48px] gap-[22px]  flex items-center">
            {/* Logo 4 SVG Image */}
            <img src={logo4} alt="Spherule" className="w-[166px] h-[48px]" />
          </div>

          {/* Logo 5: GlobalBank */}
          <div className="w-[197px] h-[48px] gap-[22px]  flex items-center">
            {/* Logo 5 SVG Image */}
            <img src={logo5} alt="GlobalBank" className="w-[197px] h-[48px]" />
          </div>

          {/* Logo 6: Nietzsche */}
          <div className="w-[182px] h-[48px] gap-[22px]  flex items-center">
            {/* Logo 6 SVG Image */}
            <img src={logo6} alt="Nietzsche" className="w-[182px] h-[48px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
