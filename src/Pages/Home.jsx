import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    title: "Connecting Talent With Global Opportunities",
    description:
      "HRedgeConsultants helps professionals and students achieve their dreams through overseas jobs, work visas, immigration support, and career guidance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    title: "Your Trusted Partner For Overseas Careers",
    description:
      "From recruitment and documentation to visa assistance and interview preparation, we provide complete support for your international career journey.",
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>

                <div className="flex flex-nowrap sm:gap-4 gap-2">
                  <a
                    href="#contact"
                    className="sm:px-8 p-2 sm:py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                  >
                    Free Consultation
                  </a>

                  <a
                    href="#services"
                    className="sm:px-8 p-2 sm:py-4 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-10"
                : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;