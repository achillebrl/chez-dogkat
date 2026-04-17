import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="home" />

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Pension pour chats Chez Dog & Kat — un cadre familial et sécurisé"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a13]/80 via-[#1e1a13]/40 to-[#1e1a13]/20" />
        </div>

        {/* Floating decorative badge */}
        <div className="absolute top-32 right-8 lg:right-16 w-24 h-24 lg:w-32 lg:h-32 opacity-60 pointer-events-none animate-[float_6s_ease-in-out_infinite]">
          <div className="w-full h-full rounded-full border border-[#faf6ef]/20 flex items-center justify-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-[#2D7D46]/50 flex items-center justify-center">
              <span className="text-[#faf6ef]/80 font-display italic text-xs lg:text-sm text-center leading-tight px-1">
                6 chats<br />max
              </span>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{
                animation: "fadeInUp 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
              }}
            >
              <span className="w-8 h-px bg-[#2D7D46]" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#c8dfc8] font-body">
                Pension pour Chats & Soins Naturels
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-display text-[clamp(3.5rem,9vw,8rem)] text-[#faf6ef] leading-[0.9] tracking-tight mb-6"
              style={{
                animation: "fadeInUp 1s 0.4s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
              }}
            >
              Partez
              <br />
              <em className="italic text-[#8fbc8f]">l&apos;esprit</em>
              <br />
              tranquille.
            </h1>

            <p
              className="font-body text-[#faf6ef]/80 text-base lg:text-lg max-w-xl leading-relaxed mb-10"
              style={{
                animation: "fadeInUp 1s 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
              }}
            >
              Nous prenons soin de votre chat dans un environnement familial,
              climatisé et sécurisé. Un accompagnement personnalisé, une
              capacité limitée à 6 chats maximum.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                animation: "fadeInUp 1s 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
              }}
            >
              <a href="tel:0698701699" className="btn-light">
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
                Réserver maintenant
              </a>
              <Link
                href="/services"
                className="btn-outline"
                style={{ borderColor: "rgba(250,246,239,0.5)", color: "#faf6ef" }}
              >
                Découvrir nos services
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#faf6ef]/40 text-xs tracking-widest uppercase font-body">
              Découvrir
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#faf6ef]/40 to-transparent" />
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            animation: "fadeInUp 1s 1.2s cubic-bezier(0.22,1,0.36,1) forwards",
            opacity: 0,
          }}
        >
          <div className="bg-[#1e1a13]/60 backdrop-blur-sm border-t border-[#faf6ef]/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
              <div className="grid grid-cols-3 gap-4 lg:gap-0 lg:flex lg:items-center lg:justify-around">
                {[
                  { num: "6", label: "Chats maximum" },
                  { num: "∞", label: "Attention personnalisée" },
                  { num: "24h", label: "Rapports photo/vidéo" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-2xl lg:text-3xl text-[#8fbc8f] font-semibold">
                      {stat.num}
                    </div>
                    <div className="font-body text-[10px] lg:text-xs text-[#faf6ef]/50 tracking-wider uppercase mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MARQUEE STRIP
      ═══════════════════════════════════════════ */}
      <div className="bg-[#2D7D46] py-3 overflow-hidden">
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8 whitespace-nowrap">
              {[
                "Pension pour Chats",
                "6 Chats Maximum",
                "Naturopathie Animalière",
                "Homéopathie & Fleurs de Bach",
                "Agrément DDPP",
                "Rapports Photos Quotidiens",
                "Daphné vous accueille",
                "Ambiance Familiale",
              ].map((text) => (
                <span
                  key={text}
                  className="flex items-center gap-4 font-body text-[#faf6ef]/90 text-sm tracking-widest uppercase"
                >
                  <span className="w-1 h-1 rounded-full bg-[#faf6ef]/50 flex-shrink-0" />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          INTRO / ABOUT SPLIT SECTION
      ═══════════════════════════════════════════ */}
      <section className="bg-[#faf6ef] py-24 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image column */}
            <div className="relative" data-animate="fade-left">
              {/* Main image */}
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 overflow-hidden rounded-sm">
                  <Image
                    src="/assets/about.jpg"
                    alt="Daphné, fondatrice de Chez Dog & Kat, avec un chat"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative frame offset */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#2D7D46]/20 rounded-sm pointer-events-none" />
              </div>

              {/* Floating credential badge */}
              <div
                className="absolute -right-4 lg:-right-8 top-8 bg-[#faf6ef] border border-[#2D7D46]/15 shadow-[0_8px_32px_rgba(45,125,70,0.15)] p-4 max-w-[180px]"
                data-animate
                data-delay="3"
              >
                <div className="flex flex-col gap-1">
                  <div className="w-6 h-px bg-[#2D7D46] mb-2" />
                  <span className="font-display font-semibold text-[#2a2318] text-base leading-tight">
                    Certifiée ACACED
                  </span>
                  <span className="font-body text-xs text-[#5c4a32]/70 leading-snug">
                    Chien & Chat
                  </span>
                  <div className="w-6 h-px bg-[#2D7D46]/30 mt-2" />
                  <span className="font-body text-xs text-[#2D7D46] font-medium">
                    Agrément DDPP
                  </span>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-[#2D7D46]/[0.06] rounded-full pointer-events-none" />
            </div>

            {/* Text column */}
            <div>
              <div data-animate data-delay="1" className="inline-flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#2D7D46]"
                      style={{ opacity: 1 - i * 0.25 }}
                    />
                  ))}
                </div>
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#2D7D46]">
                  Qui suis-je ?
                </span>
              </div>

              <h2
                data-animate
                data-delay="2"
                className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[#2a2318] leading-[1.05] mb-6"
              >
                Une professionnelle
                <br />
                <em className="italic text-[#2D7D46]">passionnée</em>
                <br />
                à votre service.
              </h2>

              <p
                data-animate
                data-delay="3"
                className="font-body text-[#5c4a32]/80 text-base leading-relaxed mb-6"
              >
                Je suis Daphné, titulaire de l&apos;ACACED chien et chat,
                formée en Pet-Sitter, Dog Walker et conseillère en soins
                naturels. Je suis déclarée auprès d&apos;un vétérinaire
                sanitaire et contrôlée par la Direction Départementale de la
                Protection Animale (DDPP).
              </p>

              <p
                data-animate
                data-delay="4"
                className="font-body text-[#5c4a32]/80 text-base leading-relaxed mb-10"
              >
                J&apos;accueille jusqu&apos;à{" "}
                <strong className="text-[#2D7D46] font-semibold">
                  6 chats maximum
                </strong>{" "}
                pour garantir un suivi personnalisé et une attention de tous les
                instants. Chaque félin est traité comme un membre de la famille.
              </p>

              {/* Certifications list */}
              <div data-animate data-delay="5" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  "ACACED chien & chat",
                  "Formation Pet-Sitter",
                  "Conseiller soins naturels",
                  "Agrément & contrôle DDPP",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#2D7D46]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2D7D46"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="font-body text-sm text-[#2a2318]">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>

              <div data-animate data-delay="6">
                <Link href="/services" className="btn-primary">
                  Découvrir mes services
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
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f0ebe0] py-24 lg:py-36 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D7D46]/[0.04] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2D7D46]/[0.04] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div data-animate className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#2D7D46]" />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#2D7D46]">
                Nos Prestations
              </span>
              <span className="w-8 h-px bg-[#2D7D46]" />
            </div>
            <h2
              data-animate
              data-delay="2"
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[#2a2318] leading-[1.05]"
            >
              Des services personnalisés
              <br />
              <em className="italic text-[#2D7D46]">pour le bien-être</em> de votre chat.
            </h2>
          </div>

          {/* Featured service — Pension */}
          <div
            data-animate
            className="service-card bg-[#2D7D46] text-[#faf6ef] p-8 lg:p-12 mb-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#faf6ef]/[0.04] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-2xl">🐱</span>
                  <span className="font-body text-xs tracking-widest uppercase text-[#8fbc8f]">
                    Service Principal
                  </span>
                </div>
                <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] mb-4">
                  Pension pour Chats
                </h3>
                <p className="font-body text-[#faf6ef]/75 text-base leading-relaxed mb-6">
                  Hébergement en petits groupes dans un espace sécurisé et
                  climatisé. Un séjour comme à la maison, avec une attention
                  de tous les instants.
                </p>
                <a href="tel:0698701699" className="btn-light">
                  Réserver un séjour
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
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏠", text: "Maximum 6 chats pour un suivi personnalisé" },
                  { icon: "❄️", text: "Espace intérieur climatisé" },
                  { icon: "🌿", text: "Accès au jardin extérieur sécurisé" },
                  { icon: "📸", text: "Rapport photo & vidéo quotidien" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="bg-[#faf6ef]/[0.08] border border-[#faf6ef]/10 p-4 rounded-sm"
                  >
                    <div className="text-xl mb-2">{item.icon}</div>
                    <p className="font-body text-xs text-[#faf6ef]/75 leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price tag */}
            <div className="absolute top-8 right-8 bg-[#faf6ef] text-[#2D7D46] px-4 py-2">
              <div className="font-display text-3xl font-bold leading-none">
                20€
              </div>
              <div className="font-body text-xs text-[#5c4a32]/70">
                / jour par chat
              </div>
            </div>
          </div>

          {/* Naturopathie services grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                name: "Bilan Naturopathie",
                price: "60 €",
                desc: "Bilan complet incluant conseils nutritionnels, hygiène, homéopathie et fleurs de Bach sur mesure, programmes de cures de saison.",
                icon: "🌱",
                delay: "1",
              },
              {
                name: "Suivi Naturopathique",
                price: "40 €",
                desc: "Séance de suivi pour accompagner votre animal dans son programme de soins naturels personnalisé.",
                icon: "🌿",
                delay: "2",
              },
              {
                name: "Conseils en Soins Naturels",
                price: "30 €",
                desc: "Séance de conseils en nutrition, hygiène, homéopathie et fleurs de Bach sans bilan complet.",
                icon: "🍃",
                delay: "3",
              },
            ].map((service) => (
              <div
                key={service.name}
                data-animate
                data-delay={service.delay}
                className="service-card bg-[#faf6ef] border border-[#2D7D46]/10 p-8 relative"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <div className="font-display text-2xl font-semibold text-[#2a2318] mb-3 leading-tight">
                  {service.name}
                </div>
                <p className="font-body text-sm text-[#5c4a32]/70 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="font-display text-3xl text-[#2D7D46] font-bold">
                    {service.price}
                  </div>
                  <a
                    href="tel:0698701699"
                    className="font-body text-xs text-[#2D7D46] tracking-wider uppercase border-b border-[#2D7D46]/30 hover:border-[#2D7D46] transition-colors pb-0.5"
                  >
                    Prendre RDV →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div data-animate className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              Voir tous les détails
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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          UNIQUE SELLING POINTS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#faf6ef] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div data-animate className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#2D7D46]" />
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#2D7D46]">
                  Pourquoi nous choisir ?
                </span>
              </div>
              <h2
                data-animate
                data-delay="2"
                className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[#2a2318] leading-[1.05] mb-4"
              >
                La différence
                <br />
                <em className="italic text-[#2D7D46]">Chez Dog & Kat.</em>
              </h2>
              <p
                data-animate
                data-delay="3"
                className="font-body text-[#5c4a32]/70 text-base leading-relaxed max-w-lg"
              >
                Une approche holistique du bien-être animal, combinant
                hébergement traditionnel et soins naturopathiques pour offrir
                à votre chat une expérience unique.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Capacité limitée à 6 chats",
                  desc: "Chaque félin bénéficie d'une attention individualisée et d'un suivi rigoureux.",
                },
                {
                  num: "02",
                  title: "Double expertise unique",
                  desc: "Pension traditionnelle et naturopathie animalière : soins naturels, homéopathie, fleurs de Bach.",
                },
                {
                  num: "03",
                  title: "Rapports quotidiens",
                  desc: "Photos et vidéos envoyées tous les jours pour vous tenir informés du séjour.",
                },
                {
                  num: "04",
                  title: "Établissement agréé DDPP",
                  desc: "Déclaré auprès d'un vétérinaire sanitaire, soumis à contrôle réglementaire.",
                },
              ].map((item, i) => (
                <div
                  key={item.num}
                  data-animate
                  data-delay={String(i + 1)}
                  className="flex gap-6 p-6 bg-[#f0ebe0] hover:bg-[#2D7D46]/[0.06] border border-transparent hover:border-[#2D7D46]/15 transition-all duration-300 group"
                >
                  <div className="font-display text-5xl text-[#2D7D46]/20 group-hover:text-[#2D7D46]/40 transition-colors font-bold leading-none flex-shrink-0 w-12">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#2a2318] font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[#5c4a32]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GALLERY
      ═══════════════════════════════════════════ */}
      <section className="bg-[#2D7D46] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-12">
            <div>
              <div data-animate className="inline-flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#8fbc8f]" />
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#8fbc8f]">
                  Albums Photos
                </span>
              </div>
              <h2
                data-animate
                data-delay="2"
                className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#faf6ef] leading-[1.05]"
              >
                La vie à la pension,
                <br />
                <em className="italic text-[#8fbc8f]">en images.</em>
              </h2>
            </div>
            <p
              data-animate
              data-delay="3"
              className="font-body text-[#faf6ef]/60 text-sm leading-relaxed max-w-xs lg:ml-auto lg:text-right"
            >
              Chaque séjour est documenté avec des photos et vidéos quotidiennes
              envoyées directement aux propriétaires.
            </p>
          </div>
        </div>

        {/* Carousel — full width */}
        <div data-animate data-delay="2">
          <GalleryCarousel />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section
        id="temoignages"
        className="bg-[#f0ebe0] py-24 lg:py-36 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div data-animate className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#2D7D46]" />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#2D7D46]">
                Ce qu&apos;ils disent
              </span>
              <span className="w-8 h-px bg-[#2D7D46]" />
            </div>
            <h2
              data-animate
              data-delay="2"
              className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#2a2318] leading-[1.05]"
            >
              Témoignages de
              <br />
              <em className="italic text-[#2D7D46]">propriétaires satisfaits.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Daphné est une professionnelle passionnée et bienveillante. Notre chat était vraiment bien traité, comme à la maison. Les photos quotidiennes nous ont vraiment rassurés pendant nos vacances.",
                author: "Marie & Thomas",
                cat: "Propriétaires de Milo",
                stars: 5,
                delay: "1",
              },
              {
                text: "Je recommande vivement Chez Dog & Kat ! Daphné prend vraiment le temps de connaître chaque chat. Le rapport quotidien est un vrai plus. On repart en vacances l'esprit serein.",
                author: "Isabelle",
                cat: "Propriétaire de Luna",
                stars: 5,
                delay: "2",
              },
              {
                text: "La naturopathie animalière proposée par Daphné m'a beaucoup aidé pour la santé de ma chatte. Des conseils personnalisés et naturels, vraiment efficaces.",
                author: "Sophie",
                cat: "Propriétaire de Caramel",
                stars: 5,
                delay: "3",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                data-animate
                data-delay={testimonial.delay}
                className="testimonial-card bg-[#faf6ef] p-8 border border-[#2D7D46]/[0.08]"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#c8860a"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <p className="font-body text-sm text-[#2a2318]/80 leading-relaxed italic mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t border-[#2D7D46]/[0.08] pt-4">
                  <div className="w-8 h-8 rounded-full bg-[#2D7D46]/15 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2D7D46"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-[#2a2318]">
                      {testimonial.author}
                    </div>
                    <div className="font-body text-xs text-[#2D7D46]">
                      {testimonial.cat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT / CTA SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="contact"
        className="bg-[#1e1a13] py-24 lg:py-36 relative overflow-hidden"
      >
        {/* Decorative bg */}
        <div className="absolute inset-0 bg-lines opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2D7D46]/[0.08] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2D7D46]/[0.06] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div data-animate className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#2D7D46]" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#2D7D46]">
              Réservation
            </span>
            <span className="w-8 h-px bg-[#2D7D46]" />
          </div>

          <h2
            data-animate
            data-delay="2"
            className="font-display text-[clamp(3rem,7vw,6rem)] text-[#faf6ef] leading-[0.95] mb-6"
          >
            Prêt à confier
            <br />
            <em className="italic text-[#8fbc8f]">votre félin</em>
            <br />
            à Daphné ?
          </h2>

          <p
            data-animate
            data-delay="3"
            className="font-body text-[#faf6ef]/60 text-base leading-relaxed max-w-xl mx-auto mb-12"
          >
            Contactez-moi pour vérifier les disponibilités et organiser votre
            visite. Je serai ravie de vous accueillir, vous et votre chat, pour
            une première rencontre.
          </p>

          {/* Contact options */}
          <div
            data-animate
            data-delay="4"
            className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12"
          >
            <a
              href="tel:0698701699"
              className="btn-primary justify-center py-4 text-base gap-3"
            >
              <svg
                width="18"
                height="18"
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
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center py-4 text-base gap-3"
              style={{ borderColor: "rgba(250,246,239,0.2)", color: "#faf6ef" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              Instagram
            </a>
          </div>

          {/* Trust indicators */}
          <div
            data-animate
            data-delay="5"
            className="flex flex-wrap items-center justify-center gap-6 lg:gap-10"
          >
            {[
              "🛡️ Agrément DDPP",
              "🩺 Déclaré vétérinaire",
              "📜 ACACED certifié",
              "🌿 Soins naturels",
            ].map((item) => (
              <span
                key={item}
                className="font-body text-xs text-[#faf6ef]/40 tracking-wide uppercase flex items-center gap-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
