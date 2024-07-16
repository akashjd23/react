// Employee.js
import React from 'react';
import './Employee.css';

const Employee = ({ id, name, email, dateOfJoining, daysAbsent, totalDaysInMonth, basicPay }) => {
  const calculateSalary = () => {
    const presentDays = totalDaysInMonth - daysAbsent;
    return (basicPay / totalDaysInMonth) * presentDays;
  };

  return (
    <div className="employee-card">
      <h2>Employee Details</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Date of Joining:</strong> {dateOfJoining}</p>
      <p><strong>Days Absent:</strong> {daysAbsent}</p>
      <p><strong>Total Days in Month:</strong> {totalDaysInMonth}</p>
      <p><strong>Basic Pay:</strong> ${parseFloat(basicPay).toFixed(2)}</p>
      <p><strong>Calculated Salary:</strong> ${calculateSalary().toFixed(2)}</p>
    </div>
  );
};

export default Employee;
