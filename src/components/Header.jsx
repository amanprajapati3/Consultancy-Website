import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Choose from "../Pages/Choose";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import ScrollReveal from "./ScrollReveal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Why Choose Us",
      href: "#why-choose-us",
    },
    {
      name: "Contact Us",
      href: "#contact",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-0"
            : "bg-white backdrop-blur-sm py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5  lg:px-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex py-2 md:py-0"
            >
              <img src="/logo2.jpeg" alt="" className="md:w-20 w-12 md:h-20 h-12" /> <span className="mt-3 md:mt-7 font-bold md:text-xl"> <span className="text-sky-700">HR Edge</span> Consultants</span>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-slate-700 font-medium transition-all duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                  after:bg-blue-600
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="
                px-5
                py-2.5
                rounded-lg
                bg-blue-600
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-blue-700
                hover:scale-105
              "
              >
                Get Consultation
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-slate-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 pt-5" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-5 pb-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                  text-slate-700
                  font-medium
                  transition-all
                  duration-300
                  hover:text-blue-600
                "
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="
                w-fit
                px-5
                py-2.5
                rounded-lg
                bg-blue-600
                text-white
                font-medium
              "
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* sections */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <ScrollReveal direction="top">
          <AboutUs />
        </ScrollReveal>
      </div>
      <div id="services">
        <ScrollReveal direction="bottom">
          <Services />
        </ScrollReveal>
      </div>
      <div id="why-choose-us">
        <ScrollReveal direction="top">
          <Choose />
        </ScrollReveal>
      </div>
      <div id="contact">
        <ScrollReveal direction="top">
          <Contact />
        </ScrollReveal>
      </div>
    </>
  );
};

export default Header;
