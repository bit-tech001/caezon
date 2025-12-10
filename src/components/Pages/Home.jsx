import { useEffect, useState } from "react";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import slides from "../../data/heroSlide.json";
import HeroextraPage from "./HeroextraPage";
import HomeAbout from "./HomeAbout";
import { Link } from "react-router-dom";

const Hero = () => {
  const [index, setIndex] = useState(0);

  // ✅ SMOOTH AUTO SLIDER
  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ✅ HERO SECTION */}
      <div className="relative w-full min-h-[100vh] overflow-hidden bg-black">

        {/* ✅ BACKGROUND SLIDES */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === i ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
            <img
              src={slide.image}
              alt="hero"
              className="w-full h-full object-cover scale-105"
              loading="lazy"
            />
          </div>
        ))}

        {/* ✅ HERO CONTENT */}
        <div className="relative z-20 w-full px-4 md:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full min-h-[100vh] py-16">

            {/* ✅ LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 p-6 text-white text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mx-auto lg:mx-0">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium">
                  Trusted by 10,000+ Car Owners
                </span>
              </div>

              <h1 className="text-3xl sm:text-6xl md:text-6xl font-bold leading-tight">
                Find Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Perfect Car
                </span>
                <br />
                <span className="text-white/90">With Confidence</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                {slides[index]?.desc}
              </p>

              {/* ✅ STATS */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { icon: Shield, label: "Certified", value: "100% Verified" },
                  { icon: Zap, label: "Fast", value: "24h Delivery" },
                  { icon: TrendingUp, label: "Value", value: "Best Price" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center"
                  >
                    <item.icon className="w-7 h-7 text-cyan-400 mb-2 mx-auto" />
                    <div className="text-lg font-bold">{item.value}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* ✅ RESPONSIVE BUTTONS */}
              <div className="flex flex-row flex-wrap gap-3 pt-4 justify-center lg:justify-start">
                <Link to="/BrowesCars" className="w-[48%] sm:w-auto">
                  <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center whitespace-nowrap">
                    Explore
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link to="/QuickBooking" className="w-[48%] sm:w-auto">
                  <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 px-4 sm:px-6 py-3 rounded-xl font-semibold whitespace-nowrap">
                    Quick Booking
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
      </div>

      {/* ✅ NORMAL SECTIONS */}
      <HeroextraPage />
      <HomeAbout />

      {/* ✅ ✅ VIDEO SECTION — NOW AT BOTTOM (FOOTER KE PAAS) */}
      <div className="w-full  py-16 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* ✅ LEFT TEXT */}
          <div className="text-blue-600 space-y-5 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Experience the Thrill of Driving
              <span className="block text-black">
                Premium Indian Cars
              </span>
            </h2>

            <p className="text-black max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
              Book from the best collection of Indian cars with comfort, safety,
              and affordable pricing. Easy booking, fast delivery, trusted service.
            </p>

            <Link to="/BrowesCars">
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-semibold transition">
                Browse All Cars
              </button>
            </Link>
          </div>

          {/* ✅ RIGHT VIDEO */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <video
              className="w-full h-[220px] sm:h-[300px] md:h-[340px] object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://cdn.pixabay.com/video/2015/11/27/1406-147169807_tiny.mp4"
                type="video/mp4"
                autoPlay
                
              />
            </video>

            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-white font-bold text-lg sm:text-xl">
                Smooth Ride • Powerful Performance
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
