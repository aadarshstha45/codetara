type ArrowProps = {
  stroke?: string;
};

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
        stroke={stroke ? stroke : "#F37C57"}
        strokeWidth="1.67"
        strokeLinecap="round"
      />
    </svg>
  );
};

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

export const DownArrow = () => {
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.58301 8.69796L13.1799 18.9302L23.4132 8.33337"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export const LeftArrow = ({ stroke }: ArrowProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.82843 6.9999H16V8.9999H3.82843L9.1924 14.3638L7.7782 15.778L0 7.9999L7.7782 0.22168L9.1924 1.63589L3.82843 6.9999Z"
        fill={stroke ? stroke : "#515151"}
      />
    </svg>
  );
};

export const DownRightArrow = ({ stroke }: ArrowProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"
        fill={stroke ? stroke : "#FFFEFE"}
      />
    </svg>
  );
};

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

export const CalendarIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.50008 0.833313V2.49998H12.5001V0.833313H14.1667V2.49998H17.5001C17.9603 2.49998 18.3334 2.87308 18.3334 3.33331V16.6666C18.3334 17.1269 17.9603 17.5 17.5001 17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6666V3.33331C1.66675 2.87308 2.03985 2.49998 2.50008 2.49998H5.83341V0.833313H7.50008ZM16.6667 9.16665H3.33341V15.8333H16.6667V9.16665ZM5.83341 4.16665H3.33341V7.49998H16.6667V4.16665H14.1667V5.83331H12.5001V4.16665H7.50008V5.83331H5.83341V4.16665Z"
        fill="#444444"
      />
    </svg>
  );
};

export const HourGlassIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_169_2015)">
        <path
          d="M4.99992 5.33329H3.33325V3.66663H16.6666V5.33329H14.9999V6.99996C14.9999 8.34615 14.3198 9.42886 13.4633 10.3139C12.8776 10.9191 12.1649 11.4766 11.4423 12C12.1649 12.5233 12.8776 13.0808 13.4633 13.686C14.3198 14.571 14.9999 15.6538 14.9999 17V18.6666H16.6666V20.3333H3.33325V18.6666H4.99992V17C4.99992 15.6538 5.68005 14.571 6.5365 13.686C7.12227 13.0808 7.83494 12.5233 8.5575 12C7.83494 11.4766 7.12227 10.9191 6.5365 10.3139C5.68005 9.42886 4.99992 8.34615 4.99992 6.99996V5.33329ZM6.66659 5.33329V6.99996C6.66659 7.7371 7.02812 8.42523 7.73417 9.15482C8.33992 9.78078 9.12892 10.3665 9.99992 10.9817C10.8709 10.3665 11.6599 9.78078 12.2657 9.15482C12.9718 8.42523 13.3333 7.7371 13.3333 6.99996V5.33329H6.66659ZM9.99992 13.0182C9.12892 13.6335 8.33992 14.2191 7.73417 14.8451C7.02812 15.5747 6.66659 16.2628 6.66659 17V18.6666H13.3333V17C13.3333 16.2628 12.9718 15.5747 12.2657 14.8451C11.6599 14.2191 10.8709 13.6335 9.99992 13.0182Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_169_2015">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const UserIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 10.689V12.2561C10.0308 12.0902 9.52598 12 9 12C6.51472 12 4.5 14.0147 4.5 16.5H3C3 13.1863 5.68629 10.5 9 10.5C9.51795 10.5 10.0206 10.5656 10.5 10.689ZM9 9.75C6.51375 9.75 4.5 7.73625 4.5 5.25C4.5 2.76375 6.51375 0.75 9 0.75C11.4862 0.75 13.5 2.76375 13.5 5.25C13.5 7.73625 11.4862 9.75 9 9.75ZM9 8.25C10.6575 8.25 12 6.9075 12 5.25C12 3.5925 10.6575 2.25 9 2.25C7.3425 2.25 6 3.5925 6 5.25C6 6.9075 7.3425 8.25 9 8.25ZM13.5 12.75V10.5H15V12.75H17.25V14.25H15V16.5H13.5V14.25H11.25V12.75H13.5Z"
        fill="black"
      />
    </svg>
  );
};

export const AddIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
    >
      <g clipPath="url(#clip0_141_1763)">
        <path
          d="M11.026 11L11 0H11.974L12 11H23V12H12L11.974 23H11L11.026 12H0V11H11.026Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_141_1763">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
