import { motion } from "framer-motion";
import { useId } from "react";
import "./SegmentControl.css";

type SegmentControlProps<T extends string = string> = {
  items: T[];
  value: T;
  setValue: (value: T) => void;
};

export const SegmentControl = (props: SegmentControlProps) => {
  const id = useId();

  return (
    <div className="control-container">
      {props.items.map((item) => {
        return (
          <div
            className="control-item"
            onClick={() => props.setValue(item)}
            key={item}
          >
            {item === props.value ? (
              <>
                <motion.div
                  layoutId={id}
                  className="control-item-bg bg-primary "
                />
                <div className="control-item-active text-white">{item}</div>
              </>
            ) : (
              <div className="control-item-text text-primary">{item}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
