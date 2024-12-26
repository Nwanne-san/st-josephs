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
}

  export interface PatientCardProps {
    name: string;
    age: number;
    id: string  | string[];
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
  