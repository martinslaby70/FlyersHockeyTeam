import { AnimatePresence, motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { LineMembers } from "../lines";
import "../teamCarousel.css";

import avatar from "../assets/avatar.jpg";

interface RenderSlideProps {
  member: LineMembers;
}

export const CompressedRenderSlide = ({ member }: RenderSlideProps) => {
  const memberNumber = member.number ? `#${member.number}` : "";

  return (
    <div className="flex flex-col justify-center items-center gap-10 px-[32px]">
      <div className="flex gap-10 justify-between items-center">
        <div className="relative" key={member.name}>
          <motion.div
            style={{
              background:
                "linear-gradient(180deg, rgba(32, 31, 89, 0.2) 50%, rgba(239, 68, 68, 1)  100%",
            }}
            className="image-overlay rounded-3xl"
          >
            <AnimatePresence key={member.name}>
              <motion.div className="flex w-full justify-between absolute bottom-0">
                <h3 className="p-5 text-white">
                  {memberNumber} {member.name}
                </h3>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <LazyLoadImage
            visibleByDefault
            height={580 / 2}
            src={member.imageSrc ?? avatar}
            width={430 / 2}
            className="rounded-3xl shadow-md "
          />
        </div>
      </div>
    </div>
  );
};
