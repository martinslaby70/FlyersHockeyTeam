import { motion } from "framer-motion";

type NavItemProps = {
  href: string;
  label: string;
  activeId: string | null;
  onClick: (href: string) => void;
  isDisabled?: boolean;
};

export const NavItem = (props: NavItemProps) => {
  const isActive = props.activeId === props.href;

  return (
    <div className="flex flex-col relative w-[80px]">
      <a
        href={props.href}
        className={`block mt-4 md:inline-block md:mt-0 text-back hover:text-red-300 text-center ${
          isActive
            ? "text-red-500"
            : props.isDisabled
            ? "text-slate-400"
            : "text-primary"
        }`}
        onClick={() => props.onClick(props.href)}
      >
        {props.label}
      </a>
      {isActive ? (
        <motion.div
          className="w-[80%] ml-[10%] h-[2px] bg-red-600 rounded-2xl"
          layoutId="underline"
        />
      ) : null}
    </div>
  );
};
