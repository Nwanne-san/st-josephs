import {
  DashboardIcon,
  CreateIcon,
  PatientsIcon,
  ProfileIcon,
} from "../../public/dashboard";

export const sideItems = [
  {
    route: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
    id: "dashboard",
    name: "Dashboard",
  },
  {
    route: "Our Patients",
    link: "/dashboard/patients",
    icon: PatientsIcon,
    id: "patients",
    name: "Patient List",
  },
  {
    route: "Create Account",
    link: "/dashboard/createaccount",
    icon: CreateIcon,
    id: "createaccount",
    name: "New Patient",
  },
  {
    route: "Profile",
    link: "/dashboard/profile",
    icon: ProfileIcon,
    id: "profile",
    name: "Profile",
  },
];
