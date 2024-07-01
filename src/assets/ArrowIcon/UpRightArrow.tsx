import { ArrowProps } from "./ArrowProps";

export const UpRightArrow = ({ stroke }: ArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.0032 9.4105L7.39664 18.0171L5.98242 16.6029L14.589 7.9963L7.00324 7.9963L7.00324 5.9963L18.0032 5.9963V16.9963H16.0032V9.4105Z"
        fill={stroke ? stroke : "#253470"}
      />
    </svg>
  );
};
