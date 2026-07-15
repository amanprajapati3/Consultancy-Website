import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldAlert, X } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Trusted HR & Recruitment Partner",
    title: "Connecting Talent With The Right Opportunities",
    description:
      "HRedge Consultants helps organizations hire skilled professionals and helps candidates find meaningful careers, backed by structured recruitment and dedicated HR consulting.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Built On Trust & Transparency",
    title: "Your Reliable Partner For Career Growth",
    description:
      "From permanent recruitment and executive hiring to workforce planning and interview preparation, we provide complete support at every step of your hiring journey.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Scam alert popup state
  const [showAlert, setShowAlert] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Show the scam alert popup 4.5 seconds after the page loads
  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setShowAlert(true);
    }, 4500);
    return () => clearTimeout(alertTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Scam Awareness Popup */}
      {showAlert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setShowAlert(false)}
          />

          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400" />

            <button
              onClick={() => setShowAlert(false)}
              aria-label="Close alert"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors duration-200"
            >
              <X size={18} />
            </button>

            <div className="px-6 sm:px-8 pt-8 pb-7 text-center">
              <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-red-100 border border-red-100 flex items-center justify-center">
                <ShieldAlert className="text-red-600" size={30} />
              </div>

              <span className="inline-block text-blue-600 font-semibold uppercase tracking-[2px] text-xs mb-2">
                Important Notice
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Beware of Scammers
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-2">
                HRedge Consultants{" "}
                <span className="font-semibold text-slate-900">
                  never charges candidates
                </span>{" "}
                any fee at any stage of the recruitment process.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm mb-7">
                If anyone asks you for money on our behalf, please report it
                and avoid making any payment.
              </p>

              <button
                onClick={() => setShowAlert(false)}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all duration-200"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
              currentSlide === index ? "scale-110" : "scale-100"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/30" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
              <div className="max-w-3xl text-white mx-auto text-center lg:mx-0 lg:text-left">
                <span className="inline-block text-blue-300 font-semibold uppercase tracking-[3px] text-xs sm:text-sm mb-4">
                  {slide.eyebrow}
                </span>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                  {slide.title}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                  <a
                    href="#contact"
                    className="group px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Free Consultation
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#services"
                    className="px-6 py-3 sm:px-8 sm:py-4 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center"
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
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 items-center justify-center"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 items-center justify-center"
      >
        <ChevronRight size={26} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8 sm:w-10"
                : "bg-white/50 w-2.5 sm:w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;