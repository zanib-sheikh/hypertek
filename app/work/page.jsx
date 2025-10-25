"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkPage() {
  const [search, setSearch] = useState("");

  const workData = [
    { img: "/images/e1.jpg", title: "Creative Direction" },
    { img: "/images/e2.jpg", title: "Art Exhibition" },
    { img: "/images/e3.jpg", title: "Campaign Design" },
    { img: "/images/e4.jpg", title: "Brand Identity" },
    { img: "/images/e5.jpg", title: "Digital Experience" },
    { img: "/images/e6.jpg", title: "Product Launch" },
    { img: "/images/e7.jpg", title: "Interactive Media" },
    { img: "/images/e3.jpg", title: "3D Visuals" },
    { img: "/images/e4.jpg", title: "Event Production" },
    { img: "/images/e6.jpg", title: "Advertising Concept" },
    { img: "/images/e1.jpg", title: "Motion Graphics" },
    { img: "/images/e2.jpg", title: "Web Campaign" },
    { img: "/images/e3.jpg", title: "Retail Design" },
    { img: "/images/e4.jpg", title: "UI/UX Project" },
    { img: "/images/e5.jpg", title: "Editorial Design" },
    { img: "/images/36.jpg", title: "Packaging Concept" },
    { img: "/images/e7.jpg", title: "Photography Series" },
    { img: "/images/e6.jpg", title: "Film Direction" },
  ];

  const filteredWorks = workData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen font-serif bg-white text-gray-900 px-6 md:px-16 py-16">
      {/* Animated Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Where imagination meets craftsmanship.
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Discover our featured works — a blend of creativity, strategy, and impact.
        </p>

        {/* Animated Search Bar */}
      <motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="flex justify-center"
>
  <input
    type="text"
    placeholder="Search works..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full md:w-1/2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-lg outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
  />
</motion.div>

      </motion.div>

      {/* 3x6 Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover w-full h-64 opacity-90 group-hover:opacity-100 transition-all duration-300"
              priority={index < 3} // optimize above-the-fold images
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <motion.h2
                className="text-xl font-semibold text-white tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {item.title}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
