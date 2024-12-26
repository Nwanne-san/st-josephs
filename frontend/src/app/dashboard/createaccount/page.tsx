"use client";
import React, { useState } from "react";
import axios from "axios";
import { inputFields } from "../components/FormInput"; // Assuming inputFields is imported
// import { X } from "lucide-react";
// import Dropdown from "@/components/ui/Dropdown";

export default function PatientForm() {
  const [name, setFullName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [errors, setErrors] = useState<string | null>(null);
  const [bloodGroup, setBloodGroup] = useState("");
  const [doB, setDoB] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  // const [admissionDate, setAdmissionDate] = useState("");

  // Handle input change for each field
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "surname":
        setSurname(value);
        break;
      case "name":
        setFullName(value);
        break;
      case "age":
        setAge(value);
        break;

      case "bloodGroup":
        setBloodGroup(value);
        break;

      case "address":
        setAddress(value);
        break;
      case "homeTown":
        setHomeTown(value);
        break;
      case "doB":
        setDoB(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "contactNumber":
        setContactNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/patients", // API endpoint
        {
          surname,
          name,
          age,
          bloodGroup,
          doB: new Date(doB).getTime(), // If using a date input, conve
          gender,
          contactNumber,
          address,
          homeTown,
          // createdBy: 'someUserId',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      alert("Patient created successfully!");
      setErrors(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors("Error submitting the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col relative">
      <div className="grid grid-cols-2 gap-4">
        {inputFields.map((field) => (
          <div key={field.id} className="w-full">
            <label className="block mb-2 text-sm">{field.label}</label>
            {/* {field.type === "dropdown" ? (
              <Dropdown
                name={field.name}
                className="border p-2"
                onChange={handleChange}
                options={field.options}
                placeholder={field.placeholder}
              />
            ) : ( */}
            {field.name === "doB" ? (
              <input
                type="date"
                name="doB"
                value={doB} // Set the value of doB as a date string
                onChange={handleChange}
                className={`border p-2 w-full rounded-lg ${field.className}`}
                // placeholder={field.placeholder}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={
                  field.name === "surname"
                    ? surname
                    : field.name === "name"
                    ? name
                    : field.name === "age"
                    ? age
                    : field.name === "bloodGroup"
                    ? bloodGroup
                    : field.name === "gender"
                    ? gender
                    : field.name === "address"
                    ? address
                    : field.name === "homeTown"
                    ? homeTown
                    : field.name === "contactNumber"
                    ? contactNumber
                    : ""
                }
                onChange={handleChange}
                className={`border p-2 w-full rounded-lg hover:bg-gray-100 ${field.className} `}
                placeholder={field.placeholder}
              />
            )}
            {/* )} */}
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-start mt-4">
        <button
          type="submit"
          className="bg-primary drop-shadow-lg text-white px-6 py-2 rounded"
        >
          Create
        </button>
      </div>

      {/* Errors */}
      {errors && <p className="text-red-600 w-full mt-2">{errors}</p>}
    </form>
  );
}
