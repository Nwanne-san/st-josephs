"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import api from "@/services/api";
import { Line } from "../../../../../public/icons";
import Button from "@/components/ui/Button";
// import { Ellipsis } from "lucide-react";
import { Patient } from "@/types";
import { info } from "@/data/info";

function PatientProfile() {
  // const router = useRouter();
  // const { id } = router.query; // Extract the patient ID from the route
  const params = useParams(); // Get the dynamic id from params
  const id = params.id;
  console.log(id);
  const [patient, setPatient] = useState<Patient>();

  // Fetch patient details
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await api.get(`/patients/${id}`);
        setPatient(response.data);
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    };

    if (id) fetchPatient();
  }, [id]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div className="flex flex-col w-full">
      <section className="px-8 rounded-lg shadow-xl flex gap-6 xl:gap-14 items-center">
        <div className="flex flex-col items-center text-nowrap xl:pl-6">
          <span className="w-[100px] h-[100px] rounded-full border-8 border-gray-2"></span>
          <div className="flex flex-col items-center">
            <p className="xl:text-xl">
              {patient.surname} {patient.name}{" "}
            </p>
            <p className="text-gray-2 ">
              {" "}
              {patient?.age} yrs | {patient?.gender}
            </p>
          </div>
          <p className="text-lg">{patient.id}</p>
        </div>
        <Image src={Line} alt="" />
        {/* <div className="flex flex-col item-center gap-2 w-full">
          <div className="flex justify-around w-full items-center px-4 text-lg text-nowrap">
            <span className="flex justify-start">Blood Group</span>
            <span>{patient.bloodGroup}</span>
          </div>
          <div className="flex justify-around w-full items-center px-4 text-lg text-nowrap">
            <span className="flex justify-start">Contact Number</span>
            <span>{patient.contactNumber}</span>
          </div>
          <div className="flex justify-around w-full items-center px-4 text-lg text-nowrap">
            <span className="flex justify-start">Address</span>
            <span>{patient.address}</span>
          </div>
          <div className="flex justify-around w-full items-center px-4 text-lg text-nowrap">
            <span className="flex justify-start">Home Town</span>
            <span>{patient.homeTown}</span>
          </div>
          <div className="flex justify-around w-full items-center px-4 text-lg text-nowrap">
            <span>Height</span>
            <span>163cm</span>
          </div>
          <div className="flex justify-around w-full items-center px-4 text-lg text-nowrap">
            <span>Weight</span>
            <span>80kg</span>
          </div>
        </div> */}
        <section className="flex gap-14 w-full px-4 items-center justify-evenly">
          <div className="flex flex-col gap-2">
            {info.map((info, index) => (
              <p key={index}>{info.name} </p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p> {patient.bloodGroup}</p>
            <p> {patient.contactNumber}</p>
            <p> 170cm</p>
            <p>79 kg</p>
            <p> {patient.bloodGroup}</p>
          </div>
        </section>
        <Image src={Line} alt="" />
        <div className="flex justify-center h-full items-center">
          <Button className="shadow-lg !rounded-md text-nowrap flex items-center">
            Create Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}

export default PatientProfile;
