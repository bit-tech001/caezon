
import Cars from "../../data/cars.jsx";
import CarCard from "../CarCard.jsx";
import About from "./About.jsx";
import { Link } from "react-router-dom";
import cars from "../../data/cars.jsx";

const HeroextraPage = () => {
  // State to control how many cars to show initially
  

  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <div className="w-full h-auto min-h-[300px] bg-white flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-4xl text-center ">
          <img 
            src="../../../public/images/ss.png" 
            alt="Car banner" 
            className="w-full  mx-auto mb-20 "
          />
          <h1 className="font-bold text-gray-900 text-4xl md:text-5xl leading-tight">
            Experience{" "}
            <span className="text-blue-600 font-normal italic">
              "the road like never before"
            </span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Premium platform for buying, selling, and managing vehicles with complete transparency
          </p>
        </div>
      </div>

      {/* ================= CAR LISTINGS SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Section Header with View All Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Vehicles
            </h2>
            <p className="text-gray-600 mt-1">
              Browse our selection of premium cars
            </p>
          </div>
          
          {/* Desktop View All Button */}
          <Link to="/BrowesCars">
                      <button
         
            className="hidden md:flex items-center gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors duration-200 group"
          >
            <span>View All Vehicles</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          </Link>
         
        </div>

        {/* ================= CARS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        {/* Show only if there are more cars to load */}
        { Cars.length && (
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <div className="inline-flex flex-col items-center">
              <Link to="/BrowesCars">
                <button 
                className="bg-yellow-600 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="flex items-center justify-center gap-3">
                  <span>View All Vehicles</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              </Link>
            
              
              {/* Cars count indicator */}
              <p className="text-gray-500 text-sm mt-3">
                Showing {Math.min( cars.length)} of {cars.length} vehicles
              </p>
            </div>
          </div>
        )}

        

        {/* ================= ALTERNATIVE: If all cars are shown ================= */}
        { Cars.length && Cars.length > 0 && (
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>All {Cars.length} vehicles are displayed</span>
            </div>
          </div>
        )}
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="bg-blue-600 py-12 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-white mb-6 max-w-xl mx-auto ">
            Contact our team for personalized assistance in finding your perfect vehicle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/BrowesCars">
            <button className="bg-none  border text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Get Custom Recommendations
            </button>
          </Link>
             <Link to="/ContactUs">
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium px-8 py-3 rounded-lg transition-colors">
              Contact Sales Team
            </button>
             </Link>
          </div>
        </div>
          
      </div>
    </>
    
  );
};

export default HeroextraPage;