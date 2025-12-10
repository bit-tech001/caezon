import React, { useState } from "react";
import { toast } from "react-toastify";

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

const Booking = () => {
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

  // ✅ RAZORPAY PAYMENT + TOAST + SMS
  const handeleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.carType) {
      toast.warning("⚠️ Please fill all required fields");
      return;
    }

    setLoading(true);

    const options = {
      key: "rzp_test_YourKeyHere", // ✅ Replace with your real Razorpay key
      amount: 199 * 100, // ₹199
      currency: "INR",
      name: "CarZone Booking",
      description: "Car Booking Payment",
      image: "https://cdn-icons-png.flaticon.com/512/741/741407.png",

      handler: function (response) {
        toast("✅ Payment Successful! Booking Confirmed");

        const phoneNumber = "916002764980"; // ✅ Admin Number

        const message = `
PAID CAR BOOKING ✅

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Car: ${formData.carType}
Pickup: ${formData.pickupLocation}
Drop: ${formData.dropLocation}

Date: ${formData.pickupDate}
Time: ${formData.pickupTime}

Payment ID:
${response.razorpay_payment_id}
`;

        // ✅ Open SMS after success
        setTimeout(() => {
          window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
            message
          )}`;
        }, 1200);

        setLoading(false);
      },

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },

      theme: {
        color: "#facc15",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();

    razor.on("payment.failed", function () {
      toast.error("❌ Payment Failed. Please try again.");
      setLoading(false);
    });
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
            Secure Car Booking
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            ₹199 Booking Charge • 100% Secure Payment
          </p>
        </div>

        {/* ✅ FORM */}
        <form onSubmit={handeleSubmit} className="space-y-5 sm:space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={User} placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} />
            <Input icon={Phone} placeholder="Mobile Number" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={Mail} placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />
            <div className="relative">
              <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
              <select
                name="carType"
                required
                value={formData.carType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300"
              >
                <option value="">Select Car Type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Luxury</option>
                <option>Electric</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={MapPin} placeholder="Pickup Location" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} />
            <Input icon={MapPin} placeholder="Drop Location" name="dropLocation" value={formData.dropLocation} onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={Calendar} type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} />
            <Input icon={Clock} type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 text-yellow-500 w-5 h-5" />
            <textarea
              name="message"
              placeholder="Any Special Request"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300"
            />
          </div>

          {/* ✅ PAYMENT BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-2xl"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" /> Processing Payment...
              </>
            ) : (
              "Pay ₹199 & Book Now"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

/* ✅ INPUT COMPONENT */
const Input = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
    <input
      {...props}
      required
      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300"
    />
  </div>
);

export default Booking;
