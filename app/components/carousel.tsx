"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carouselParams";

export function CarouselDemo() {
    const datas = [
        {
            id: 1,
            title: "FRONTEND",
            image: `https://raw.githubusercontent.com/yanis81/My-Portfolio/main/app/assets/carteInfinie/frontend.png`,
            
        },
        {
            id: 2,
            title: "BACKEND",
            image: `https://raw.githubusercontent.com/yanis81/My-Portfolio/main/app/assets/carteInfinie/backend.png`,
            
        },
        {
            id: 3,
            title: "FRAMEWORK",
            image: `https://raw.githubusercontent.com/yanis81/My-Portfolio/main/app/assets/carteInfinie/autres.png`,
            
        }
    ]

return (
    <section className="flex item-center justify-center ">
        <Carousel plugins={[Autoplay({ delay: 3000 })]} className="w-full max-w-5xl h-full max-h- pb-0">
            <CarouselContent>
                {
                    datas.map((carousel) => (
                        <CarouselItem key={carousel.id} >
                        <div className="p-0">
                            <Card>
                                <div className="flex justify-center text-3xl"> <p>{carousel.title}</p> </div>
                                <CardContent className="flex items-center justify-center w-full">
                                    <img src={carousel.image} alt="Mes competences en Images" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </section>
  );
}



