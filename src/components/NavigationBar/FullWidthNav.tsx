import { motion, useViewportScroll, useTransform } from "framer-motion";
import { JetScene } from "../../sections/JetScene";
import logo from "./assets/logo.png";
import { NavItem } from "./NavItem";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

export const FullWidthNav = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const { scrollY } = useViewportScroll();

  const top = useTransform(scrollY, [0, 100], [30, 0]);
  const marginTop = useTransform(scrollY, [0, 100], ["-35px", "-15px"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["24px", "0px"]);
  const border = useTransform(
    scrollY,
    [100, 200],
    ["0px", "2px solid rgb(229, 231, 235)"]
  );
  const background = useTransform(
    scrollY,
    [0, 100],
    [
      "linear-gradient(90deg, #201F59 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, #201F59 100%)",
      "linear-gradient(90deg, #201F59 0%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%, #201F59 100%)",
    ]
  );

  const handleUpdateScrollSpy = (item: HTMLElement | null) => {
    const sectionId = item?.getAttribute("id") ?? null;
    if (sectionId) setActiveId(`#${sectionId}`);
    else setActiveId(null);
  };

  return (
    <Scrollspy
      items={["gallery", "trainings", "matches", "table", "aboutUs", "fanShop"]}
      currentClassName="isActive"
      onUpdate={handleUpdateScrollSpy}
    >
      <motion.div
        style={{ top }}
        className="fixed left-0 w-full flex justify-center mx-auto z-50"
      >
        <motion.div
          id="navigation"
          className="container p-4 bg-white rounded-3xl overflow-visible max-h-14"
          style={{
            background,
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            borderBottom: border,
          }}
        >
          <div className="flex justify-center gap-4">
            <NavItem
              label="O nás"
              href="#aboutUs"
              activeId={activeId}
              onClick={setActiveId}
            />
            <NavItem
              label="Tabulka"
              href="#table"
              activeId={activeId}
              onClick={setActiveId}
            />

            <NavItem
              label="Tréninky"
              href="#trainings"
              activeId={activeId}
              onClick={setActiveId}
            />

            <motion.div
              style={{ marginTop }}
              className="w-24 h-24 flex overflow-visible relative justify-center items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="absolute left-0 top-0 z-50">
                <JetScene />
              </div>
              <img
                src={logo}
                className="fade-in-image-fast z-50"
                loading="lazy"
              />
              <div className="rounded-full h-14 w-14 absolute bg-white z-30" />
            </motion.div>

            <NavItem
              label="Zápasy"
              href="#matches"
              activeId={activeId}
              onClick={setActiveId}
            />
            <NavItem
              label="Fotogalerie"
              href="#gallery"
              activeId={activeId}
              onClick={setActiveId}
            />
            <div className="flex flex-col relative w-[80px]"></div>
          </div>
        </motion.div>
      </motion.div>
    </Scrollspy>
  );
};
