"use client";
import React from "react";

export function BasDePage() {
  return (
    <section className="p-12 dark:bg-[#0B0B0F]">
      <div className="dark:bg-[#0B0B0F] flex items-center flex-col text-xl pb-4 leading-none">
        <p className="font-bold">Me Contacter : <br /></p>
        <p className="font-semibold">Lartigueyanis@yahoo.com</p>
      </div>
      <div className="dark:bg-[#0B0B0F] flex flex-col items-center">
        <p>Ce site a été réalisé à la main et ne collecte aucune donnée. Merci de votre visite, passez une bonne journée ! 👋</p> 
        <p>© 2024 Portolio Lartigue Yanis. Tous droits réserver.</p>
      </div>
    </section>
    
  );
}
