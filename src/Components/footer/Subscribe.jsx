
import React from "react";

const Subscribe = () => {
  return (
    <div className="relative -mb-32 z-20 flex justify-center">
      {/* Shadow Layer */}
      <div className="absolute top-6  container mx-auto h-full rounded-2xl "></div>

      {/* Main Card */}
      <div className="relative container mx-auto p-10 md:p-20 bg-white border border-white rounded-2xl overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-300 opacity-80 blur-[120px]"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-yellow-200 opacity-80 blur-[100px]"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Subscribe to our Newsletter
          </h2>

          <p className="text-gray-600 mb-6">
            Get the latest updates and news right in your inbox!
          </p>

          {/* Form */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full md:w-80"
            />

            <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 border-none text-black w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
