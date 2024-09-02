import Slider, { Settings } from "react-slick";

import { useRef } from "react";
import { lines } from "../lines";
import "../teamCarousel.css";
import { CompressedRenderSlide } from "./CompressedRenderSlide";

export const CompressedTeamCarousel = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // autoplay: true,
    draggable: true,
    responsive: [
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
    autoplaySpeed: 2000,
    arrows: false,
  };

  const players = lines.flatMap((line) => [...line.fowards, ...line.defenders]);

  return (
    <div className="w-screen flex flex-col overflow-hidden max-w-full">
      <div className="flex z-10 items-center justify-between lg:container px-4 lg:px-0 w-full mx-auto">
        <button
          className="bg-secondary px-4 flex justify-center items-center rounded-lg"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <h3 className="text-primary">&lt;</h3>
        </button>
        <h2 className="text-secondary w-[250px] text-center">Flyers</h2>
        <button
          className="bg-secondary px-4  flex justify-center items-center rounded-lg"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <h3 className="text-primary">&gt;</h3>
        </button>
      </div>

      <div className="lg:container w-full px-4 lg:px-0 mx-auto bg-secondary rounded h-[1px] mb-5 mt-2"></div>

      <div className="mx-auto max-w-full h-[330px]">
        <Slider
          {...settings}
          className="slider-container"
          ref={(slider) => {
            sliderRef.current = slider;
          }}
        >
          {players.map((member) => (
            <CompressedRenderSlide member={member} key={member.name} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
