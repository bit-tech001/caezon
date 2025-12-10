import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Car<span className="text-blue-400">Zone</span>
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Best car services platform for buying, selling and managing vehicles.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="ContactUs" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Services</h2>
          <ul className="space-y-2">
            <li>Car Buy</li>
            
            <li>Car Insurance</li>
            <li>Car Finance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 Guwahati, Assam</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@carzone.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CarZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
