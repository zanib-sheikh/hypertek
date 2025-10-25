"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const slides = [
  "/images/slide-1.jpg",
  "/images/Slide-2.jpg",
  "/images/slide-3.jpg",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen flex font-serif items-center" aria-label="Hero">
      {/* Background slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100 z-0" : "opacity-0 z-0"}`}
        >
          <Image src={src} alt={`slide ${i + 1}`} fill style={{ objectFit: "cover" }} priority sizes="100vw" />
        </div>
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 space-y-6 fade-in text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight font-serif">
           Economic Shift in Region
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Half Million Parcels | Business Success
          </p>
          <div className="flex gap-4">
            <Link href="/work" className="inline-block bg-white text-black px-5 py-3 rounded-md font-medium">
              See our work
            </Link>
            <Link href="/contact" className="inline-block border border-white/50 px-5 py-3 rounded-md">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>

      {/* pager */}
      <div className="absolute left-6 bottom-6 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`pager-dot ${i === idx ? "bg-white" : "bg-white/40"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
