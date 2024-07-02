"use client";

import React from "react";
import { ThreeDCardDemo } from "./3D_card";

export function ProjetComp() {
  return (
    <section>
        <div className="flex gap-3 justify-center flex-wrap items-center">
            <ThreeDCardDemo/>
            <ThreeDCardDemo/>
            <ThreeDCardDemo/> 
            <ThreeDCardDemo/>
            <ThreeDCardDemo/>
            <ThreeDCardDemo/> 
        </div>
        
    </section>
    
  )
}
