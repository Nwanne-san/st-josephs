"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";
const AdminDashboard: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin"); // Redirect to login if no token
    } else {
      setIsLoggedIn(true);
    }
  }, []);


  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem("token");

      const response = await api.get("/patients", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response) 
      console.log("Patients:", response.data);
      console.log('me')
    };
    fetchPatients();
  }, []);

  if (!isLoggedIn) return <p>Loading...</p>;

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>
        Welcome to the admin dashboard. Manage patients and other data here.
      </p>
    </div>
  );
};

export default AdminDashboard;
