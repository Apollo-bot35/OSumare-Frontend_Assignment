import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="py-16 bg-white px-6 md:px-20">
     
      <div className=" mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Customer Testimonials
        </h2>
        <p className="text-gray-600 mt-2">
          This tool has transformed my productivity and organization!
        </p>
      </div>

    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
    
        <div className="relative border-l-7 border-t-7 border-b-7 border-red-500 bg-white pl-20 pr-20 py-30 w-70% md:w-[550px] h-[450px] ">
         
          <div className="absolute top-0 right-0 w-2 h-5 bg-red-500 "></div>
          <div className="absolute bottom-0 right-0 w-2 h-5 bg-red-500 "></div>

          
          <p className="text-2xl font-semibold text-gray-800 leading-relaxed relative right-[-170px]">
            “Using this website has made my <p>tasks so much easier! I can’t</p> 
            <p>imagine my day without it.”</p>
          </p>


         
          <div className="flex items-center gap-3 mt-6">
            <div className="w-5 h-5 bg-red-500"></div>
            <div>
              <p className="font-semibold text-gray-900">Sherri Cronin</p>
              <p className="text-sm text-gray-600">Project Manager, TechCorp</p>
            </div>
          </div>

   
          <div className="flex gap-3 mt-6">
            <button className="border border-red-500 text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
              <FaArrowLeft />
            </button>
            <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>

         <div className="w-full md:w-1/3 flex justify-center mr-15">
          <div className="border-t-4 border-r-4 border-b-4 border-red-500 p-2 ">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/047/205/912/small_2x/asian-woman-is-taking-a-picture-with-a-camera-photo.jpg"
              alt="Customer"
              className="w-50px h-50px "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
