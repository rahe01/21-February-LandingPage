"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroSlider() {
  const slides = ["/b1.jpeg", "/b2.jpeg"]; // slide images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length); // loop back to first slide
    }, 3000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel className="relative">
        <CarouselContent>
          {slides.map((src, index) => (
            <CarouselItem
              key={index}
              className={`relative max-h-screen w-full transition-opacity duration-700 ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 absolute top-0 left-0"
              }`}
            >
              <img
                src={src}
                alt={`Hero Image ${index + 1}`}
                className="object-cover w-full h-full "
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full">
          ❮
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full">
          ❯
        </CarouselNext>
      </Carousel>
    </section>
  );
}
