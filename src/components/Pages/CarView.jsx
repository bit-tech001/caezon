import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cars from "../../data/cars";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Fuel,
  Users,
  Gauge,
  IndianRupee,
  MapPin,
  Phone,
  CreditCard,
  ArrowLeft,
} from "lucide-react";

const BookingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const car = cars.find((item) => item.id === Number(id));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [days, setDays] = useState(1);
  const [detecting, setDetecting] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        Car Not Found 😢
      </div>
    );
  }

  const totalPrice = Number(car.price) * Number(days);

  // ✅ AUTO DETECT LOCATION
  const detectLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      return;
    }

    setDetecting(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
          );
          const data = await res.json();

          const location =
            data.city ||
            data.locality ||
            data.principalSubdivision ||
            "Current Location";

          setPickup(location);
          toast.success("✅ Pickup location detected!");
        } catch (error) {
          toast.error("Failed to fetch location");
        }

        setDetecting(false);
      },
      () => {
        toast.error("Location permission denied");
        setDetecting(false);
      }
    );
  };

  // ✅ PAYMENT HANDLER
  const handlePayment = (e) => {
    e.preventDefault(); // ✅ reload STOP

    if (!name || !phone || !pickup || !drop) {
      toast.warning("Please fill all details!");
      return;
    }

    toast.success(
      `✅ Booking Successful!\n\nCar: ${car.name}\nTotal: ₹${totalPrice}`
    );

    // ✅ FORM RESET AFTER SUBMIT
    setName("");
    setPhone("");
    setPickup("");
    setDrop("");
    setDays(1);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-20 pb-14 px-4">

      {/* ✅ BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 mb-4 text-sm font-semibold border px-3 py-1.5 rounded-lg hover:bg-black hover:text-white transition"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* ✅ MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-6 sm:p-10 rounded-2xl border">

        {/* ✅ LEFT — CAR SUMMARY */}
        <div>
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-[260px] sm:h-[360px] object-cover rounded-xl"
          />

          <h2 className="mt-4 text-2xl font-bold">{car.name}</h2>
          <p className="text-sm text-gray-500">
            {car.brand} • {car.vehicletype}
          </p>

          <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
            <div className="flex flex-col items-center border p-3 rounded-lg">
              <Fuel className="text-blue-600" />
              {car.fuel}
            </div>

            <div className="flex flex-col items-center border p-3 rounded-lg">
              <Users className="text-blue-600" />
              {car.seats}
            </div>

            <div className="flex flex-col items-center border p-3 rounded-lg">
              <Gauge className="text-blue-600" />
              {car.speed}
            </div>
          </div>

          <div className="mt-4 text-lg font-bold text-green-600 flex items-center gap-2">
            <IndianRupee />
            {car.price} / day
          </div>
        </div>

        {/* ✅ RIGHT — BOOKING FORM */}
        <form onSubmit={handlePayment}>
          <h3 className="text-xl font-bold mb-4">Complete Your Booking</h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {/* ✅ PICKUP + AUTO DETECT */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full border p-3 rounded-lg"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />

              <button
                type="button"
                onClick={detectLocation}
                disabled={detecting}
                className="px-4 bg-black text-white rounded-lg hover:bg-blue-700 transition"
              >
                {detecting ? "..." : "Detect"}
              </button>
            </div>

            <input
              type="text"
              placeholder="Drop Location"
              className="w-full border p-3 rounded-lg"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />

            <input
              type="number"
              min="1"
              placeholder="Number of Days"
              className="w-full border p-3 rounded-lg"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>

          {/* ✅ TOTAL PRICE */}
          <div className="mt-5 p-4 border rounded-lg bg-gray-50 text-lg font-bold flex justify-between">
            <span>Total Payable:</span>
            <span className="text-green-600">₹{totalPrice}</span>
          </div>

          {/* ✅ PAYMENT BUTTON */}
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <CreditCard size={18} />
            Pay & Book Now
          </button>

          {/* ✅ SUPPORT */}
          <a
            href="tel:+916002764980"
            className="w-full mt-4 flex items-center justify-center gap-2 border py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
          >
            <Phone size={18} />
            Call Support
          </a>
        </form>
      </div>

      {/* ✅ LOCATION + MAP */}
      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <MapPin className="text-blue-600" />
            Our Location
          </h3>

          <p className="text-gray-600 mb-4">
            Visit our office or choose pickup from your location. We serve
            across Assam with premium service.
          </p>

          <div className="text-sm space-y-2">
            <p>📍 Guwahati, Assam, India</p>
            <p>📞 +91 60027 64980</p>
            <p>⏰ 9:00 AM – 9:00 PM</p>
          </div>
        </div>

        <div className="w-full h-[260px] sm:h-[340px] rounded-xl overflow-hidden border">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Guwahati,Assam,India&output=embed"
            width="100%"
            height="100%"
            className="border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
