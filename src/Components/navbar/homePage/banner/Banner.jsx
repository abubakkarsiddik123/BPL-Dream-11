import React from "react";
import bannerImg from "../../../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="relative min-h-[60vh] bg-[#131313] rounded-2xl overflow-hidden container mx-auto">
      {/* Top Left Glow */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-300 opacity-80 blur-[120px]"></div>

      {/* Bottom Right Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-pink-300 opacity-80 blur-[120px]"></div>
      <div className="flex items-center justify-center">
        <div className="max-w-[970px] mt-16 space-y-6 text-center">
          <img className="mx-auto" src={bannerImg} alt="" />
          <h1 className="text-white text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-[#FFFFFFB3] text-2xl font-medium">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn bg-[#E7FE29] rounded-xl text-[#131313] font-bold ">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
