'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";

import pic from "@/public/Capture.PNG";
import Image from "next/image";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

export default function ProductSlide() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className=" w-[500px]   ">
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={false}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Thumbs]}
      className="w-[300px]  "
    >
      <SwiperSlide className="">
        <Image src={pic} className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={pic} className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={pic} className="w-full" />
      </SwiperSlide>
    </Swiper>
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={3}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className=" w-[200px] h-[70px]  my-2    "
    >
      <SwiperSlide className="">
        <Image src={pic} className="p-1  border border-blue-600 " />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={pic} className="p-1  border border-blue-600" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={pic} className="p-1  border border-blue-600" />
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

