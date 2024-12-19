import React, { useState } from "react";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import Modal from "./Modal"; // Import Modal component
import Dialog from "./Dialog"; // Import Dialog component
import EditModal from "../../patients/components/EditModal";

interface PatientCardProps {
  name: string;
  age: number;
  id: string;
  createdAt: string;
  contactNumber: number;
  bloodGroup: string;
  gender: string;
}

function PatientCard({
  name,
  age,
  id,
  createdAt,
  contactNumber,
  bloodGroup,
  gender,
}: PatientCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleEdit = () => {
    setIsEditModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
    setIsDropdownOpen(false);
  };

  const confirmDelete = async () => {
    try {
      console.log("Deleting patient..."); // Debugging line
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete patient.");
      }
      alert("Patient deleted successfully!");
      setIsDeleteDialogOpen(false); // Close the Delete Dialog
    } catch (error) {
      console.error(error);
      alert("Failed to delete patient. Please try again.");
    }
  };

  return (
    <div className="flex flex-col h-full gap-7 px-6 py-3 shadow-xl cursor-pointer relative">
      <section className="flex flex-col gap-3">
        <div className="flex justify-end relative">
          <Ellipsis
            className="cursor-pointer hover:bg-gray-300 rounded-2xl p-2 transition-colors"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-32 bg-white shadow-md rounded-lg border border-gray-200 z-50"
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
        <Link href={`/dashboard/patients/${id}`} className="block">
          <div className="flex gap-2 items-center">
            <span className="w-9 h-9 rounded-full bg-gray-300"></span>
            <div className="flex flex-col">
              <div className="font-bold ">
                <p className="font-bold text-nowrap ">{name}</p>
                <p className="text-[10px] text-gray-400 ">#{id.slice(-6)}</p>
              </div>
              <p className="text-[10px] pt-0.5">
                {age} yrs | {gender}
              </p>
            </div>
          </div>
        </Link>
        <hr className="bg-gray-200" />
      </section>
      <section className="grid grid-cols-2 gap-1 text-nowrap text-xs">
        <span>Blood Group</span>
        <span>{bloodGroup} ve</span>
        <span>Contact </span>
        <span>{contactNumber}</span>
        <span>Last Visit</span>
        <span>{new Date(createdAt).toDateString()}</span>
      </section>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <Modal
          isModalOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          modalHeader="Edit Patient"
        >
           <EditModal
      id={id}
      name={name}
      age={age}
      contactNumber={contactNumber}
      bloodGroup={bloodGroup}
      gender={gender}
      onClose={() => setIsEditModalOpen(false)}
      onPatientUpdated={() => {
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
        />
      )}
    </div>
  );
}

export default PatientCard;
