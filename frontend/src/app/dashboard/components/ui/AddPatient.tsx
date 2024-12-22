import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AddPatientIcon } from "../../../../../public/dashboard";
import Button from "@/components/ui/Button";

interface AddPatientProps {
  name: string;
  age: number;
  id: string;
  createdAt: string;
  contactNumber: number;
  bloodGroup: string;
  gender: string;
}

function AddPatient({}: AddPatientProps) {
  return (
    <div className="flex flex-col items-center h-full gap-7 px-4 py-3   border-spacing-12 outline-blue-2 rounded-2xl outline-dotted cursor-pointer relative">
      <Link
        href={`/dashboard/createaccount`}
        className="flex flex-col items-center justify-center"
      >
        <Image src={AddPatientIcon} alt="" />
        <Button className="!rounded-lg bg-blue-2 !py-2 text-white !border !border-blue-2 !hover:border-blue-2 hover:text-black">
          Add Patient
        </Button>
      </Link>
    </div>
  );
}

export default AddPatient;
