"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full z-40 bg-white backdrop-blur-sm font-serif shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="font-bold text-gray-900 text-2xl">
            Hypetek
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-7 text-gray-600 text-sm mt-3 md:mt-0">
          <Link href="/work" className="hover:text-gray-900 transition">
            Work
          </Link>
          <Link href="/expertise" className="hover:text-gray-900 transition">
            Expertise
          </Link>
          <Link href="/career" className="hover:text-gray-900 transition">
            Career
          </Link>
          <Link href="/contact" className="hover:text-gray-900 transition">
            Contact
          </Link>
          <Link href="/cta" className="hover:text-gray-900 transition">
            CTA
          </Link>
        </nav>
      </div>
    </header>
  );
}
