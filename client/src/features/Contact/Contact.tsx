import React from "react";

const Contact = () => {
  const workingHours = [
    { day: "Monday – Saturday", hours: "9:00 AM – 9:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="bg-[#001833] text-white font-sans p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        C2 Graphics Studio – Contact Info
      </h2>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-4xl w-full">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">📍 Address</h3>
              <p className="leading-relaxed px-4 md:px-8">
                No:58/A, Perundurai Main Road,
                <br />
                Erode Collectorate, Erode – 638011
                <br />
                <span className="text-sm italic text-gray-300">
                  (Near Erode Collectorate)
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">📞 Contact</h3>
              <p className="text-base px-4 md:px-8">07947104397</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">🕒 Working Hours</h3>
              <ul className="space-y-1 px-4 md:px-8">
                {workingHours.map((item, index) => (
                  <li key={index}>
                    <span className="font-medium">{item.day}:</span>{" "}
                    <span className="text-gray-300">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">📅 Established</h3>
              <p className="text-base px-4 md:px-8">2017</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer inside the same box */}
      <div className="text-center text-sm text-gray-300 mt-12 pt-6 border-t border-gray-600">
        <p className="tracking-wide uppercase">
          © {new Date().getFullYear()} All Rights Reserved |{" "}
          <span className="font-semibold text-white">C2-GRAPHICS</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
