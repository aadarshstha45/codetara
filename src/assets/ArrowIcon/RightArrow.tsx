import { ArrowProps } from "./ArrowProps";

export const RightArrow = ({ stroke }: ArrowProps) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66663 10.5911H15.5M11.3333 5.59106L15.744 10.0018C16.0695 10.3272 16.0695 10.8549 15.744 11.1803L11.3333 15.5911"
        stroke={stroke ?? "#F37C57"}
        strokeWidth="1.67"
        strokeLinecap="round"
      />
    </svg>
  );
};
