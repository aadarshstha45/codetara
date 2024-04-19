import Image1 from "./galleryImages/1.jpg";
import Image10 from "./galleryImages/10.jpg";
import Image11 from "./galleryImages/11.jpg";
import Image12 from "./galleryImages/12.jpg";
import Image13 from "./galleryImages/13.jpg";
import Image14 from "./galleryImages/14.jpg";
import Image15 from "./galleryImages/15.jpg";
import Image2 from "./galleryImages/2.jpg";
import Image3 from "./galleryImages/3.jpg";
import Image4 from "./galleryImages/4.jpg";
import Image9 from "./galleryImages/9.jpeg";

export const GalleryData = [
  {
    id: 1,
    title: "Gallery 1",
    thumbnail: Image1,
    date: "2021-11-20",
    slug: "gallery1",
    images: [
      {
        id: 1,
        image: Image1,
      },
      {
        id: 2,
        image: Image2,
      },
      {
        id: 3,
        image: Image3,
      },
      {
        id: 4,
        image: Image4,
      },
    ],
  },
  {
    id: 2,
    title: "Gallery 2",
    date: "2025-11-20",
    slug: "gallery2",
    thumbnail: Image9,
    images: [
      {
        id: 1,
        image: Image10,
      },
      {
        id: 2,
        image: Image11,
      },
      {
        id: 3,
        image: Image12,
      },
      {
        id: 4,
        image: Image13,
      },
      {
        id: 5,
        image: Image14,
      },
      {
        id: 6,
        image: Image15,
      },
      {
        id: 7,
        image: Image1,
      },
    ],
  },
];
