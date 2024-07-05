import { EmailIcon, LocationIcon, PhoneIcon } from "@/assets/InputIcon";

export const contactData = [
  {
    id: 1,
    title: "Address",
    icon: <LocationIcon fill="#F05B2D" />,
    body: "Banasthali, Kathmandu, Nepal",
    link: "https://maps.app.goo.gl/UxpX2RpWr2qaMr7U7",
  },
  {
    id: 2,
    title: "Email",
    icon: <EmailIcon fill="#F05B2D" width="25px" height="25px" />,
    body: "info@wavesolution.com",
    link: "mailto:info@wavesolution.com",
  },
  {
    id: 3,
    title: "Phone",
    icon: <PhoneIcon fill="#F05B2D" width="25px" height="25px" />,
    body: "01-5920434, +977 980-2378603",
    link: "tel:01-5920434",
  },
];
