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
    title: "Trusted Recruitment Partner",
    description:
      "We build long-term relationships by providing transparent recruitment solutions that employers and candidates can rely on.",
  },
  {
    icon: <Users size={34} />,
    title: "Experienced HR Professionals",
    description:
      "Our recruitment specialists understand industry requirements and connect organizations with the right talent.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Customized Hiring Solutions",
    description:
      "Every business has unique hiring needs, and we deliver recruitment strategies tailored to those requirements.",
  },
  {
    icon: <Laptop size={34} />,
    title: "Industry-Focused Expertise",
    description:
      "We serve businesses across multiple industries with professional recruitment and staffing solutions.",
  },
  {
    icon: <Clock3 size={34} />,
    title: "Fast Hiring Process",
    description:
      "Our streamlined recruitment process helps businesses reduce hiring time while maintaining quality standards.",
  },
  {
    icon: <Headphones size={34} />,
    title: "Dedicated Client Support",
    description:
      "From requirement analysis to successful placement, our team remains committed to providing continuous support.",
  },
];

const Choose = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto md:px-6 px-2 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
            Why Choose HRedge Consultants
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Your Trusted Recruitment & HR Partner
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            We combine industry knowledge, professional recruitment practices
            and a client-focused approach to deliver hiring solutions that help
            businesses build stronger teams while creating valuable career
            opportunities for talented professionals.
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
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="mt-2 text-gray-700 font-medium">
                Successful Placements
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-4xl font-bold text-blue-600">100+</h3>
              <p className="mt-2 text-gray-700 font-medium">
                Corporate Clients
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-4xl font-bold text-blue-600">15+</h3>
              <p className="mt-2 text-gray-700 font-medium">
                Industries Served
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-4xl font-bold text-blue-600">98%</h3>
              <p className="mt-2 text-gray-700 font-medium">
                Client Satisfaction
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className="mt-16 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-8 md:p-14 text-center text-white">
            <span className="uppercase tracking-[3px] text-blue-200">
              Let's Connect
            </span>

            <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Looking For The Right Recruitment Partner?
            </h3>

            <p className="max-w-3xl mx-auto text-blue-100 text-lg leading-8">
              Whether you're seeking skilled professionals for your organization
              or exploring new career opportunities, HRedge Consultants is
              committed to delivering reliable recruitment and HR solutions with
              professionalism, efficiency and integrity.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center mt-8 px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:scale-105 transition"
            >
              Contact Our Team
            </a>
          </div> */}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Choose;
