"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/lib/services";
import { externalLinkProps } from "@/lib/urls";

interface SimpleSliderProps {
  items: Service[];
}

export default function SimpleSlider({ items }: SimpleSliderProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.75,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 540, settings: { slidesToShow: 1.75 } },
      { breakpoint: 720, settings: { slidesToShow: 2.75 } },
    ],
  };

  return (
    <Slider {...settings} className="md:hidden">
      {items.map((item) => (
        <Card
          key={item.id}
          className="min-h-76 flex justify-between border-border/50 bg-card/80 backdrop-blur"
        >
          <CardHeader className="gap-2 p-4 pb-0 h-28">
            <CardTitle className="text-foreground">{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground">
              {item.description.slice(0, 80)}
              {item.description.length > 80 ? "..." : ""}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-hidden">
            <a
              className="text-primary hover:underline"
              href={item.href}
              {...externalLinkProps(item.href)}
            >
              Learn more
            </a>
          </CardFooter>
        </Card>
      ))}
    </Slider>
  );
}
