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
import avatar from "../assets/louise.jpg"

export function CarouselDemo() {
    const datas = [
        {
            id: 1,
            title: "FRONTEND",
            image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
            
        },
        {
            id: 2,
            title: "BACKEND",
            image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
            
        },
        {
            id: 3,
            title: "FRAMEWORK",
            image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
            
        },
        {
            id: 4,
            title: "AUTRES",
            image: `https://raw.githubusercontent.com/yanis81/Projet-n6_OC/main/src/assets/banner/aboutBanner.png`,
            
        }
    ]

return (
    <section className="flex item-center justify-center ">
        <Carousel plugins={[Autoplay({ delay: 5000 })]} className="w-full ">
            <CarouselContent>
                {
                    datas.map((carousel) => (
                        <CarouselItem key={carousel.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-0">
                            <Card>
                                <div className="flex justify-center text-3xl"> <p>{carousel.title}</p> </div>
                                <CardContent className="flex items-center justify-center w-full ">
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



