import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e1a13] text-[#faf6ef]/80 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D7D46] to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-[#faf6ef]/08">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#2D7D46]/40">
                <Image
                  src="/assets/logo.png"
                  alt="Chez Dog & Kat"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="font-display font-semibold text-xl text-[#faf6ef]">
                  Chez Dog & Kat
                </div>
                <div className="text-xs tracking-widest uppercase text-[#2D7D46]">
                  Pension · Soins Naturels
                </div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-[#faf6ef]/60 max-w-xs">
              Partez l&apos;esprit tranquille, nous prenons soin de votre chat
              dans un environnement familial, climatisé et sécurisé.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 border border-[#faf6ef]/15 hover:border-[#2D7D46] hover:bg-[#2D7D46]/20 transition-all duration-300 flex items-center justify-center rounded-sm"
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-[#faf6ef]/15 hover:border-[#2D7D46] hover:bg-[#2D7D46]/20 transition-all duration-300 flex items-center justify-center rounded-sm"
                aria-label="Facebook"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-[#faf6ef] text-lg font-semibold mb-5 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Nos Services" },
                { href: "#temoignages", label: "Témoignages" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-[#faf6ef]/60 hover:text-[#2D7D46] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-[#2D7D46]/50" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[#faf6ef] text-lg font-semibold mb-5 tracking-wide">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:0698701699"
                className="flex items-center gap-3 font-body text-sm text-[#faf6ef]/70 hover:text-[#2D7D46] transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#2D7D46]/15 group-hover:bg-[#2D7D46]/30 flex items-center justify-center transition-colors">
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
                </div>
                06 98 70 16 99
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2D7D46]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="font-body text-sm text-[#faf6ef]/60 leading-relaxed">
                  Agréée DDPP
                  <br />
                  Déclarée vétérinaire sanitaire
                  <br />
                  ACACED chien &amp; chat
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#faf6ef]/30 tracking-wide">
            © {new Date().getFullYear()} Chez Dog & Kat. Tous droits réservés.
          </p>
          <p className="font-body text-xs text-[#faf6ef]/30 tracking-wide flex items-center gap-2">
            Fait avec
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="#2D7D46"
              className="inline"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            pour les chats
          </p>
        </div>
      </div>
    </footer>
  );
}