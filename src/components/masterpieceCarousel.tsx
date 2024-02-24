import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MasterpieceCarousel() {
  return (
    <Carousel className="w-full max-w-[40rem] p-5">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="flex aspect-[4/5] justify-center items-center">
                <CardContent className="flex items-center justify-center p-6 ">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
      </div>
      <div className="hidden md:block">
        <CarouselNext />
      </div>
    </Carousel>
  );
}
