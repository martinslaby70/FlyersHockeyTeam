import Slider, { Settings } from "react-slick";

import { useRef, useState } from "react";
import { RenderSlide } from "./RenderSlide";
import "./teamCarousel.css";
import { lines } from "./lines";
import { motion } from "framer-motion";

export const TeamCarousel = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const settings: Settings = {
    infinite: true,
    speed: 1500,
    slidesPerRow: 1,
    rows: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, nextSlide) => {
      if (Number.isInteger(nextSlide)) {
        setActiveSlide(nextSlide);
      }
    },
  };

  return (
    <div className="w-screen flex flex-col overflow-hidden max-w-full">
      <div className="flex z-10 items-center justify-between lg:container px-4 lg:px-0 w-full mx-auto">
        <h3 className="text-secondary rounded-lg py-1 w-[200px] text-start">
          Fotogalerie
        </h3>
        <div className="flex gap-5 items-center">
          <button
            className="bg-secondary px-4 flex justify-center items-center rounded-lg"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <h3 className="text-primary">&lt;</h3>
          </button>
          <h2 className="text-secondary w-[250px] text-center">
            {lines[activeSlide].title}
          </h2>
          <button
            className="bg-secondary px-4  flex justify-center items-center rounded-lg"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <h3 className="text-primary">&gt;</h3>
          </button>
        </div>
        <motion.button className="flex justify-end items-center rounded-lg w-[200px]">
          <motion.h3
            className="text-secondary"
            whileHover={{ color: "#dc2626" }}
          >
            &gt; Fotky ze zápasů &gt;
          </motion.h3>
        </motion.button>
      </div>
      <div className="lg:container w-full px-4 lg:px-0 mx-auto bg-secondary rounded h-[1px] mb-5 mt-2"></div>

      <div style={{ width: "1600px" }} className="mx-auto max-w-full">
        <Slider
          {...settings}
          className="slider-container"
          ref={(slider) => {
            sliderRef.current = slider;
          }}
        >
          {lines.map((line, i) => (
            <RenderSlide
              line={line}
              isActive={activeSlide === i}
              key={line.title}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
