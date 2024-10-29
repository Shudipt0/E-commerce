"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import pic1 from "@/public/hero-pic-1.jpg";
import pic2 from "@/public/hero-pic-2.jpg";
import pic3 from "@/public/hero-pic-3.jpg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function HeroBanner() {
  return (
    <div className="w-full">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute left-4 top-[50%] bg-slate-300  p-1 rounded-full z-10 "
          >
            <IoIosArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute  right-4 top-[50%] bg-slate-300  p-1 rounded-full z-10"
          >
            <IoIosArrowForward className="text-sm md:text-lg " />
          </div>
        )}
      >
        <div>
          <Image src={pic1} />
        </div>
        <div>
          <Image src={pic2} />
        </div>
        <div>
          <Image src={pic3} />
        </div>
      </Carousel>
    </div>
  );
}
