import React, { useState } from "react";
import { toast } from "sonner";
import InputField from "../../components/ui/InputField";
// import { useRouter } from "next/navigation";

interface EditModalProps {
  id: string | string[];
  surname: string;
  name: string;
  age: number;
  contactNumber: number;
  bloodGroup: string;
  gender: string;
  address: string;
  homeTown: string;
  onClose: () => void;
  onPatientUpdated: (updatedPatient: {
    id: string;
    // _id: string;
    surname: string;
    name: string;
    age: number;
    contactNumber: number;
    bloodGroup: string;
    address: string;
    homeTown: string;
    gender: string;
    createdAt: Date;
  }) => void;
}

const EditModal = ({
  id,
  surname: initialSurname,
  name: initialName,
  age: initialAge,
  contactNumber: initialContactNumber,
  bloodGroup: initialBloodGroup,
  gender: initialGender,
  address: initialAddress,
  homeTown: initialHomeTown,
  onClose,
  onPatientUpdated,
}: EditModalProps) => {
  const [surname, setSurname] = useState(initialSurname);
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);
  const [contactNumber, setContactNumber] = useState(initialContactNumber);
  const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);
  const [gender, setGender] = useState(initialGender);
  const [address, setAddress] = useState(initialAddress);
  const [homeTown, setHomeTown] = useState(initialHomeTown);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `http://localhost:5000/api/patients/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            surname,
            name,
            age,
            contactNumber,
            bloodGroup,
            gender,
            address,
            homeTown,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update patient.");
      }

      const updatedPatient = await response.json();
      onPatientUpdated(updatedPatient);
      toast.success("Patient updated successfully!");
      setIsSubmitting(true);
      // setTimeout(() => {
      //   window.location.reload(); // or router.reload() for Next.js
      // }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update patient. Please try again.");
    } finally {
      setIsSubmitting(false);
      onClose();
      // router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4">
        <InputField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <InputField
          label="Age"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
        />
        <InputField
          label="Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(parseInt(e.target.value) || 0)}
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
        <label className="block text-sm font-medium">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Home Town</label>
        <input
          type="text"
          value={homeTown}
          onChange={(e) => setHomeTown(e.target.value)}
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
