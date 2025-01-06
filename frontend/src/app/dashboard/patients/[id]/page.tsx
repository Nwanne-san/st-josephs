"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import api from "@/services/api";
import { Line } from "../../../../../public/icons";
import Button from "@/components/ui/Button";
import { Patient } from "@/types";
import { info } from "@/data/info";
import { Ellipsis } from "lucide-react";
import { toast } from "sonner";
import Dialog from "../../components/ui/Dialog";
import Modal from "../../components/ui/Modal";
import EditModal from "../components/EditModal";

function PatientProfile() {
  // const router = useRouter();
  // const { id } = router.query; // Extract the patient ID from the route
  const params = useParams(); // Get the dynamic id from params
  const id = params.id;
  console.log(id);
  const userId = params.id;
  console.log(userId);
  console.log(userId);
  const [patient, setPatient] = useState<Patient>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for delete operation
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference for the dropdown

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    // Close the dropdown if the click is outside the dropdown
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleEdit = () => {
    setIsEditModalOpen(true);
    setIsDropdownOpen(false);
    toast.success("Open");
  };

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
    setIsDropdownOpen(false);
  };

  // Fetch patient details
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await api.get(`/patients/${userId}`);
        console.log(response.data);
        setPatient(response.data);
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    };

    if (userId) fetchPatient();
  }, [userId]);

  const confirmDelete = async () => {
    setLoading(true); // Start loading state when delete begins
    try {
      console.log("Deleting patient..."); // Debugging line
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `http://localhost:5000/api/patients/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete patient.");
      }
      // alert("Patient deleted successfully!");
      toast.success("Patient deleted succesfully");
      setIsDeleteDialogOpen(false); // Close the Delete Dialog
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete patient. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after the process is complete
    }
  };
  if (!patient) return <p>Loading...</p>;

  return (
    <div className="flex flex-col w-full">
      <section className="px-8 rounded-lg shadow-xl flex gap-6 xl:gap-14 items-centr h-full relative">
        <div className="flex flex-col items-center justify-center text-nowrap xl:pl-6">
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
        <div className="flex flex-col justify-evenly gap-16 h-full">
          <div className="flex justify-end relative h-full ">
            <Ellipsis
              className="cursor-pointer hover:bg-gray-300 rounded-2xl  transition-colors"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-32 bg-white shadow-md rounded-lg border border-gray-200 z-50"
                ref={dropdownRef}
                // Prevent closing when clicking inside the popup
              >
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="flex justify-center h-full items-center ">
            <Button className="shadow-lg  !rounded-md text-nowrap !bg-blue-2 flex items-center">
              Create Consultation
            </Button>
          </div>
          {isEditModalOpen && (
            <Modal
              isModalOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
              modalHeader="Edit Patient"
            >
              <EditModal
                id={patient.id}
                surname={patient.surname}
                name={patient.name}
                age={patient.age}
                contactNumber={patient.contactNumber}
                bloodGroup={patient.bloodGroup}
                gender={patient.gender}
                address={patient.address}
                homeTown={patient.homeTown}
                onClose={() => setIsEditModalOpen(false)}
                onPatientUpdated={(updatedPatient) => {
                  setPatient(updatedPatient);
                  // Update the local state or trigger a re-fetch
                  setIsEditModalOpen(false);
                }}
              />
            </Modal>
          )}

          {/* Delete Dialog */}
          {isDeleteDialogOpen && (
            <Dialog
              title="Delete Patient"
              message="Do you really want to delete this patient?"
              onConfirm={confirmDelete}
              onCancel={() => setIsDeleteDialogOpen(false)}
              // disabled={isDisabled || loading} // Disable buttons when either disabled or loading
              loading={loading}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default PatientProfile;
