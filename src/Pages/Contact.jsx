import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";
import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xjgzdewn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      console.log("Status:", response.status);
      console.log("Response:", data);

      if (response.ok) {
        toast.success("Form submitted successfully!");
        e.target.reset();
      } else {
        toast.error(data.error || "Failed to submit form.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-10 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto sm:px-6 px-2 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Let's Discuss Your Requirements
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Looking for career guidance, job opportunities, or website
            development services? Fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="bg-blue-600 rounded-3xl  p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-1 md:space-y-8">
                <div className="flex  gap-4">
                  <Mail />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-blue-100 break-all">Kapil@HRedgeConsultants.org</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-blue-100">+91 81305 87559</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-blue-100">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-3xl shadow-lg md:p-8 p-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full max-w-full border rounded-xl px-4 py-3"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full max-w-full border rounded-xl px-4 py-3"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full max-w-full border rounded-xl px-4 py-3"
                />

                <select
                  name="service"
                  required
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option value="">Select Service</option>

                  <option>Recruitment Services</option>

                  <option>Talent Acquisition</option>

                  <option>HR Consulting</option>

                  <option>Executive Hiring</option>

                  <option>Career Guidance / Job Assistance</option>
                </select>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full max-w-full border rounded-xl px-4 py-3"
                />

                {/* Resume Upload */}
                <div>
                  <label className="block mb-2 font-medium">
                    Resume Google Drive Link (Optional)
                  </label>

                  <input
                    type="url"
                    name="resumeLink"
                    placeholder="Paste Google Drive Resume Link"
                    className="w-full max-w-full border rounded-xl px-4 py-3"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-2
                "
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
