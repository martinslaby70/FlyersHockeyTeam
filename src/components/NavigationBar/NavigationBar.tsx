import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { FullWidthNav } from "./FullWidthNav";
import { motion } from "framer-motion";

export function NavigationBar() {
  const { width } = useWindowDimensions();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetElement = document.querySelector(
        target.getAttribute("href") || ""
      );

      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 30,
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    // Cleanup event listeners on component unmount
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);

  if (width >= 770) return <FullWidthNav />;

  return (
    <nav className="flex justify-center fixed top-5 left-5 z-40 ">
      <motion.div
        animate={{
          width: isExpanded ? "100%" : "88px",
          height: isExpanded ? "392px" : "40px",
          borderRadius: "20px",
        }}
        className="container flex-wrap  w-full bg-white overflow-hidden shadow-md shadow-black-200"
      >
        <div className="absolute left-0 top-0">
          <button
            className="flex items-center justify-center gap-3 px-3 py-2 rounded text-primary navbar-burger"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <svg
              className="fill-primary h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            Menu
          </button>
        </div>

        <motion.div className="mt-10 w-52 flex-col block justify-center align-middle md:flex md:items-center overflow-visible transition-all ease-in-out md:w-auto md:max-h-5">
          <div className="text-sm flex-col gap-3 justify-center text-center items-center">
            <a href="#aboutUs" className="block p-4 md:inline-block text-back ">
              O nás
            </a>
            <a href="#table" className="block p-4 md:inline-block text-back">
              Tabulka
            </a>
            <a
              href="#trainings"
              className="block p-4 md:inline-block text-back"
            >
              Tréninky
            </a>
            <a className="block p-4 md:inline-block text-back" href="#matches">
              Zápasy
            </a>
            <a className="block p-4 md:inline-block text-back" href="#gallery">
              Fotogalerie
            </a>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
