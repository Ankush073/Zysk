import React from "react";

const TestimonialSection = () => {
  return (
    // Section: Testimonial Section
    <section
      className="w-full max-w-[1440px] h-auto py-24 flex justify-center gap-16  "
      role="contentinfo"
    >
      {/* Main Container */}
      <div
        className="w-[1280px] h-auto px-8 flex flex-col gap-8  "
      >
        {/* Subcontainer (SC1) */}
        <div
          className="w-[1216px] h-auto flex flex-col gap-10   mx-auto"
        >
          {/* Hierarchical Subcontainer (HS1) */}
          <div
            className="w-[1216px] h-auto flex flex-col items-center  "
          >
            {/* Text Element */}
            <p
              className="w-[1216px] h-[120px] text-center text-[48px] font-medium leading-[60px] tracking-[-0.02em] underline decoration-skip-ink  "
              style={{ fontFamily: "Inter", textUnderlinePosition: "from-font" }}
            >
              We’ve been using Untitled to kick start every new project and can’t imagine working without it.
            </p>

            {/* Company Logotype */}
            <div
              className="w-[140.83px] h-[40px] flex items-center justify-center   relative"
            >
              {/* Company Logo Image */}
              <img
                src="path-to-your-logo-image.png" // Add your image path here
                alt="Company Logo"
                className="absolute top-[10.32px] left-[34.98px] w-[105.13px] h-[22.7px]  "
              />
              {/* Company Name */}
              <span className="text-default text-sm font-medium">
                Sisyphus
              </span>
            </div>

            {/* Logomark Image */}
            <div
              className="w-[24.17px] h-[40px]  "
            >
              <img
                src="path-to-your-logomark-image.png" // Add your logomark image path here
                alt="Logomark"
                className="w-[24.17px] h-[40px]  "
              />
            </div>

            {/* AS1 */}
            <div
              className="w-[1216px] h-auto gap-4  "
            >
              {/* Avatar Image */}
              <img
                src="path-to-avatar-image.jpg" // Add your avatar image path here
                alt="Avatar"
                className="w-[64px] h-[64px] rounded-tl-[200px] border-t border-transparent opacity-[0.08]"
              />

              {/* Text Element 1 (Candice Wu) */}
              <p
                className="w-[1216px] h-[28px] text-center text-[18px] font-semibold leading-[28px]  "
                style={{ fontFamily: "Inter" }}
              >
                Candice Wu
              </p>

              {/* Text Element 2 (Product Manager, Sisyphus) */}
              <p
                className="w-[1216px] h-[24px] text-center text-[16px] font-normal leading-[24px]  "
                style={{ fontFamily: "Inter" }}
              >
                Product Manager, Sisyphus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
