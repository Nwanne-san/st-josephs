import { Dial, Clock, Location } from "../../public/icons";

export const details = [
  {
    src: Dial,
    message: "emergency",
    text: "+234 903 954 0722",
    alt: "Telephone",
    href: "tel:+2349012345678",
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
    text: " Nsukka, Enugu, Nigeria. ",
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
    name: "News",
    route: "/blog",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];
