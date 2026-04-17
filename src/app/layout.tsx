import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chez Dog & Kat — Pension pour Chats & Soins Naturels",
  description:
    "Pension pour chats en petits groupes dans un environnement familial, climatisé et sécurisé. Naturopathie animalière personnalisée. Partez l'esprit tranquille.",
  keywords:
    "pension chats, naturopathie animalière, soins naturels chats, hébergement chat, Chez Dog et Kat",
  openGraph: {
    title: "Chez Dog & Kat — Pension pour Chats & Soins Naturels",
    description:
      "Partez l'esprit tranquille, nous prenons soin de votre chat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${lora.variable}`}>
      <body className="font-body bg-[#faf6ef]">{children}</body>
    </html>
  );
}
