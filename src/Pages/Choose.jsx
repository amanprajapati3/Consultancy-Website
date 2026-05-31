import React from "react";
import {
  ShieldCheck,
  Users,
  Briefcase,
  Clock3,
  Laptop,
  Headphones,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const reasons = [
  {
    icon: <ShieldCheck size={34} />,
    title: "Trusted Guidance",
    description:
      "We provide honest and practical advice to help candidates and businesses make the right decisions.",
  },
  {
    icon: <Users size={34} />,
    title: "Personalized Support",
    description:
      "Every client receives individual attention and solutions tailored to their specific needs.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Career Opportunities",
    description:
      "We help job seekers discover opportunities that align with their skills, qualifications, and goals.",
  },
  {
    icon: <Laptop size={34} />,
    title: "Modern Web Solutions",
    description:
      "Professional websites and web applications built with modern technologies and best practices.",
  },
  {
    icon: <Clock3 size={34} />,
    title: "Quick Response",
    description:
      "We value your time and strive to provide fast communication and timely project delivery.",
  },
  {
    icon: <Headphones size={34} />,
    title: "Ongoing Assistance",
    description:
      "From consultation to project completion, we remain available to support and guide our clients.",
  },
];

const Choose = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto md:px-6 px-2 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            The Right Partner For Your Success
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Whether you're searching for career opportunities or looking to
            establish your business online, we provide reliable guidance,
            professional support, and modern solutions designed for success.
          </p>
        </div>

        {/* Features Grid */}
        <ScrollReveal direction="left">
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-8 gap-1">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-gray-100
                rounded-2xl
                md:p-8 p-0.5
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all 
                duration-300
                group
              "
            >
              <div
                className="
                  md:w-16
                  md:h-16
                  w-10 h-10
                  rounded-xl
                  bg-blue-50
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  mb-6
                  transition-all
                  duration-300
                  group-hover:bg-blue-600
                  group-hover:text-white
                "
              >
                {reason.icon}
              </div>

              <h3 className="md:text-xl text-center text-md font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* Statistics */}
        <ScrollReveal direction="right">
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-2">
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="mt-2 text-gray-700 font-medium">
              Career Consultations
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="mt-2 text-gray-700 font-medium">Happy Clients</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">20+</h3>
            <p className="mt-2 text-gray-700 font-medium">Web Projects</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>
            <p className="mt-2 text-gray-700 font-medium">Dedicated Support</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-5 md:p-14 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready To Take The Next Step?
          </h3>

          <p className="max-w-2xl mx-auto text-blue-100">
            Whether you need career guidance, job assistance, or a professional
            website for your business, our team is ready to help you achieve
            your goals.
          </p>

          <a
            href="#contact"
            className="
              inline-block
              mt-8
              px-8
              py-4
              bg-white
              text-blue-600
              font-semibold
              rounded-xl
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Contact Us Today
          </a>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Choose;
