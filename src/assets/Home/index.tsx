import {
  CustomerIcon,
  InnovationIcon,
  QualityIcon,
} from "./homeImages/approachIcon";
import {
  AcmeLogo,
  ApexLogo,
  CelestiaLogo,
  EchoLogo,
  PulseLogo,
  QuantumLogo,
} from "./homeImages/companyLogos";
import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
  ServiceIcon6,
} from "./homeImages/serviceIcons";
import Sandip from "./homeImages/testimonialImages/man.png";
import Sunil from "./homeImages/testimonialImages/man2.png";
import Ishwor from "./homeImages/testimonialImages/programmer.png";
export const approachData = [
  {
    id: 1,
    title: "Innovation & Research",
    description:
      "We continuously explore new technologies and industry trends to innovate & provide forward-thinking solutions.",
    icon: <InnovationIcon />,
  },
  {
    id: 2,
    title: "Customer-centric Approach",
    description:
      "We prioritize understanding our clients unique needs and goals. our customer-centric approach ensures that every solution we deliver meet  their specific requirements. ",

    icon: <CustomerIcon />,
  },
  {
    id: 3,
    title: "Quality Assurance",
    description:
      "Quality is a paramount in our work.Through rigorous assurance processes,we guarantee that our software and applications are capable.",
    icon: <QualityIcon />,
  },
];
export const companyLogo = [
  {
    id: 1,
    title: "Acme",
    image: <AcmeLogo />,
  },
  {
    id: 2,
    title: "Apex",
    image: <ApexLogo />,
  },
  {
    id: 3,
    title: "Celestia",
    image: <CelestiaLogo />,
  },
  {
    id: 4,
    title: "Echo",
    image: <EchoLogo />,
  },
  {
    id: 5,
    title: "Pulse",
    image: <PulseLogo />,
  },
  {
    id: 6,
    title: "Quantum",
    image: <QuantumLogo />,
  },
];
export const serviceData = [
  {
    id: 1,
    title: "Software Development",
    description:
      "We continuously explore new technologies and industry trends to innovate & provide forward-thinking solutions.",
    icon: <ServiceIcon1 />,
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "We prioritize understanding our clients unique needs and goals. our customer-centric approach ensures that every solution we deliver meet  their specific requirements. ",

    icon: <ServiceIcon2 />,
  },
  {
    id: 3,
    title: "App Development",
    description:
      "Quality is a paramount in our work.Through rigorous assurance processes,we guarantee that our software and applications are capable.",
    icon: <ServiceIcon3 />,
  },
  {
    id: 4,
    title: "Product Design",
    description:
      "Quality is a paramount in our work.Through rigorous assurance processes,we guarantee that our software and applications are capable.",
    icon: <ServiceIcon4 />,
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Quality is a paramount in our work.Through rigorous assurance processes,we guarantee that our software and applications are capable.",
    icon: <ServiceIcon5 />,
  },
  {
    id: 6,
    title: "Digital Transformation",
    description:
      "Quality is a paramount in our work.Through rigorous assurance processes,we guarantee that our software and applications are capable.",
    icon: <ServiceIcon6 />,
  },
];

export const testimonialData = [
  {
    id: 1,
    name: "Sandip Silwal",
    designation: "CEO, Code Tara",
    message:
      "As the CEO, I am proud to say that our company has been instrumental in driving our growth and success. It has empowered our team to innovate, collaborate, and deliver exceptional solutions to our clients.",
    bgColor: "#87CEEB",
    image: Sandip,
  },
  {
    id: 2,
    name: "Sunil Pathak",
    designation: "MD, Code Tara",
    message:
      "Code Tara has become an indispensable asset for our team. It has streamlined our project management process and boosted our productivity.",
    bgColor: "#FFD700",
    image: Sunil,
  },
  {
    id: 3,
    name: "Ishwor Deep",
    designation: "Software Developer",
    message:
      "Code Tara has revolutionized our approach to software development. It has helped us deliver high-quality products to our clients on time and within budget.",

    bgColor: "#F5F5DC",
    image: Ishwor,
  },
];
