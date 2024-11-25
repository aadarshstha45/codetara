import { IconColor } from "./IconProps";

export const NameIcon = ({ fill, width, height }: IconColor) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "21"}
      height={height ? height : "21"}
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M3.5 19.25C3.5 15.384 6.634 12.25 10.5 12.25C14.366 12.25 17.5 15.384 17.5 19.25H15.75C15.75 16.3505 13.3995 14 10.5 14C7.6005 14 5.25 16.3505 5.25 19.25H3.5ZM10.5 11.375C7.59937 11.375 5.25 9.02563 5.25 6.125C5.25 3.22438 7.59937 0.875 10.5 0.875C13.4006 0.875 15.75 3.22438 15.75 6.125C15.75 9.02563 13.4006 11.375 10.5 11.375ZM10.5 9.625C12.4338 9.625 14 8.05875 14 6.125C14 4.19125 12.4338 2.625 10.5 2.625C8.56625 2.625 7 4.19125 7 6.125C7 8.05875 8.56625 9.625 10.5 9.625Z"
        fill={fill ? fill : "#919191"}
      />
    </svg>
  );
};