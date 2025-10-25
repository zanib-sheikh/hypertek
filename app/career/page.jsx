"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const team = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  name: `Team Member ${i + 1}`,
  role: ["Designer", "Developer", "Manager", "Marketer"][i % 4],
  image: `https://randomuser.me/api/portraits/${
    i % 2 === 0 ? "men" : "women"
  }/${i + 20}.jpg`,
  email: `member${i + 1}@company.com`,
  linkedin: "#",
}));

export default function CareerPage() {
  return (
    <main className="min-h-screen font-serif bg-white text-gray-900 px-6 py-12">
      {/* HERO SECTION */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Join Our Creative Team
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          At <span className="font-semibold">YourBrand</span>, we believe in
          creativity, collaboration, and impact. Be part of a team shaping the
          future of design, technology, and storytelling.
        </p>
      </motion.div>

      {/* OUR TEAM SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Our Team
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden text-center hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-64"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-orange-700 transition"
                    >
                      <FaEnvelope size={18} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="text-gray-600 hover:text-orange-700 transition"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* WHY JOIN US */}
      <section className="mb-20 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Why Join Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            {
              title: "Creative Freedom",
              desc: "We believe great ideas come from everywhere. Your creativity has space to thrive here.",
            },
            {
              title: "Growth Culture",
              desc: "We invest in your personal and professional growth through workshops, mentorship, and challenges.",
            },
            {
              title: "Global Impact",
              desc: "Work with teams that build solutions seen and used by people around the world.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Apply for Work / Internship
        </h2>

        <motion.form
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree form ID
          method="POST"
          encType="multipart/form-data"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Position Interested In
              </label>
              <select
                name="position"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-gray-500 outline-none"
              >
                <option>Frontend Developer</option>
                <option>UI/UX Designer</option>
                <option>Marketing Intern</option>
                <option>Other</option>
              </select>
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/username"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            {/* GitHub */}
            <div>
              <label className="block text-sm font-medium mb-1">GitHub Profile</label>
              <input
                type="url"
                name="github"
                placeholder="https://github.com/username"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-gray-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about yourself..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition"
          >
            Submit Application
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
}
