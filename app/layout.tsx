import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider"
import BackToTopButton from "./components/ScrollTopButton";

const roboto = Roboto ({
   subsets: ["latin"],
   weight: ['400']
});

export const metadata: Metadata = {
  title: "Portfolio de Yanis LARTIGUE",
  description: "Bienvenue sur le Portfolio de Yanis LARTIGUE, je suis un développeur web junior !",
  keywords: "Yanis LARTIGUE, développeur web, portfolio, développeur frontend, développeur backend, React, Next.js, JavaScript, TypeScript",
  authors: [{ name: "Yanis LARTIGUE" }],
  creator: "Yanis LARTIGUE",
  publisher: "Yanis LARTIGUE",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://yanis-lartigue.vercel.app/",
    title: "Portfolio de Yanis LARTIGUE",
    description: "Bienvenue sur le Portfolio de Yanis LARTIGUE, je suis un développeur web junior !",
    siteName: "Portfolio Yanis LARTIGUE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Yanis LARTIGUE",
    description: "Bienvenue sur le Portfolio de Yanis LARTIGUE, je suis un développeur web junior !",
  },
  alternates: {
    canonical: "https://yanis-lartigue.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="PKXUYIXdThH7ZOYxOp2EpvsV_eG9B2GdbYARuZeTkKE" />
      </head>
      <body className={roboto.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <BackToTopButton/>
        </ThemeProvider></body>
    </html>
  );
}
