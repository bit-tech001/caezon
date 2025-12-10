import React from "react";
import cars from './../../data/cars'

const About = () => {
      
  const totalCars = cars.length;

  return (
    <>
      <div className="w-full min-h-screen bg-gray-50">
        
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 p-3">About Us</h1>
            <p className="text-lg text-gray-100">
              Your trusted destination for car rental and car buying services
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              CarZone is a modern car rental and car selling platform where you
              can easily rent premium cars or purchase your dream vehicle at
              the best price. We focus on quality, trust, and customer
              satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you need a car for daily travel, a luxury ride for a
              special occasion, or want to buy a reliable vehicle — CarZone
              makes the entire process simple, fast, and transparent.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="About CarZone"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 shadow rounded-xl">
              <h2 className="text-4xl font-bold text-blue-600"> {totalCars} +</h2>
              <p className="text-gray-600 mt-2">Cars Available</p>
            </div>
            <div className="p-6 shadow rounded-xl">
              <h2 className="text-4xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div className="p-6 shadow rounded-xl">
              <h2 className="text-4xl font-bold text-blue-600">6+</h2>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
            <div className="p-6 shadow rounded-xl">
              <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
              <p className="text-gray-600 mt-2">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission at CarZone is to provide reliable, affordable, and
            high-quality car rental and car selling services with complete
            transparency. We aim to make mobility easier and help every
            customer find the perfect car with confidence.
          </p>
        </div>
        

      </div>
      
    </>
  );
};

export default About;
