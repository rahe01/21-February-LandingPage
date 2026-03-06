"use client";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden">
      <Carousel className="relative">
        <CarouselContent>
          {/* Slide 1 */}
          <CarouselItem className="relative max-h-screen  w-full">
            <img
              src="/b1.jpeg"
              alt="Hero Image 1"
              className="object-cover w-full h-full"
            />
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem className="relative max-h-screen w-full">
            <img
              src="/b2.jpeg"
              alt="Hero Image 2"
              className="object-cover w-full h-full"
            />
          </CarouselItem>
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
