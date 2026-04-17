import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Chez Dog & Kat",
  description: "Pension pour chats et soins naturels offrant un hébergement en petits groupes dans un environnement familial, climatisé ",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation activePage="services" />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
<section data-animate="fade-up" className="bg-[var(--color-cream)] py-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[var(--color-amber)] uppercase tracking-widest text-sm font-semibold mb-3" style={{fontFamily:'var(--font-body)'}}>
      Mes Services
    </p>
    <h1 className="text-4xl md:text-5xl text-[var(--color-bark)] mb-5" style={{fontFamily:'var(--font-display)'}}>
      Deux prestations pensées pour votre compagnon
    </h1>
    <p className="text-[var(--color-bark-light)] text-lg max-w-2xl mx-auto leading-relaxed" style={{fontFamily:'var(--font-body)'}}>
      Daphné met à profit son expertise pour votre tranquillité d'esprit. Professionnelle déclarée DDPP, elle vous offre un suivi rigoureux et une attention de tous les instants.
    </p>
  </div>
</section>

<section data-animate="fade-up" className="bg-[var(--color-ivory)] py-16 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl text-center text-[var(--color-bark)] mb-12" style={{fontFamily:'var(--font-display)'}}>
      Toutes nos prestations
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="bg-[var(--color-warm-white)] rounded-2xl shadow-sm border border-[var(--color-mist)] p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🐱</span>
          <h3 className="text-2xl text-[var(--color-bark)]" style={{fontFamily:'var(--font-display)'}}>
            Pension pour Chats
          </h3>
        </div>
        <p className="text-[var(--color-bark-light)] leading-relaxed mb-6 flex-1" style={{fontFamily:'var(--font-body)'}}>
          Hébergement en petits groupes de 6 chats maximum dans un espace intérieur climatisé avec accès au jardin extérieur sécurisé. Comprend un rapport photo quotidien, brossage et nettoyage des locaux chaque jour.
        </p>
        <ul className="space-y-2 mb-6">
          {["Groupes de 6 chats max","Rapport photo quotidien","Accès jardin sécurisé","Brossage quotidien"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-[var(--color-forest)] text-sm" style={{fontFamily:'var(--font-body)'}}>
              <span className="w-4 h-4 rounded-full bg-[var(--color-sage-pale)] flex items-center justify-center text-xs">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4 border-t border-[var(--color-mist)]">
          <span className="text-2xl font-bold text-[var(--color-amber)]" style={{fontFamily:'var(--font-display)'}}>20 €</span>
          <span className="text-[var(--color-bark-light)] text-sm ml-1" style={{fontFamily:'var(--font-body)'}}>/jour par chat</span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {[
          {icon:"🌿", name:"Bilan Naturopathie Animalière", price:"60 €", unit:"", desc:"Bilan complet incluant conseils nutritionnels, hygiène, homéopathie, fleurs de Bach sur mesure, cures de saison et renforcement des défenses naturelles."},
          {icon:"🔄", name:"Suivi Naturopathie Animalière", price:"40 €", unit:"", desc:"Séance de suivi naturopathique pour accompagner votre animal dans son programme de soins naturels personnalisé."},
          {icon:"💬", name:"Conseils Naturopathie Animalière", price:"30 €", unit:"", desc:"Séance de conseils en soins naturels — nutrition, hygiène, homéopathie et fleurs de Bach — sans bilan complet."},
        ].map((s) => (
          <div key={s.name} className="bg-[var(--color-warm-white)] rounded-2xl shadow-sm border border-[var(--color-mist)] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl">{s.icon}</span>
              <h3 className="text-xl text-[var(--color-bark)]" style={{fontFamily:'var(--font-display)'}}>{s.name}</h3>
            </div>
            <p className="text-[var(--color-bark-light)] text-sm leading-relaxed flex-1 mb-4" style={{fontFamily:'var(--font-body)'}}>{s.desc}</p>
            <div className="pt-3 border-t border-[var(--color-mist)]">
              <span className="text-xl font-bold text-[var(--color-amber)]" style={{fontFamily:'var(--font-display)'}}>{s.price}</span>
              {s.unit && <span className="text-[var(--color-bark-light)] text-sm ml-1" style={{fontFamily:'var(--font-body)'}}>{s.unit}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section data-animate="fade-up" className="bg-[var(--color-forest)] py-14 px-4 text-center">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-3xl text-[var(--color-cream)] mb-4" style={{fontFamily:'var(--font-display)'}}>
      Une question ? Réservez dès maintenant
    </h2>
    <p className="text-[var(--color-sage-pale)] mb-8 leading-relaxed" style={{fontFamily:'var(--font-body)'}}>
      Contactez Daphné pour discuter des besoins de votre compagnon et réserver sa place en toute sérénité.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="tel:0698701699" className="inline-flex items-center justify-center gap-2 bg-[var(--color-amber)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-bark)] transition-colors" style={{fontFamily:'var(--font-body)'}}>
        📞 06 98 70 16 99
      </a>
      <a href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-sage-pale)] text-[var(--color-cream)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-forest-dark)] transition-colors" style={{fontFamily:'var(--font-body)'}}>
        Nous contacter
      </a>
    </div>
  </div>
</section>
      </section>
      <Footer />
    </main>
  );
}
