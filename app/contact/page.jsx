"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen font-serif bg-white text-gray-800 py-16 px-6 md:px-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Contact <span className="text-gray-900">Us</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
      >
        We’d love to hear from you! Whether you have a question, feedback, or just want to say hi — reach out to us below.
      </motion.p>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600">
            Fill out the form, and we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> support@yourdomain.com</p>
            <p><strong>Phone:</strong> +92 300 1234567</p>
            <p><strong>Address:</strong> Islamabad, Pakistan</p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:ring-2 focus:ring-green-700 outline-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-full w-full font-semibold hover:bg-green-800 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
