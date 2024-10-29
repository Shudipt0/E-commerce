'use client'

import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function RelatedProductCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
   
      <div className="  ">
        <Carousel responsive={responsive}   removeArrowOnDeviceType={["tablet", "mobile"]}
 containerClass='my-[10px] flex justify-start ' itemClass=" mx-[2px]  shadow-xl  "  >
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
