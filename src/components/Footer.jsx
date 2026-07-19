import React from "react";
import {
  MapPin,
  ArrowUp,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid text-center md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              HRedge
              <span className="text-blue-500"> Consultant</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our core services include Executive Search, Talent Mapping, Leadership Hiring, and Strategic HR Consulting. We are committed to delivering personalized solutions with integrity and efficiency.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              >
               <CiFacebook size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <CiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#why-choose-us"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Why Choose Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-default">Executive Search</li>
  <li className="hover:text-white cursor-default">Leadership Hiring</li>
  <li className="hover:text-white cursor-default">CXO Search</li>
    <li className="hover:text-white cursor-default">Confidential Hiring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl text-center font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-5">
              <div className="flex justify-center gap-2">
                <MdEmail
                  size={20}
                  className="text-blue-500 mt-1"
                />

                <div>
                  <p className="text-gray-400 hover:text-white">
                     <a href="mailto:info@hredgeconsultant.in">info@hredgeconsultant.in</a>
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <FaPhoneAlt
                  size={18}
                  className="text-blue-500 mt-1"
                />

                <div>
                  <p className="text-gray-400 hover:text-white">
                    <a href="tel:+91 81305 87559">+91 81305 87559</a>
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <MapPin
                  size={18}
                  className="text-blue-500 mt-1 "
                />

                <div>
                  <p className="text-gray-400 hover:text-white cursor-default">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-center md:text-left">
              © {currentYear} All Rights Reserved.
            </p>

            <p className="text-gray-500 text-center">
              Designed & Developed by{" "}
              <span className="text-blue-400 font-medium">
                HRedge Team
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* whatsapp redirection button */}
      <a
  href="https://wa.me/918130587559?text=Hello%20I%20need%20consultation"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-20
    right-6
    w-14
    h-14
    rounded-full
    bg-green-500
    hover:bg-green-600
    text-white
    shadow-lg
    flex
    items-center
    justify-center
    transition-all
    duration-300
    hover:scale-110
    z-50
    animate-bounce
  "
>
  <FaWhatsapp size={28} />
</a>

      {/* Scroll Top Button */}
      <a
        href="#home"
        className="
          fixed
          bottom-6
          right-6
          w-12
          h-12
          rounded-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          shadow-lg
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          z-50
        "
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;