import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EnrollForm = () => {
  let navigate  = useNavigate();
  let { batchDetails } = useParams();
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setSelectedMonth(""); // Reset selectedMonth when the year changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const email = localStorage.getItem("userEmail");
      console.log(email);
      
      console.log(batchDetails);
      const enrollmentData = {
        selectedMonth,
        selectedYear, 
        email,
        batchDetails
      };

      const response = await fetch("http://localhost:3000/api/enrole",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(enrollmentData)
      });
      const json = await response.json();
      // console.log(json);

      if(!json.success){
        alert("Enter Valid Credentials");
      }

      if(json.success){
        navigate("/");
      }

};
  

  const filteredMonths = selectedYear === "2023"
    ? months.slice(new Date().getMonth()) // Display upcoming months for 2023
    : months; // Display all months for 2024

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="yearSelect" className="form-label">
            Select Year:
          </label>
          <select
            id="yearSelect"
            className="form-select"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="monthSelect" className="form-label">
            Select Month:
          </label>
          <select
            id="monthSelect"
            className="form-select"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="">Select Month</option>
            {filteredMonths.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          500/-
        </button>
      </form>
    </div>
  );
};

export default EnrollForm;
