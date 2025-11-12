import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Organize from "./components/Organize";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Last from "./components/Last";
import Footer from "./components/Footor";

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <>
      <Navbar />
      <Hero onSubmitData={(data) => setSubmittedData((prev) => [...prev, data])} />
      <Organize />
      <Features />
      <Testimonials />
      <Last />

      {/* ✅ Table moved here — just above the Footer */}
      {submittedData.length > 0 && (
        <div className="overflow-x-auto mt-10 px-6 mb-10">
          <table className="w-full md:w-3/4 mx-auto border border-gray-300">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Languages</th>
                <th className="border px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index} className="text-center border">
                  <td className="border px-4 py-2">{data.name}</td>
                  <td className="border px-4 py-2">{data.gender}</td>
                  <td className="border px-4 py-2">
                    {data.languages.join(", ")}
                  </td>
                  <td className="border px-4 py-2">{data.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Footer />
    </>
  );
};

export default App;
