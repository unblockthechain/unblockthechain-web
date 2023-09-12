'use client'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { getContents } from "@/sanity/sanity.utils";
import { Certificate } from "@/types/Certificate";



import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export default async function SimpleSlider() {

   const contents = await getContents();

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.75,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="md:hidden">
        {contents.map((content: Certificate) => (
              <Card
                key={content._id}
                className="bg-transparent text-white "
              >
                <CardHeader className="gap-3">
                  <CardTitle>{content.name}</CardTitle>
                  <img src={content.image} className="w-12"></img>
                </CardHeader>
                <CardContent>
                  <CardDescription>{content.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <a className="text-green-500" href="">
                    Saiba mais
                  </a>
                </CardFooter>
              </Card>
            ))}
      </Slider>
    );
  }