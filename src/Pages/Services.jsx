import React from "react";
import {
  Briefcase,
  Users,
  GraduationCap,
  Search,
  Globe,
  Code,
  ShoppingCart,
  Laptop,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const consultancyServices = [
  {
    icon: <Briefcase size={32} />,
    title: "Job Assistance",
    description:
      "Helping candidates find suitable job opportunities based on their skills and experience.",
  },
  {
    icon: <Users size={32} />,
    title: "Career Guidance",
    description:
      "Professional advice to help students and professionals choose the right career path.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Student Consultation",
    description:
      "Guidance for fresh graduates and students seeking career opportunities.",
  },
  {
    icon: <Search size={32} />,
    title: "Placement Support",
    description:
      "Connecting candidates with companies and helping them prepare for interviews.",
  },
];

const techServices = [
  {
    icon: <Globe size={32} />,
    title: "Business Websites",
    description:
      "Professional and responsive websites designed to establish your online presence.",
  },
  {
    icon: <Code size={32} />,
    title: "Custom Web Applications",
    description:
      "Tailored web solutions built using modern technologies like React and Node.js.",
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-Commerce Development",
    description:
      "Online stores with product management, payment integration, and modern UI.",
  },
  {
    icon: <Laptop size={32} />,
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, optimization, and technical assistance for your website.",
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        md:p-8 p-2
        border
        border-gray-100
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
          md:h-16 w-10 h-10
          rounded-xl
          bg-blue-50
          text-blue-600
          flex
          items-center
          justify-center
          mb-6
          group-hover:bg-blue-600
          group-hover:text-white
          transition-all
          duration-300
        "
      >
        {service.icon}
      </div>

      <h3 className="sm:text-xl text-md font-bold text-center text-gray-900 mb-3">{service.title}</h3>

      <p className="text-gray-600 text-md text-center leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-10 bg-gray-50">
      <div className="sm:max-w-7xl sm:mx-auto md:px-6 px-2 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Solutions For Careers & Businesses
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
            We provide professional consultancy services to help individuals
            build successful careers and modern web development services to help
            businesses grow online.
          </p>
        </div>

        {/* Consultancy Services */}
        <ScrollReveal direction="left">
        <div className="mb-10">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900">
              Consultancy Services
            </h3>

            <p className="text-gray-600 mt-3">
              Career support and professional guidance for students and job
              seekers.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-1">
            {consultancyServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* Web Development Services */}
        <ScrollReveal direction="right">
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900">
              Web Development Services
            </h3>

            <p className="text-gray-600 mt-3">
              Professional digital solutions for startups, businesses, and
              brands.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-1">
            {techServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal direction="bottom">
        <div className="mt-10">
          <div className="bg-blue-600 rounded-3xl p-5 md:p-14 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Career Guidance Or A Professional Website?
            </h3>

            <p className="max-w-2xl mx-auto text-blue-100">
              Whether you're looking for job opportunities, career consultation,
              or a modern website for your business, we're here to help.
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
              Get Free Consultation
            </a>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
