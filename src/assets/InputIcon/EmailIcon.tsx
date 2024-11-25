import { IconColor } from "./IconProps";

export const EmailIcon = ({ fill, width, height }: IconColor) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "20"}
      height={height ? height : "20"}
      viewBox="0 0 20 19"
      fill="none"
    >
      <g clipPath="url(#clip0_274_2674)">
        <path
          d="M0.24283 5.44903L9.4895 0.136427C9.8062 -0.0455378 10.2019 -0.0454708 10.5185 0.136599L19.7573 5.44901C19.9079 5.53558 20 5.69147 20 5.85969V18.042C20 18.5711 19.5523 19 19 19H1C0.44772 19 0 18.5711 0 18.042V5.85981C0 5.69152 0.09218 5.53559 0.24283 5.44903ZM2 6.67356V17.0841H18V6.6731L10.0037 2.07512L2 6.67356ZM10.0597 12.0053L15.3556 7.72991L16.6444 9.19499L10.074 14.4992L3.36401 9.2017L4.63599 7.72318L10.0597 12.0053Z"
          fill={fill ? fill : "#919191"}
        />
      </g>
      <defs>
        <clipPath id="clip0_274_2674">
          <rect width="20" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
