"use client";
import React from "react";
import { CarouselDemo } from "./carousel";

export function H2carousel() {
  return (
    <div className="flex flex-col items-center dark:bg-[#0B0B0F]  ">
      <h2 className="text-4xl pb-12 font-semibold flex flex-col items-center ">
        Mes <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
          Compétences
        </span>
      </h2>
        <CarouselDemo />
    </div>
  );
}
