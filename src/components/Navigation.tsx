"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Accueil", key: "home" },
    { href: "/services", label: "Services", key: "services" },
    { href: "#temoignages", label: "Témoignages", key: "temoignages" },
    { href: "#contact", label: "Contact", key: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#faf6ef]/95 backdrop-blur-sm shadow-[0_2px_32px_rgba(42,35,24,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 overflow-hidden rounded-full border-2 border-[#2D7D46]/20 group-hover:border-[#2D7D46]/60 transition-colors duration-300">
                <Image
                  src="/assets/logo.png"
                  alt="Chez Dog & Kat"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="leading-none">
                <div
                  className={`font-display font-semibold text-xl lg:text-2xl tracking-wide transition-colors duration-300 ${
                    scrolled || menuOpen ? "text-[#2a2318]" : "text-[#faf6ef]"
                  }`}
                >
                  Chez Dog & Kat
                </div>
                <div
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                    scrolled || menuOpen
                      ? "text-[#2D7D46]"
                      : "text-[#faf6ef]/70"
                  }`}
                >
                  Pension · Soins Naturels
                </div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`nav-link font-body text-sm tracking-wide transition-colors duration-300 ${
                    activePage === link.key
                      ? "active text-[#2D7D46]"
                      : scrolled
                      ? "text-[#2a2318] hover:text-[#2D7D46]"
                      : "text-[#faf6ef]/90 hover:text-[#faf6ef]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:0698701699"
                className="btn-primary text-xs py-3 px-5 ml-4"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                </svg>
                06 98 70 16 99
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${
                scrolled || menuOpen ? "text-[#2a2318]" : "text-[#faf6ef]"
              }`}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden bg-[#faf6ef] transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-4 border-t border-[#2D7D46]/10">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-body text-base tracking-wide py-2 border-b border-[#2a2318]/05 ${
                  activePage === link.key
                    ? "text-[#2D7D46]"
                    : "text-[#2a2318] hover:text-[#2D7D46]"
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0698701699"
              className="btn-primary text-sm justify-center mt-2"
            >
              06 98 70 16 99
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}