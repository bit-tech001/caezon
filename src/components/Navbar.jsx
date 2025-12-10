import { useState } from "react";
import { NavLink ,Link} from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeClass =
    "text-blue-600 font-bold border-b-2 border-blue-600";
  const normalClass = "hover:text-blue-600";

  return (
    <>
      {/* ✅ TOP NAVBAR */}
      <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">

          <h1 className="text-3xl font-bold text-blue-500 p-2">CarZone</h1>
       

          {/* ✅ DESKTOP MENU */}
          <ul className="hidden md:flex gap-16 text-sm font-medium">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/BrowesCars"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Browse Cars
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/ContactUs"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Contact Us
              </NavLink>
            </li>

          </ul>

            <Link to="/BrowesCars">
               <button className="hidden md:flex bg-blue-600 text-white p-2 hover:bg-black rounded-lg w-36 text-center justify-center">
            Get Start
          </button>
            </Link>

          {/* ✅ HAMBURGER */}
          <button
            className="md:hidden text-3xl p-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ✅ DARK OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}

      {/* ✅ MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6
        transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 text-lg font-medium mt-16">

          <li>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/About"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/BrowesCars"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Browse Cars
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/ContactUs"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Contact Us
            </NavLink>
          </li>

        </ul>
      </div>
    </>
  );
};

export default Navbar;
