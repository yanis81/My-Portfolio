"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewritter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hello",
    },
    {
      text: "world!",
    },
    {
      text: "Je",
    },
    {
      text: "suis",
    },
    {
      text: "étudiant",
    },
    {
      text: "en",
    },
    {
      text: "formation",
    },
    {
      text: "de",
    },
    {
      text: "développeur",
    },
    {
      text: "Web",
    },
    {
      text: "chez",
    },
    {
      text: "OpenClassroom.",
    },
    {
      text: "Je",
    },
    {
      text: "suis",
    },
    {
      text: "un",
    },
    {
      text: "jeune",
    },
    {
      text: "passionné",
    },
    {
      text: "de",
    },
    {
      text: "nouvelles",
    },
    {
      text: "technologies",
    },
    {
      text: "et",
    },
    {
      text: "du",
    },
    {
      text: "Web",
    },
    {
      text: "en",
    },
    {
      text: "général.",
    },
    {
      text: "Toujours",
    },
    {
      text: "impatient",
    },
    {
      text: "d'apprendre",
    },
    {
      text: "de",
    },
    {
      text: "nouvelles",
    },
    {
      text: "choses.",
    },
    {
      text: "Lartigue yanis.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  border-emerald-500 border-solid border-4  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
