import React from "react";
import { Briefcase, GraduationCap, Globe, Code, ScrollIcon } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-10">
      <div className="max-w-7xl mx-auto sm:px-6 px-2 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Your Trusted Career & Technology Partner
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg">
            We help students and professionals discover career opportunities,
            job placements, consultancy services, and technology solutions
            designed to support growth and success.
          </p>
        </div>

        {/* Company Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center sm:mb-10 mb-5">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Consultancy"
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Helping People Build Better Careers
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              Our consultancy focuses on helping individuals find suitable
              career opportunities, professional guidance, and placement
              support. We work closely with candidates to connect them with
              organizations and opportunities that match their skills and
              ambitions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Along with career consultancy, we also provide website
              development and digital solutions for businesses looking to
              establish a strong online presence.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-2 sm:gap-10 gap-5">
          {/* Kapil */}
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

          {/* Aman */}
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
        </div>

        {/* Stats */}
        <ScrollReveal direction="bottom">
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-8 mt-10">
          <div className="text-center bg-blue-50 sm:p-8 p-2 rounded-2xl">
            <Briefcase className="mx-auto text-blue-600 mb-4" size={40} />
            <h4 className="text-3xl font-bold text-gray-900">100+</h4>
            <p className="text-gray-600 mt-2">Career Consultations</p>
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
        <div className="mt-10 bg-blue-600 rounded-3xl text-center sm:p-10 p-5 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Looking For Career Guidance Or Website Development?
          </h3>

          <p className="max-w-2xl mx-auto text-blue-100">
            Whether you're searching for job opportunities or need a modern
            website for your business, our team is ready to help.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutUs;