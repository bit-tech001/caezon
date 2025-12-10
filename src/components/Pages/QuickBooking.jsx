import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  MessageSquare,
  Car,
  Loader2,
} from "lucide-react";

const QuickBooking = () => {
  const [loading, setLoading] = useState(false);

  const [formData, SetFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carType: "",
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: "",
    message: "",
  });

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handeleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const phoneNumber = "916002764980"; // ✅ ADMIN MOBILE NUMBER WITH 91

    const message = `
NEW CAR BOOKING REQUEST

Customer Details:
Name: ${formData.name}
Mobile: ${formData.phone}
Email: ${formData.email}

Ride Information:
Car Type: ${formData.carType}
Pickup Location: ${formData.pickupLocation}
Drop Location: ${formData.dropLocation}

Schedule:
Pickup Date: ${formData.pickupDate}
Pickup Time: ${formData.pickupTime}

Additional Message:
${formData.message || "N/A"}

— Auto Generated from Booking System
`;

    setTimeout(() => {
      setLoading(false);
      window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
        message
      )}`;
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-3 sm:px-6 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl bg-white/95 rounded-2xl sm:rounded-3xl shadow-2xl border border-yellow-400 p-4 sm:p-8 md:p-10"
      >
        {/* ✅ HEADER */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
            Quick Car Booking
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Fast • Secure • Affordable
          </p>
        </div>

        {/* ✅ FORM */}
        <form onSubmit={handeleSubmit} className="space-y-5 sm:space-y-6">

          {/* ✅ NAME + PHONE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={User} placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} />
            <Input icon={Phone} placeholder="Mobile Number" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          {/* ✅ EMAIL + CAR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={Mail} placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />

            <div className="relative">
              <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
              <select
                name="carType"
                required
                value={formData.carType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-500 bg-white text-sm sm:text-base"
              >
                <option value="">Select Car Type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Luxury</option>
                <option>Electric</option>
                <option>Supercar</option>
              </select>
            </div>
          </div>

          {/* ✅ PICKUP + DROP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={MapPin} placeholder="Pickup Location" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} />
            <Input icon={MapPin} placeholder="Drop Location" name="dropLocation" value={formData.dropLocation} onChange={handleChange} />
          </div>

          {/* ✅ DATE + TIME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={Calendar} type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} />
            <Input icon={Clock} type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} />
          </div>

          {/* ✅ MESSAGE */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 text-yellow-500 w-5 h-5" />
            <textarea
              name="message"
              placeholder="Any Special Request (Optional)"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-500 text-sm sm:text-base"
            />
          </div>

          {/* ✅ SUBMIT BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl transition text-base sm:text-lg"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" /> Processing...
              </>
            ) : (
              "Send Booking via SMS"
            )}
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
};

/* ✅ RESPONSIVE INPUT COMPONENT */
const Input = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
    <input
      {...props}
      required
      className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-500 bg-white text-sm sm:text-base"
    />
  </div>
);

export default QuickBooking;
