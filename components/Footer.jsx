"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white pt-16 pb-10 mt-20"
    >
      <div className="max-w-7xl font-serif mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold">Hypetek</h2>
          <p className="text-sm text-orange-100 mt-3 leading-relaxed">
            We craft impactful digital experiences with creativity, precision, and passion.
          </p>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-orange-100">
            <li><a href="/work" className="hover:text-white transition">Work</a></li>
            <li><a href="/expertise" className="hover:text-white transition">Expertise</a></li>
            <li><a href="/career" className="hover:text-white transition">Career</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-orange-100">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
            <li><a href="#" className="hover:text-white transition">Events</a></li>
          </ul>
        </div>

        {/* Column 4 - Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <p className="text-sm text-orange-100 mb-4">info@yourbrand.com</p>
          <div className="flex justify-center md:justify-start gap-5">
            <a href="mailto:info@yourbrand.com" className="hover:text-white transition">
              <FaEnvelope size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
              <FaLinkedin size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-500 mt-12 pt-4 text-center text-xs text-orange-100">
        © {new Date().getFullYear()} <span className="font-semibold">YourBrand</span>. All rights reserved.
      </div>
    </motion.footer>
  );
}
