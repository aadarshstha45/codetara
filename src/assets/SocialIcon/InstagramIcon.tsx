export const InstagramIcon = ({ fill }: { fill: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.8503 0H7.14973C3.20735 0 0 3.20735 0 7.14973V16.8503C0 20.7926 3.20735 24 7.14973 24H16.8503C20.7926 24 24 20.7926 24 16.8503V7.14973C24 3.20735 20.7926 0 16.8503 0ZM21.5856 16.8503C21.5856 19.4655 19.4655 21.5856 16.8503 21.5856H7.14973C4.5345 21.5856 2.4144 19.4655 2.4144 16.8503V7.14973C2.4144 4.53446 4.5345 2.4144 7.14973 2.4144H16.8503C19.4655 2.4144 21.5856 4.53446 21.5856 7.14973V16.8503Z"
        fill={fill ? fill : "white"}
      />
      <path
        d="M12 5.79272C8.57729 5.79272 5.79272 8.57729 5.79272 11.9999C5.79272 15.4226 8.57729 18.2072 12 18.2072C15.4227 18.2072 18.2072 15.4226 18.2072 11.9999C18.2072 8.57725 15.4227 5.79272 12 5.79272ZM12 15.7928C9.90523 15.7928 8.20712 14.0947 8.20712 12C8.20712 9.90523 9.90527 8.20712 12 8.20712C14.0947 8.20712 15.7928 9.90523 15.7928 12C15.7928 14.0947 14.0947 15.7928 12 15.7928Z"
        fill={fill ? fill : "white"}
      />
      <path
        d="M18.219 7.32673C19.0405 7.32673 19.7064 6.66083 19.7064 5.83939C19.7064 5.01796 19.0405 4.35205 18.219 4.35205C17.3976 4.35205 16.7317 5.01796 16.7317 5.83939C16.7317 6.66083 17.3976 7.32673 18.219 7.32673Z"
        fill={fill ? fill : "white"}
      />
    </svg>
  );
};
