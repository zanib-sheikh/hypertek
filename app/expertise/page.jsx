"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExpertisePage() {
  const expertiseData = [
    {
      img: "/images/e1.jpg",
      title: "Creative Strategy",
      link: "/expertise/creative",
      desc: "Crafting bold ideas and innovative campaigns that bring your brand vision to life.",
    },
    {
      img: "/images/e2.jpg",
      title: "Brand Design",
      link: "/expertise/brand",
      desc: "We build distinctive, memorable brands through visual identity and storytelling.",
    },
    {
      img: "/images/e3.jpg",
      title: "Digital Innovation",
      link: "/expertise/digital",
      desc: "Empowering businesses with transformative digital tools and experiences.",
    },
    {
      img: "/images/e4.jpg",
      title: "Experience Design",
      link: "/expertise/experience",
      desc: "Designing seamless and engaging user journeys that captivate audiences.",
    },
    {
      img: "/images/e5.jpg",
      title: "Data & Analytics",
      link: "/expertise/data",
      desc: "Turning raw data into actionable insights that drive smarter decisions.",
    },
    {
      img: "/images/e6.jpg",
      title: "Content Production",
      link: "/expertise/content",
      desc: "Creating compelling content that connects emotionally and delivers results.",
    },
    {
      img: "/images/e7.jpg",
      title: "Technology Solutions",
      link: "/expertise/tech",
      desc: "Delivering reliable, scalable digital solutions built for the future.",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-serif">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto py-16 mb-12 px-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-serif mb-4 text-gray-900">
          The most powerful force in the universe isn’t technology. It’s imagination.
        </h1>
        <p className="text-lg text-gray-700">
          Explore our expertise through creativity, innovation, and technology.
        </p>
      </motion.div>

      {/* Expertise Sections */}
      <div className="flex flex-col items-center">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={1920}
              height={1080}
              className="object-cover w-full h-[40vh] md:h-[85vh]"
              priority={index === 0}
            />

            {/* Desktop Overlay */}
            <div className="hidden md:flex absolute inset-0 bg-black/40 flex-col items-center justify-center text-center">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-white text-3xl md:text-5xl font-semibold mb-3 tracking-wide drop-shadow-lg">
                  {item.title}
                </h2>
                <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto px-4">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="text-white/90 underline text-lg hover:text-white transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            </div>

            {/* Mobile Text Section (Left-aligned) */}
            <div className="md:hidden bg-white py-6 px-6 shadow-sm text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-3 text-base leading-relaxed">
                {item.desc}
              </p>
              <Link
                href={item.link}
                className="text-gray-900 underline text-lg hover:text-gray-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
