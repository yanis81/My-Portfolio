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
      text: "formation",
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
      text: "Web",
      className: "text-2xl",
    },
    {
      text: "chez",
      className: "text-2xl",
    },
    {
      text: "OpenClassroom.",
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
      text: "un",
      className: "text-2xl",
    },
    {
      text: "jeune",
      className: "text-2xl",
    },
    {
      text: "passionné",
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
      text: "Toujours",
      className: "text-2xl",
    },
    {
      text: "impatient",
      className: "text-2xl",
      
    },
    {
      text: "d'apprendre",
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
      text: "choses.",
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
