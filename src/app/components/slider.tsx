"use client";
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

const Slideshow = () => {
  //Array of Images
  const images = [
    "https://res.cloudinary.com/dxa54qfxx/image/upload/t_SlideShowImage5/v1701362288/Slide_16_9_-_1_5_viwwkt.jpg",
    "https://res.cloudinary.com/dxa54qfxx/image/upload/t_SlideShowImage1/v1701360508/Slide_16_9_-_1_1_y1wi3s.jpg",
    "https://res.cloudinary.com/dxa54qfxx/image/upload/t_SlideShowImage2/v1701361495/Slide_16_9_-_1_2_om3mgs.jpg",
    "https://res.cloudinary.com/dxa54qfxx/image/upload/t_SlideShowImage3/v1701361802/Slide_16_9_-_1_3_s3oi3v.jpg",
    "https://res.cloudinary.com/dxa54qfxx/image/upload/t_SlideShowImage4/v1701362027/Slide_16_9_-_1_4_zetpdp.jpg",
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="top-40 ml-5 rounded-full bg-lime-950 p-2 md:top-72">
        <ArrowLeftIcon className="h-5 w-5 cursor-pointer text-white" />
      </div>
    ),
    nextArrow: (
      <div className="top-40 mr-5 rounded-full  bg-lime-950 p-2 md:top-72">
        <ArrowRightIcon className="h-5 w-5 cursor-pointer text-white" />
      </div>
    ),
  };
  return (
    <div className="h-full w-full">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="relative top-24 flex h-screen w-full items-start justify-center md:items-center"
          >
            <Image
              className="w-screen"
              src={each}
              alt="slider-image"
              width={1920}
              height={1080}
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
