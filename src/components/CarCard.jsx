import React from "react";
import { Link } from "react-router-dom";
import { Fuel, Users, Gauge, CarFront } from "lucide-react";

const CarCard = ({ car }) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* ✅ IMAGE SECTION */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* ✅ PRICE BADGE */}
        <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-1 text-sm font-bold text-white shadow-md">
          ₹{car.price}
        </div>

        {/* ✅ VEHICLE TYPE BADGE */}
        <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur">
          <CarFront size={14} />
          {car.vehicletype}
        </div>

        {/* ✅ BRAND BADGE (BOTTOM ON IMAGE) */}
        <div className="absolute bottom-3 left-4 rounded-lg bg-red-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          {car.brand}
        </div>
      </div>

      {/* ✅ CONTENT */}
      <div className="flex flex-col gap-4 p-5">
        {/* ✅ TITLE */}
        <h2 className="text-lg font-bold tracking-wide text-gray-900 transition group-hover:text-blue-600">
          {car.name}
        </h2>

        {/* ✅ ICON DETAILS */}
        <div className="grid grid-cols-3 gap-3 text-xs text-gray-600">
          <div className="flex flex-col items-center gap-1 rounded-xl bg-gray-100 p-2">
            <Fuel size={16} className="text-blue-600" />
            <span>{car.fuel}</span>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-xl bg-gray-100 p-2">
            <Users size={16} className="text-blue-600" />
            <span>{car.seats}</span>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-xl bg-gray-100 p-2">
            <Gauge size={16} className="text-blue-600" />
            <span>{car.speed}</span>
          </div>
        </div>

        {/* ✅ BUTTONS */}
        <div className="flex gap-3 pt-3">
          {/* ✅ VIEW BUTTON */}
          <Link
            to={`/car/${car.id}`}
            className="flex-1 text-center rounded-xl border border-gray-300 py-2 text-sm font-semibold text-gray-800 transition hover:border-black hover:bg-black hover:text-white"
          >
            View
          </Link>

          {/* ✅ BOOK NOW BUTTON */}
          <Link
            to={`/car/${car.id}`}
            className="flex-1 text-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-2 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-blue-800"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
