import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto ({
   subsets: ["latin"],
   weight: ['400']
});

export const metadata: Metadata = {
  title: "Portfolio de Yanis LARTIGUE",
  description: "Bienvenue sur le Portfolio de Yanis LARTIGUE, je suis un développeur web junior !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
