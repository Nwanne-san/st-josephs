export interface Patient {
  id: string;
  _id: string;
  surname: string;
  name: string;
  age: number;
  contactNumber: number;
  bloodGroup: string;
  address: string;
  homeTown: string;
  gender: string;
  createdAt: Date;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface PatientCardProps {
  name: string;
  age: number;
  id: string | string[];
  createdAt: Date;
  contactNumber: number;
  bloodGroup: string;
  gender: string;
  address: string;
  surname: string;
  homeTown: string;
  isDisabled: boolean;
  isLoading: boolean;
}

export interface Iproperties {
  sideNavitems?: {
    route: string;
    link: string;
    icon: string;
    id: string;
    name: string;
  }[];
  className?: string;
}