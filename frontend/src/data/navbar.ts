import { Dial, Clock, Location } from "../../public/icons";

export const details = [
  {
    src: Dial,
    message: "emergency",
    text: "+234 906 674 1647",
    alt: "Telephone",
    href: "tel:+2349066741647",
  },
  {
    src: Clock,
    message: "work hour",
    text: "07:00am till 10:00pm daily",
    alt: "Clock",
  },
  {
    src: Location,
    message: "location",
    text: " Nsukka, Enugu, Nigeria.",
    alt: "Address",
  },
];

export const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About us",
    route: "/aboutus",
  },
  {
    name: "Services",
    route: "/services",
  },

  {
    name: "Contact",
    route: "/contact",
  },
];
