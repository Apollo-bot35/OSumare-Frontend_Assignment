import React from "react";
import { FaUserFriends, FaShareAlt, FaHandsHelping, FaMobileAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "User-Friendly Interface",
      desc: "Our platform offers seamless task management to boost your efficiency.",
      icon: <FaUserFriends className="text-red-500 text-4xl" />,
      number: "01",
    },
    {
      title: "Collaborate & Share Effortlessly",
      desc: "Invite team members to work together and achieve your goals faster.",
      icon: <FaShareAlt className="text-red-500 text-4xl" />,
      number: "02",
    },
    {
      title: "Effortless Collaboration",
      desc: "Invite team members to work together and achieve your goals faster.",
      icon: <FaHandsHelping className="text-red-500 text-4xl" />,
      number: "03",
    },
    {
      title: "Seamless Access",
      desc: "Stay connected and manage tasks on the go with ease.",
      icon: <FaMobileAlt className="text-red-500 text-4xl" />,
      number: "04",
    },
  ];

  return (
    <section className="bg-white py-14 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center leading-snug">
        Transform Your Productivity with Our <br className="hidden md:block" /> Innovative To-Do List Features
      </h2>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl bg-gray-50 text-left w-full sm:w-[85%] md:w-[260px] lg:w-[280px] h-[280px] md:h-[320px] flex flex-col justify-start"
          >
            <span className="absolute top-3 right-4 text-gray-200 text-3xl font-bold">
              {f.number}
            </span>

            <div className="mb-4">{f.icon}</div>

          
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>

         
            <div className="flex items-center gap-2 mb-5">
              <div className="w-14 h-[4px] bg-red-500 rounded-full"></div>
              <div className="w-6 h-[4px] bg-red-500 rounded-full"></div>
            </div>

   
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
