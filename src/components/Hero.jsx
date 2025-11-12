import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const Hero = ({ onSubmitData }) => {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    languages: [],
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedLangs = checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value);
        return { ...prev, languages: updatedLangs };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitData(formData);
    setFormData({ name: "", gender: "", languages: [], email: "" });
    setShowForm(false);

   
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <section className="text-center py-16 px-6 bg-gray-100 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black-600">
          Simplify Your Life with Our <br className="hidden md:block" /> Todo App
        </h1>
        <p className="text-black-200 max-w-2xl mx-auto mb-6">
          Stay organized and boost your productivity with our intuitive todo app.
          <p>Experience a modern approach to task management that fits your lifestyle.</p>
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowForm(true)}
            className="px-10 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Get Started
          </button>

          <button className="px-10 py-3 border border-red-600 text-red-600 bg-white rounded-full">
            Learn More
          </button>
        </div>
      </section>

    
      {showForm && (
        <div className="fixed inset-0 backdrop-blur-lg bg-white/30 bg-opacity-40 flex justify-center items-center z-50">
          <div className=" bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[400px]">
               <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
      >
        &times;
      </button>
            <h2 className="text-2xl font-semibold mb-4">
              Get Started Today!
            </h2>
            <p>Fill your details and take control of your tasks.</p>
            <br />

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-left font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-red-50"
              />

              
              <div>
                <label className="block text-left font-medium">Gender</label>
                <div className="flex gap-4">
                  <label className="flex items-center bg-red-50 gap-1 px-2 py-1 rounded">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      checked={formData.gender === "Male"}
                    />
                    Male
                  </label>
                  <label className="flex items-center bg-red-50 gap-1 px-2 py-1 rounded">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      checked={formData.gender === "Female"}
                    />
                    Female
                  </label>
                </div>
              </div>

             
              <div>
                <p className="font-medium mb-1 text-left">Languages:</p>
                {["English", "Hindi", "Marathi"].map((lang) => (
                  <label
                    key={lang}
                    className="flex items-center gap-2 bg-red-50 px-2 py-1 rounded mb-1"
                  >
                    <input
                      type="checkbox"
                      value={lang}
                      onChange={handleChange}
                      checked={formData.languages.includes(lang)}
                    />
                    {lang}
                  </label>
                ))}
              </div>

              <label className="block text-left font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded bg-red-50"
              />

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-2 w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    
      {showPopup && (
        <div className="fixed backdrop-blur-lg bg-white/30 bg-opacity-40 inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 animate-fadeIn">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
            <FaHeart className="text-red-500 text-5xl mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You! for connect with us</h2>
            <p className="text-gray-600 mb-4">
               Our team will contacting with you soon
            </p>
            <button className="bg-red-500 text-white px-6 py-2">Done</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
