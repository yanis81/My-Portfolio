"use client";
import Link from 'next/link'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function BasDePage() {
  return (
    <section className="p-12 dark:bg-[#0B0B0F] flex flex-col ">

      <div className='flex items-start gap-x-24'>
        <div className="flex flex-col text-xl pb-4 leading-none">
          <h2 className="font-bold">Me Contacter :</h2><br /><br />
          <p className="font-semibold">Lartigueyanis@yahoo.com</p> <br />
        </div>

        <div className='flex flex-col gap-y-5 items-start'>
          <h2 className='font-bold text-xl'>Me Suivre :</h2>
          <div className='text-4xl'>
            <Link href={'https://www.linkedin.com/in/yanis-lartigue-a2965a330'} target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#1890ec",}} />
            </Link>
            
          </div>
        </div>
      </div>
      <br />
      <div className="dark:bg-[#0B0B0F] flex flex-col items-center">
        <p>Ce site a été réalisé à la main et ne collecte aucune donnée. Merci de votre visite, passez une bonne journée ! 👋</p> 
        <p>© 2024 Portolio Lartigue Yanis. Tous droits réservés.</p>
      </div>    
    </section>
  );
}
