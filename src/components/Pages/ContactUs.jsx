import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen mt-16 bg-gray-50 overflow-hidden">

      {/* 🔵 TOP BLUE LABEL BAR */}
      <div className="w-full bg-blue-950 py-12 px-4 flex flex-col items-center gap-3 relative overflow-hidden">
        
        {/* ✅ MOVING CAR ANIMATION */}
       

        <span className="text-xs tracking-[0.25em] uppercase text-blue-200">
          Contact Us
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          We’d Love to Hear From You
        </h1>

        <p className="text-sm sm:text-base text-blue-100 max-w-xl text-center">
          Have questions about bookings, pricing or custom trips?  
          Send us a message and our team will get back to you soon.
        </p>
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ✅ LEFT SIDE – CONTACT INFO + SMALL MAP */}
          <div className="space-y-6 animate-fadeInLeft">

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Get in touch
            </h2>

            <p className="text-sm sm:text-base text-gray-600">
              Reach out to us for bookings, support, or any enquiries related to our car rental services.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <p><b>📍 Address:</b> Guwahati, Assam, India</p>
              <p><b>📞 Phone:</b> +91 60027 64980</p>
              <p><b>✉️ Email:</b> support@yourcarbooking.com</p>
              <p><b>⏰ Timing:</b> 9:00 AM – 9:00 PM</p>
            </div>

            {/* ✅ SMALL MAP */}
            <div className="w-full h-[220px] rounded-xl overflow-hidden border shadow hover:scale-105 transition-transform">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Guwahati,Assam,India&output=embed"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              ></iframe>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>24/7 booking support</li>
              <li>Airport pickup & drop available</li>
              <li>Corporate & family packages</li>
            </ul>
          </div>

          {/* ✅ RIGHT SIDE – CONTACT FORM */}
          <div className="bg-white border rounded-xl shadow-sm p-6 sm:p-7 animate-fadeInRight">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5">
              Send us a message
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email address"
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ✅ ANIMATION STYLES */}
      <style>{`
        @keyframes carMove {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(120vw); }
        }
        .animate-carMove {
          animation: carMove 12s linear infinite;
        }

        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
