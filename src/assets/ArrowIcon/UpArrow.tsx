import { ArrowProps } from "./ArrowProps";

export const UpArrow = ({ stroke }: ArrowProps) => {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.916 16.8022L12.3191 6.56987L2.08581 17.1667"
        stroke={stroke ? stroke : "black"}
        strokeWidth="2"
      />
    </svg>
  );
};
