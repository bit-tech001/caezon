import React, { useState } from "react";
import cars from "../../data/cars";
import { Link } from "react-router-dom";
import { Fuel, Users, Gauge, CarFront } from "lucide-react";

const BrowesCars = () => {
  const [price, setPrice] = useState(100000000);
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState("");

  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

  // ✅ SEARCH
  const getData = (e) => {
    setData(e.target.value.toLowerCase());
  };

  // ✅ CHECKBOX HANDLER
  const handleCheckbox = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // ✅ ✅ CORRECT CLEAR FILTER FUNCTION
  const clearFilter = () => {
    setPrice(100000000);
    setSelectedBrand([]);
    setSelectedFuel([]);
    setSelectedType([]);
    setData("");
  };

  // ✅ FILTER LOGIC
  const filterOut = cars.filter((car) => {
    const priceMatch = price === 5000 || Number(car.price) <= Number(price);

    const brandMatch =
      selectedBrand.length === 0 || selectedBrand.includes(car.brand);

    const fuelMatch =
      selectedFuel.length === 0 || selectedFuel.includes(car.fuel);

    const typeMatch =
      selectedType.length === 0 || selectedType.includes(car.vehicletype);

    const searchMatch = car.name.toLowerCase().includes(data);

    return priceMatch && brandMatch && fuelMatch && typeMatch && searchMatch;
  });

  return (
    <div className="w-full min-h-screen mt-16 bg-gray-100 overflow-x-hidden">

      {/* ✅ SEARCH BAR */}
      <div className="w-full bg-blue-950 py-4 px-4 flex flex-col items-center justify-center gap-5">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search by car name..."
            value={data}
            onChange={getData}
            className="w-full rounded-full px-6 py-4 pr-16 text-gray-800 outline-none shadow-lg focus:ring-2 focus:ring-blue-400"
          />

          <button className="absolute right-2 top-1/2 -translate-y-1/2 border hover:bg-blue-700 hover:text-white text-black px-5 py-2 rounded-full font-semibold transition">
            Search
          </button>
        </div>

        <button
          onClick={() => setShowFilter(!showFilter)}
          className="sm:hidden bg-white text-black px-6 py-3 rounded-full font-semibold shadow"
        >
          {!showFilter ? "Open Filters" : "Close"}
        </button>
      </div>

      {/* ✅ MAIN LAYOUT */}
      <div className="flex flex-col sm:flex-row gap-6 p-4 sm:p-10 relative">

        {/* ✅ FILTER SIDEBAR */}
        <div
          className={`bg-white p-6 rounded-xl shadow-lg space-y-4 w-full sm:w-80 
          max-h-[80vh] overflow-y-auto sticky top-24 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <h2 className="font-bold text-2xl border-b pb-2">All Filters</h2>

          {/* ✅ CLEAR FILTER BUTTON */}
          <button
            onClick={clearFilter}
            className="w-full bg-none hover:bg-red-600 hover:text-white text-red border py-2 rounded-lg font-semibold transition"
          >
            Clear All Filters
          </button>

          {/* ✅ PRICE */}
          <div>
            <h3 className="font-semibold mb-2">Price Per Day</h3>
            <input
              type="range"
              min="5000"
              max="100000000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-sm mt-1 text-gray-700">
              {price === 5000 ? "All Prices" : `Up to ₹${price}`}
            </p>
          </div>

          {/* ✅ BRAND */}
          <div>
            <h3 className="font-semibold mb-2">Brand</h3>
            {["Tata", "Mahindra", "Hyundai", "Maruti"].map((brand) => (
              <label key={brand} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrand.includes(brand)}
                  onChange={() => handleCheckbox(brand, setSelectedBrand)}
                />
                {brand}
              </label>
            ))}
          </div>

          {/* ✅ FUEL */}
          <div>
            <h3 className="font-semibold mb-2">Fuel Type</h3>
            {["Petrol", "Diesel", "Electric"].map((fuel) => (
              <label key={fuel} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={selectedFuel.includes(fuel)}
                  onChange={() => handleCheckbox(fuel, setSelectedFuel)}
                />
                {fuel}
              </label>
            ))}
          </div>

          {/* ✅ VEHICLE TYPE */}
          <div>
            <h3 className="font-semibold mb-2">Vehicle Type</h3>
            {["Sedan", "SUV", "Hatchback", "Luxury", "Supercar"].map((type) => (
              <label key={type} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={selectedType.includes(type)}
                  onChange={() => handleCheckbox(type, setSelectedType)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* ✅ RIGHT SIDE CARS */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filterOut.length === 0 ? (
            <h1 className="col-span-full text-center text-xl font-bold">
              No Cars Found 😢
            </h1>
          ) : (
            filterOut.map((car) => (
              <div
                key={car.id}
                className="group relative w-full max-w-sm overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* ✅ IMAGE */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute top-4 right-4 rounded-full bg-green-500 px-4 py-1 text-sm font-bold text-white">
                    ₹{car.price}
                  </div>

                  <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-bold">
                    <CarFront size={14} />
                    {car.vehicletype}
                  </div>

                  <div className="absolute bottom-3 left-3 rounded-md bg-red-500/90 px-3 py-1 text-xs font-bold text-white">
                    {car.brand}
                  </div>
                </div>

                {/* ✅ CONTENT */}
                <div className="flex flex-col gap-5 p-5">
                  <h2 className="text-lg font-bold group-hover:text-blue-600 transition">
                    {car.name}
                  </h2>

                  <div className="grid grid-cols-3 gap-3 text-xs text-gray-600">
                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-xl">
                      <Fuel size={16} className="text-blue-600" />
                      <span>{car.fuel}</span>
                    </div>

                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-xl">
                      <Users size={16} className="text-blue-600" />
                      <span>{car.seats}</span>
                    </div>

                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-xl">
                      <Gauge size={16} className="text-blue-600" />
                      <span>{car.speed}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to={`/car/${car.id}`}
                      className="flex-1 text-center rounded-xl border py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
                    >
                      View
                    </Link>

                    <Link
                      to={`/car/${car.id}`}
                      className="flex-1 rounded-xl bg-blue-600 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700 transition"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default BrowesCars;
