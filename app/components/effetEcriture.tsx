"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewritter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hello",
      className: "font-bold text-3xl",
    },
    {
      text: "world!",
      className: "font-bold text-3xl",
    },
    {
      text: "Je",
      className: "text-2xl",
    },
    {
      text: "suis",
      className: "text-2xl",
    },
    {
      text: "étudiant",
      className: "text-2xl",
    },
    {
      text: "en",
      className: "text-2xl",
    },
    {
      text: "3ème",
      className: "text-2xl",
    },
    {
      text: "années",
      className: "text-2xl",
    },
    {
      text: "de",
      className: "text-2xl",
    },
    {
      text: "bachelor",
      className: "text-2xl",
    },
    {
      text: "Concepteur",
      className: "text-2xl",
    },
    {
      text: "de",
      className: "text-2xl",
    },
    {
      text: "Systèmes",
      className: "text-2xl",
    },
    {
      text: "d’Information",
      className: "text-2xl",
    },
    {
      text: "SPÉCIALITÉ",
      className: "text-2xl",
    },
    {
      text: "« Développement Logiciel et Web »",
      className: "text-2xl",
    },
    {
      text: "à",
      className: "text-2xl",
    },
    {
      text: "l'Ecole",
      className: "text-2xl",
    },
    {
      text: "Supérieure",
      className: "text-2xl",
    },
    {
      text: "du",
      className: "text-2xl",
    },
    {
      text: "Numérique",
      className: "text-2xl",
    },
    {
      text: "du",
      className: "text-2xl",
    },
    {
      text: "Tarn (ESN 81).",
      className: "text-2xl",
    },
    {
      text: "Je",
      className: "text-2xl",
    },
    {
      text: "suis",
      className: "text-2xl",
    },
    {
      text: "titulaire",
      className: "text-2xl",
    },
    {
      text: "d'un",
      className: "text-2xl",
    },
    {
      text: "diplôme",
      className: "text-2xl",
    },
    {
      text: "de",
      className: "text-2xl",
    },
    {
      text: "développeur",
      className: "text-2xl",
    },
    {
      text: "intégrateur",
      className: "text-2xl",
    },
    {
      text: "web",
      className: "text-2xl",
    },
    {
      text: "délivré",
      className: "text-2xl",
    },
    {
      text: "par",
      className: "text-2xl",
    },
    {
      text: "OpenClassroom.",
      className: "text-2xl",
    },
    {
      text: "Passionné",
      className: "text-2xl",
    },
    {
      text: "de",
      className: "text-2xl",
    },
    {
      text: "nouvelles",
      className: "text-2xl",
    },
    {
      text: "technologies",
      className: "text-2xl",
    },
    {
      text: "et",
      className: "text-2xl",
    },
    {
      text: "du",
      className: "text-2xl",
    },
    {
      text: "Web",
      className: "text-2xl",
    },
    {
      text: "en",
      className: "text-2xl",
    },
    {
      text: "général.",
      className: "text-2xl",
    },
    {
      text: "Lartigue yanis.",
      className: "text-blue-500 dark:text-blue-500 text-2xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
