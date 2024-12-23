"use client";

import React, { useState, useEffect } from "react";
import PatientCard from "../components/ui/PatientCard";
import PatientRow from "../components/ui/PatientRow";
import api from "@/services/api";
import { Patient } from "@/types";
import Image from "next/image";
// import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GridView, ListView } from "../../../../public/dashboard";
import AddPatient from "../components/ui/AddPatient";

function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("createdAt"); // Default sort by creation time
  const [sortOrder, setSortOrder] = useState("desc"); // Default descending
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const itemsPerPage = 12; // Max items per page
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch patients data
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await api.get("/patients");
        setPatients(response.data);
        setFilteredPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Filter and sort patients
  useEffect(() => {
    let updatedPatients = [...patients];

    // Filter by search query
    if (searchQuery) {
      updatedPatients = updatedPatients.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by selected option
    switch (sortOption) {
      case "age":
        updatedPatients.sort((a, b) =>
          sortOrder === "asc" ? a.age - b.age : b.age - a.age
        );
        break;

      //   case "gender":
      //     updatedPatients.sort((a, b) => a.gender.localeCompare(b.gender));
      //     break;

      case "name":
        updatedPatients.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        break;

      case "createdAt":
      default:
        updatedPatients.sort((a, b) =>
          sortOrder === "asc"
            ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
    }

    setFilteredPatients(updatedPatients);
  }, [searchQuery, sortOption, sortOrder, patients]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPatients = filteredPatients.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-[1.5px] px-4 py-2 rounded-md w-[350px] focus:border-blue-2 duration-200"
        />

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className={
              viewMode === "grid"
                ? "hidden"
                : "border px-4 py-2 rounded-md focus:outline-none"
            }
          >
            <option value="createdAt">Latest Created</option>
            <option value="age">Age</option>
            <option value="gender">Gender</option>
            <option value="name">Name</option>
          </select>
          {/* <Dropdown
            name={sortOption}
            options={["Recent", "Age", "Gender", 'Name']}
            placeholder=""
            onChange={(e) => setSortOption(e.target.value)}

          /> */}
          <Image
            src={viewMode === "grid" ? ListView : GridView}
            alt="Grid/List Icon"
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="duration-200 cursor-pointer"
          />
          {/* Pagination Controls */}
          <div className="flex justify-between items-center gap-2">
            <span>
              {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className=" rounded-md disabled:opacity-50 flex items-center duration-200"
            >
              <ChevronLeft />
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className=" disabled:opacity-50 duration-200"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* View Mode */}
      {viewMode === "grid" ? (
        <div className="z-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 cursor-default">
          <AddPatient
            age={12}
            bloodGroup=""
            contactNumber={1}
            createdAt=""
            gender=""
            id=""
            name=""
            key={``}
          />
          {paginatedPatients.map((patient) => (
            <PatientCard
              key={patient._id}
              surname={patient.surname}
              name={patient.name}
              age={patient.age}
              id={patient._id}
              homeTown={patient.homeTown}
              address={patient.address}
              createdAt={patient.createdAt}
              bloodGroup={patient.bloodGroup}
              contactNumber={patient.contactNumber}
              gender={patient.gender}
              isDisabled={false}
              isLoading={loading}
            />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-start">Name</th>
                <th className="px-4 py-2 text-start">Patient ID</th>
                <th
                  className="px-4 py-2 text-start"
                  onClick={() =>
                    setSortOrder((prevOrder) =>
                      prevOrder === "asc" ? "desc" : "asc"
                    )
                  }
                >
                  Age
                </th>
                <th className="px-4 py-2 text-start">Gender</th>
                <th className="px-4 py-2 text-start">Blood Group</th>
                <th className="px-4 py-2 text-start">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPatients.map((patient) => (
                <PatientRow
                  key={patient._id}
                  name={patient.name}
                  age={patient.age}
                  id={patient._id}
                  bloodGroup={patient.bloodGroup}
                  contactNumber={patient.contactNumber}
                  gender={patient.gender}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PatientsPage;
