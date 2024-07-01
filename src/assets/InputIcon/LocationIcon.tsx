import { IconColor } from "./IconProps";

export const LocationIcon = ({ fill, width, height }: IconColor) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "25"}
      height={height ? height : "25"}
      viewBox="0 0 30 35"
      fill="none"
    >
      <g clipPath="url(#clip0_274_2656)">
        <path
          d="M15 35L4.39339 24.7488C-1.46446 19.0871 -1.46446 9.90784 4.39339 4.24622C10.2513 -1.41541 19.7486 -1.41541 25.6066 4.24622C31.4645 9.90784 31.4645 19.0871 25.6066 24.7488L15 35ZM23.2495 22.4706C27.8056 18.0673 27.8056 10.9278 23.2495 6.52427C18.6935 2.12079 11.3065 2.12079 6.75041 6.52427C2.1943 10.9278 2.1943 18.0673 6.75041 22.4706L15 30.4439L23.2495 22.4706ZM15 17.7192C13.159 17.7192 11.6667 16.2768 11.6667 14.4975C11.6667 12.7182 13.159 11.2758 15 11.2758C16.841 11.2758 18.3333 12.7182 18.3333 14.4975C18.3333 16.2768 16.841 17.7192 15 17.7192Z"
          fill={fill ? fill : "#F05B2D"}
        />
      </g>
      <defs>
        <clipPath id="clip0_274_2656">
          <rect width="30" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
