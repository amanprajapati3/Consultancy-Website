import React from "react";
import {
  Briefcase,
  GraduationCap,
  Globe,
  Code,
  ScrollIcon,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-10">
      <div className="max-w-7xl mx-auto sm:px-6 px-2 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Welcome To HRedge Consultants
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Delivering Exceptional Recruitment & HR Solutions
          </h2>

          <p className="max-w-4xl mx-auto text-gray-600 mt-6 text-lg leading-relaxed">
            HRedge Consultants is committed to helping organizations build
            stronger teams by connecting them with talented professionals across
            multiple industries. Through our client-focused approach, industry
            expertise and streamlined recruitment process, we deliver reliable
            hiring solutions tailored to every business requirement
          </p>
        </div>

        {/* Company Description */}
        {/* Company Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <Briefcase className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3">Recruitment Services</h3>

              <p className="text-gray-600 leading-7">
                We connect businesses with qualified professionals through
                efficient, transparent and reliable recruitment solutions across
                multiple industries.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <GraduationCap className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3">Talent Acquisition</h3>

              <p className="text-gray-600 leading-7">
                Our recruitment specialists identify skilled candidates that
                match your organization's goals, culture and long-term growth.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <ScrollIcon className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3">HR Consulting</h3>

              <p className="text-gray-600 leading-7">
                We provide customized HR solutions that simplify hiring,
                workforce planning and recruitment management for organizations.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <Globe className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>

              <p className="text-gray-600 leading-7">
                Serving businesses across diverse industries with professional
                hiring strategies tailored to every recruitment requirement.
              </p>
            </div>
          </div>

          {/* Right Side - Company Content */}
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
              Who We Are
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Your Reliable Recruitment Partner
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              HRedge Consultants is a trusted recruitment and staffing company
              dedicated to helping organizations hire skilled professionals
              while supporting candidates in finding meaningful career
              opportunities. Through our structured recruitment process, we
              bridge the gap between talented individuals and growing
              businesses.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              We believe every organization deserves the right talent and every
              professional deserves the right opportunity. Our experienced
              recruitment team works closely with clients to understand their
              hiring needs and delivers customized staffing solutions with
              speed, accuracy and professionalism.
            </p>

            <p className="text-gray-600 leading-8">
              Whether you require permanent recruitment, executive hiring,
              manpower solutions or HR consulting, HRedge Consultants is
              committed to delivering quality services built on trust,
              transparency and long-term partnerships.
            </p>

            <a
              href="#contact"
              className="inline-flex mt-8 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-16">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:-translate-y-2 transition">
            <Briefcase className="mx-auto text-blue-600 mb-4" size={42} />
            <h4 className="font-bold text-xl mb-2">Recruitment Services</h4>
            <p className="text-gray-600 text-sm">
              Practical HR solutions that support workforce planning,
              recruitment and employee management.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:-translate-y-2 transition">
            <GraduationCap className="mx-auto text-blue-600 mb-4" size={42} />
            <h4 className="font-bold text-xl mb-2">Industry Expertise</h4>
            <p className="text-gray-600 text-sm">
              Serving businesses across multiple sectors with customized
              recruitment strategies
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:-translate-y-2 transition">
            <ScrollIcon className="mx-auto text-blue-600 mb-4" size={42} />
            <h4 className="font-bold text-xl mb-2">HR Consulting</h4>
            <p className="text-gray-600 text-sm">
              Practical HR solutions that support workforce planning,
              recruitment and employee management..
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:-translate-y-2 transition">
            <Globe className="mx-auto text-blue-600 mb-4" size={42} />
            <h4 className="font-bold text-xl mb-2">Talent Acquisition</h4>
            <p className="text-gray-600 text-sm">
              Efficient sourcing strategies to identify the right professionals
              for every role
            </p>
          </div>
        </div> */}

        {/* Team Section */}
        {/* <div className="grid md:grid-cols-2 sm:gap-10 gap-5">
          {/* Kapil 
          <ScrollReveal direction="left">
          <div className="bg-gray-50 rounded-3xl sm:p-8 p-2 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-100">
                <img
                  src="/Person.png"
                  alt="Kapil Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Kapil Kumar
              </h3>

              <p className="text-blue-600 font-medium mt-2">
                Founder & Career Consultant
              </p>

              <div className="mt-5 flex items-center gap-2 text-gray-600">
                <GraduationCap size={18} />
                <span>BCA Graduate</span>
              </div>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Kapil Kumar provides consultancy services focused on job
                opportunities, career guidance, professional support, and
                helping candidates connect with suitable employment options.
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Aman 
          <ScrollReveal direction="right">
          <div className="bg-gray-50 rounded-3xl sm:p-8 p-2 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-100">
                <img
                  src="/Person.png"
                  alt="Aman Prajapati"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Aman Prajapati
              </h3>

              <p className="text-blue-600 font-medium mt-2">
                MERN Stack Developer
              </p>

              <div className="mt-5 flex items-center gap-2 text-gray-600">
                <Code size={18} />
                <span>BCA Graduate • Full Stack Developer</span>
              </div>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Aman specializes in modern web development using the MERN
                Stack (MongoDB, Express.js, React.js, Node.js). Businesses and
                startups can get custom websites, web applications, e-commerce
                solutions, and digital services tailored to their needs.
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div> */}

        {/* Stats */}
        <ScrollReveal direction="bottom">
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-8 mt-10">
            <div className="text-center bg-blue-50 sm:p-8 p-2 rounded-2xl">
              <Briefcase className="mx-auto text-blue-600 mb-4" size={40} />
              <h4 className="text-3xl font-bold text-gray-900">100+</h4>
              <p className="text-gray-600 mt-2">Job Consultations</p>
            </div>

            <div className="text-center bg-blue-50 p-8 rounded-2xl">
              <Globe className="mx-auto text-blue-600 mb-4" size={40} />
              <h4 className="text-3xl font-bold text-gray-900">50+</h4>
              <p className="text-gray-600 mt-2">Clients Assisted</p>
            </div>

            <div className="text-center bg-blue-50 p-8 rounded-2xl">
              <Code className="mx-auto text-blue-600 mb-4" size={40} />
              <h4 className="text-3xl font-bold text-gray-900">20+</h4>
              <p className="text-gray-600 mt-2">Web Projects Delivered</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-14 px-8">
            <h2 className="text-4xl font-bold">
              Let's Build Your Workforce Together
            </h2>

            <p className="max-w-3xl mx-auto mt-5 text-blue-100 text-lg leading-8">
              Whether you're looking to hire exceptional talent or searching for
              the right career opportunity, HRedge Consultants is here to
              support your recruitment journey with professional and reliable HR
              solutions.
            </p>

            <a
              href="#contact"
              className="inline-flex mt-8 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
            >
              Contact Our Team
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutUs;
