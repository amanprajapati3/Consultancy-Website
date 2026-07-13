import React from "react";
import {
  Briefcase,
  Users,
  UserCheck,
  Building2,
  ClipboardList,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    icon: <Briefcase size={34} />,
    title: "Permanent Recruitment",
    description:
      "We help organizations hire talented professionals for long-term positions through a structured and efficient recruitment process.",
  },
  {
    icon: <Users size={34} />,
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions that help businesses quickly scale their workforce for temporary and project-based requirements.",
  },
  {
    icon: <UserCheck size={34} />,
    title: "Executive Search",
    description:
      "Identifying experienced leaders and senior professionals who can drive business growth and organizational success.",
  },
  {
    icon: <Building2 size={34} />,
    title: "HR Consulting",
    description:
      "Professional HR solutions covering recruitment planning, workforce management and hiring strategies.",
  },
  {
    icon: <ClipboardList size={34} />,
    title: "Bulk Hiring",
    description:
      "Efficient recruitment support for organizations looking to hire multiple candidates within short timelines.",
  },
  {
    icon: <BadgeCheck size={34} />,
    title: "Talent Acquisition",
    description:
      "Connecting businesses with skilled professionals through industry-focused talent sourcing and screening.",
  },
];

const ServiceCard = ({ service }) => (
  <div className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl text-center transition-all duration-300 hover:-translate-y-2">

    <center>
    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition mb-6">
      {service.icon}
    </div>
    </center>

    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
      {service.title}
    </h3>

    <p className="text-gray-600 leading-7">
      {service.description}
    </p>
   <center>
    <button className="flex items-center gap-2 mt-6 text-blue-600 font-semibold group-hover:gap-3 transition-all">
      Learn More
      <ArrowRight size={18} />
    </button>
</center>
  </div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal direction="bottom">
          <div className="text-center mb-16">

            <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
              What We Offer
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Professional Recruitment & HR Solutions
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
              HRedge Consultants provides comprehensive recruitment and HR
              services designed to help businesses build exceptional teams while
              supporting professionals in finding rewarding career
              opportunities.
            </p>

          </div>
        </ScrollReveal>

        <ScrollReveal direction="bottom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}

          </div>
        </ScrollReveal>

        

      </div>
    </section>
  );
};

export default Services;