'use client'

import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CardCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
   
      <div className="  ">
        <Carousel responsive={responsive}   removeArrowOnDeviceType={["tablet", "mobile"]}
 containerClass='my-[10px] flex justify-start ' itemClass=" mx-[2px] bg-white shadow-xl  "  >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Carousel>
        
      </div>
   
  );
}
