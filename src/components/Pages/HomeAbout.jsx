const HomeAbout = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <div className="relative w-full h-[65vh] md:h-[90vh] overflow-hidden group">

        {/* ✅ Background Image with Zoom Animation */}
        <img
          src="../../../public/images/kk.png"
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms]"
          alt="banner"
        />

        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ✅ Content with Fade + Slide */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 animate-fadeInUp">

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-wide drop-shadow-lg">
            Book Your Dream Ride
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 max-w-md md:max-w-xl leading-relaxed">
            Luxury cars at affordable prices. Easy booking, instant confirmation,
            and best service guaranteed.
          </p>

          <button className="
            px-6 py-2.5 text-sm sm:text-base md:px-8 md:py-3 md:text-lg 
            font-semibold rounded-full 
            border border-white
            hover:scale-105 hover:bg-blue-600 hover:border-blue-600 hover:shadow-xl
            active:scale-95
            transition-all duration-300
            animate-pulseSlow
          ">
            Book Now
          </button>
        </div>
      </div>

      {/* ✅ ✅ MAP + LOCATION SECTION WITH ANIMATION */}
      <div className="w-full bg-gray-50 py-12 px-4 sm:px-10">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ✅ LEFT SIDE – LOCATION INFO (Slide from Left) */}
          <div className="animate-slideInLeft">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Visit Our Location
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We provide premium car rental services across major cities.
              Visit our office for exclusive deals and in-person support.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <p className="hover:translate-x-1 transition">📍 Location: Guwahati, Assam, India</p>
              <p className="hover:translate-x-1 transition">📞 Phone: +91 60027 64980</p>
              <p className="hover:translate-x-1 transition">⏰ Timing: 9:00 AM – 9:00 PM</p>
            </div>

            <button className="mt-6 px-6 py-2 border rounded-lg hover:bg-black hover:text-white hover:scale-105 transition">
              Get Directions
            </button>
          </div>

          {/* ✅ RIGHT SIDE – GOOGLE MAP (Zoom Hover + Float) */}
          <div className="w-full h-[300px] sm:h-[380px] rounded-xl overflow-hidden border shadow-lg hover:scale-105 transition-transform duration-500 animate-float">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Guwahati,Assam,India&output=embed"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeAbout;
