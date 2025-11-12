import React from "react";
import { BsThreeDots, BsPlayCircleFill } from "react-icons/bs";

const Organize = () => (
  <section className="flex flex-col justify-center items-center gap-10 px-6 md:px-20 py-16 bg-gray-100">
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full px-5 sm:px-10">
  <div className="bg-red-500 text-white p-8 sm:p-12 md:p-16 rounded-3xl w-full md:w-[70%] text-center md:text-left md:min-h-[450px] lg:min-h-[500px]">
    <h2 className="text-3xl text-gray-50 sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight">
      Organize. <br /> Achieve. <br /> Relax.
    </h2>

    <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90">
      Turn clutter into clarity, chaos into control, and dreams into done.
    </p>

    <div className="flex gap-4 flex-wrap justify-center md:justify-start">
      <button className="bg-white text-red-500 px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition">
        Get Started Today
      </button>

      <button className="px-5 sm:px-6 py-2 sm:py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-red-500 transition">
        Discover
      </button>
    </div>
  </div>



   
      <div className="flex items-stretch">
        <div className="bg-black rounded-3xl shadow-lg overflow-hidden w-full h-full flex flex-col relative">
          <div className="relative w-full h-[380px] md:h-full">
            <img
              src="https://png.pngtree.com/png-clipart/20231003/original/pngtree-man-developer-with-laptop-png-image_13229697.png"
              alt="Profile"
              className="w-70 h-120"
            />

          
            <button className="absolute top-3 right-3 text-white text-2xl">
              <BsThreeDots />
            </button>

            
            <button className="absolute bottom-4 right-4 bg-white text-black rounded-full">
              <BsPlayCircleFill size={32} />
            </button>

            <div className="absolute bottom-4 left-4 text-white bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg">
              <p className="font-semibold text-sm">Freddie Halvorson</p>
              <p className="text-xs text-gray-200">Chief Productivity Enthusiast</p>
            </div>

            
            <p className="absolute top-4 left-4 text-white font-semibold text-lg">
              Your Tasks. <br /> Our Tools.
            </p>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>

   <div className="flex justify-center flex-wrap gap-8 sm:gap-12 md:gap-20 lg:gap-28 text-gray-700 font-semibold text-xl sm:text-2xl md:text-3xl mt-10 text-center">
      <p>Google</p>
      <p>Facebook</p>
      <p>YouTube</p>
      <p>Pinterest</p>
      <p>Twitch</p>
    </div>
  </section>
);

export default Organize;
