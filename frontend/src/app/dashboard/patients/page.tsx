"use client";

import React, { useState, useEffect } from "react";
import PatientCard from "../components/ui/PatientCard";
import PatientRow from "../components/ui/PatientRow";
import api from "@/services/api";
import { Patient } from "@/types";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { GridView, ListView } from "../../../../public/dashboard";
import AddPatient from "../components/ui/AddPatient";
import Dropdown from "@/components/ui/Dropdown";

function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("createdAt"); // Default sort
  const [sortOrder, setSortOrder] = useState("desc"); // Default descending
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const itemsPerPage = 11; // Max items per page
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch patients data
  useEffect(() => {
    const token = localStorage.getItem("adminToken");

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

    if (token) fetchPatients();
  }, []);

  // Reset all filters
  const resetFilters = () => {
    setSortOption("createdAt");
    setSortOrder("desc");
    setSearchQuery("");
  };

  // Handle dropdown filters
  const handleSortChange = (option: string) => {
    resetFilters(); // Nullify table heading filters
    switch (option) {
      case "Recent":
        setSortOption("createdAt");
        break;
      case "Age":
        setSortOption("age");
        break;
      case "Gender":
        setSortOption("gender");
        setSortOrder("asc"); // Male first for dropdown
        break;
      case "Name":
        setSortOption("name");
        break;
      case "Blood Group":
        setSortOption("bloodGroup");
        setSortOrder("asc");
        break;
      default:
        setSortOption("createdAt");
    }
  };

  // Sort blood groups based on the specific order

  // Filter and sort patients
  useEffect(() => {
    let updatedPatients = [...patients];

    // Filter by search query
    if (searchQuery) {
      updatedPatients = updatedPatients.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    const bloodGroupOrder = ["A-", "A+", "B-", "B+", "AB-", "AB+", "O-", "O+"];

    const sortBloodGroups = (a: string, b: string) => {
      return bloodGroupOrder.indexOf(a) - bloodGroupOrder.indexOf(b);
    };
    // Sort based on selected option
    switch (sortOption) {
      case "age":
        updatedPatients.sort((a, b) =>
          sortOrder === "asc" ? a.age - b.age : b.age - a.age
        );
        break;

      case "gender":
        updatedPatients.sort((a, b) => {
          const order =
            sortOrder === "asc" ? ["Male", "Female"] : ["Female", "Male"];
          return order.indexOf(a.gender) - order.indexOf(b.gender);
        });
        break;

      case "bloodGroup":
        updatedPatients.sort((a, b) =>
          sortOrder === "asc"
            ? sortBloodGroups(a.bloodGroup, b.bloodGroup)
            : sortBloodGroups(b.bloodGroup, a.bloodGroup)
        );
        break;

      case "name":
        updatedPatients.sort((a, b) =>
          sortOrder === "asc"
            ? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            : b.name.toLowerCase().localeCompare(a.name.toLowerCase())
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
        <div className="flex items-center space-x-4 text-nowrap">
          <Dropdown
            name="sortOption"
            options={["Recent", "Age", "Gender", "Name", "Blood Group"]}
            placeholder="Sort By"
            selectedOption={sortOption}
            onChange={handleSortChange}
            className="border px-4 py-2 rounded-md focus:outline-none"
          />
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
            gender=""
            name=""
            key={1}
          />
          {paginatedPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              surname={patient.surname}
              name={patient.name}
              age={patient.age}
              id={patient.id}
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
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full border-collapse border">
            <thead className="bg-secondary/70">
              <tr>
                <th
                  className="px-4 py-2 text-start duration-300 flex"
                  onClick={() => {
                    resetFilters();
                    setSortOption("name");
                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
                  }}
                >
                  Name{" "}
                  <ChevronUp
                    className={`${
                      sortOrder === "asc" ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </th>
                <th className="px-4 py-2 text-start">Patient ID</th>
                <th
                  className="px-4 py-2 text-start"
                  onClick={() => {
                    resetFilters();
                    setSortOption("age");
                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
                  }}
                >
                  Age
                </th>
                <th
                  className="px-4 py-2 text-start cursor-pointer flex "
                  onClick={() => {
                    resetFilters(); // Nullify dropdown filters
                    setSortOption("gender");
                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
                  }}
                >
                  Gender{" "}
                  <ChevronUp
                    className={`transform ${
                      sortOption === "gender" && sortOrder === "asc"
                        ? "rotate-0"
                        : "rotate-180"
                    }`}
                  />
                </th>
                <th
                  className="px-4 py-2 text-start cursor-pointer flex"
                  onClick={() => {
                    resetFilters(); // Nullify dropdown filters
                    setSortOption("bloodGroup");
                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
                  }}
                >
                  Blood Group{" "}
                  <ChevronUp
                    className={`transform ${
                      sortOption === "bloodGroup" && sortOrder === "asc"
                        ? "rotate-0"
                        : "rotate-180"
                    }`}
                  />
                </th>
                <th className="px-4 py-2 text-start">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPatients.map((patient) => (
                <PatientRow
                  key={patient.id}
                  name={patient.name}
                  age={patient.age}
                  _id={patient.id}
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
