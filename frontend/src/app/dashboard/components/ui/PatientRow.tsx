import React from "react";
import Link from "next/link";

interface PatientRowProps {
  name: string;
  age: number;
  _id: string;
  createdAt?: string;
  contactNumber: number;
  bloodGroup: string;
  gender: string;
}

const PatientRow = ({
  name,
  age,
  _id,
  bloodGroup,
  contactNumber,
  gender,
}: PatientRowProps) => {
  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="px-4 py-2">
        <Link href={`/dashboard/patients/${_id}`} className=" hover:underline">
          {name}
        </Link>
      </td>
      <td className="px-4 py-2">{_id}</td>
      <td className="px-4 py-2">{age}</td>
      <td className="px-4 py-2">{gender}</td>
      <td className="px-4 py-2">{contactNumber}</td>
      <td className="px-4 py-2">{bloodGroup} ve</td>
      {/* <td className="px-4 py-2 text-gray-500">{new Date(createdAt).toLocaleDateString()}</td> */}
    </tr>
  );
};

export default PatientRow;
