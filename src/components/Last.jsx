import React from "react";

const CTA = () => (
  <section className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 px-6 md:px-28 py-16 bg-white">
   
    <img
      src="https://static.vecteezy.com/system/resources/previews/009/759/159/non_2x/asian-women-wearing-surgical-face-mask-traveler-with-camera-travel-of-lifestyle-portrait-outdoor-summer-concept-free-photo.jpg"
      alt="App Preview"
      className="w-full md:w-1/3 "
    />

  
    <div className="max-w-md md:ml-10">
      <h2 className="text-3xl font-bold mb-6 leading-tight">
        Start Organizing Your 
        <p>Life Today</p>
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Join us and transform your productivity with our intuitive
        <p>to-do list platform!</p>
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Sign Up
        </button>
        <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
