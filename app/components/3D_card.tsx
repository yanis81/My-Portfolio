"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function ThreeDCardDemoP2() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          BOOKI
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Créez la page d`accueil d`une agence de voyage avec HTML & CSS.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P2.png`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Booki"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Lien Github →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n2_OC"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP3() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Sophie Bluel
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Créez une page web dynamique avec JavaScript.<br />ㅤ 
          
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P3.png`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Sophie Bluel"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Lien Github →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n3_OC"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP4() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Menu Maker by Qwenta
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Planifiez le développement du site de votre client.<br />ㅤ <br />ㅤ <br />ㅤ 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P4.png`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Menu Maker by Qwenta"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP5() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Nina Carducci
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Débuggez et optimisez un site de photographe.<br />ㅤ 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P5.png`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Nina Carducci"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Lien Github →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n5_OC"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP6() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Kasa
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Créez une application web de location immobilière avec React.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P6.png`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Kasa"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Lien Github →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n6_OC"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP7() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Mon Vieux Grimoire
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Développez le back-end d`un site de notation de livres.<br />ㅤ 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P7.png`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Mon Vieux Grimoire"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Lien Github →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n7_OC"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}