"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export function Ipad() {
  return (
    <section>
      <div className="flex flex-col overflow-hidden dark:bg-[#0B0B0F]">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl font-semibold text-black dark:text-white">
                Mes <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Projets
                </span>
              </h2>
            </>
          }
        >
          <Image
            src={`/presentationImage/allP.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
