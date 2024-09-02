import {
  animate,
  AnimatePresence,
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useEffect } from "react";
import { Line, LineMembers } from "./lines";
import "./teamCarousel.css";

import avatar from "./assets/avatar.jpg";

interface RenderSlideProps {
  isActive: boolean;
  line: Line;
}

const duration = 1;

export const RenderSlide = (props: RenderSlideProps) => {
  const topColor = useMotionValue("32, 31, 89, 0.9");
  const bottomColor = useMotionValue("32, 31, 89, 0.9");

  const background = useMotionTemplate`linear-gradient(180deg, rgba(${topColor}) 50%, rgba(${bottomColor})  100%`;

  useEffect(() => {
    if (props.isActive) {
      animate(topColor, "32, 31, 89, 0.2", { duration });
      animate(bottomColor, "239, 68, 68, 1", { duration });
    } else {
      animate(topColor, "32, 31, 89, 0.9", { duration });
      animate(bottomColor, "32, 31, 89, 0.9", { duration });
    }
    // effect is not dependent on background motion value, its fully handled by framer-motion
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isActive]);

  return (
    <div className="flex flex-col justify-center items-center gap-10 px-[32px]">
      <div className="flex gap-10 justify-between items-center w-full">
        {props.line.fowards.map((member) => (
          <Member
            key={member.name}
            member={member}
            background={background}
            isActive={props.isActive}
          />
        ))}
      </div>
      <div className="flex gap-32 justify-center items-center w-full">
        {props.line.defenders.map((member) => (
          <Member
            key={member.name}
            member={member}
            background={background}
            isActive={props.isActive}
          />
        ))}
      </div>
    </div>
  );
};

const Member = ({
  member,
  background,
  isActive,
}: {
  member: LineMembers;
  background: MotionValue<string>;
  isActive?: boolean;
}) => {
  const memberNumber = member.number ? `#${member.number}` : "";

  return (
    <div
      className="relative"
      style={{ maxWidth: "33%", width: "430px" }}
      key={member.name}
    >
      <motion.div style={{ background }} className="image-overlay rounded-3xl">
        <AnimatePresence key={member.name}>
          <motion.div
            className="border-shadow"
            style={{ opacity: isActive ? 1 : 0 }}
          />

          {isActive ? (
            <motion.div className="flex w-full justify-between absolute bottom-0">
              <h3 className="p-5 text-white">
                {memberNumber} {member.name}
              </h3>
              <h3 className="p-5 text-white">{member.position}</h3>
            </motion.div>
          ) : (
            <motion.div className="flex w-full h-full justify-center items-center">
              <h3 className="number-text text-primary opacity-80">
                {memberNumber}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <LazyLoadImage
        height={580}
        src={member.imageSrc ?? avatar}
        placeholderSrc={avatar}
        visibleByDefault
        className="rounded-3xl"
        wrapperClassName="rounded-3xl"
        width={430}
      />
    </div>
  );
};
