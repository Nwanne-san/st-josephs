// EditModal Component
import React, { useState } from "react";

interface EditModalProps {
  id: string;
  name: string;
  age: number;
  contactNumber: number;
  bloodGroup: string;
  gender: string;
  onClose: () => void;
  onPatientUpdated: (updatedPatient: {
    name: string;
    age: number;
    contactNumber: number;
    bloodGroup: string;
    gender: string;
  }) => void;
}

const EditModal = ({
  id,
  name: initialName,
  age: initialAge,
  contactNumber: initialContactNumber,
  bloodGroup: initialBloodGroup,
  gender: initialGender,
  onClose,
  onPatientUpdated,
}: EditModalProps) => {
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);
  const [contactNumber, setContactNumber] = useState(initialContactNumber);
  const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);
  const [gender, setGender] = useState(initialGender);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, age, contactNumber, bloodGroup, gender }),
      });

      if (!response.ok) {
        throw new Error("Failed to update patient.");
      }

      const updatedPatient = await response.json();
      onPatientUpdated(updatedPatient);
      alert("Patient updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update patient. Please try again.");
    } finally {
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Contact Number</label>
        <input
          type="number"
          value={contactNumber}
          onChange={(e) => setContactNumber(parseInt(e.target.value) || 0)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Blood Group</label>
        <input
          type="text"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded-lg text-gray-700"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default EditModal;
