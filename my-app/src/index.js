import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      <p><strong>Basic Pay:</strong> ${parseFloat(basicPay).toFixed(2)}</p>
      <p><strong>Calculated Salary:</strong> ${calculateSalary().toFixed(2)}</p>
    </div>
  );
};

const App = () => {
  const [employeeData, setEmployeeData] = React.useState({
    id: '',
    name: '',
    email: '',
    dateOfJoining: '',
    daysAbsent: '',
    totalDaysInMonth: '',
    basicPay: ''
  });

  const [employees, setEmployees] = React.useState([]);
  const [view, setView] = React.useState(''); // '' (default), 'form', 'viewAll'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees((prevEmployees) => [...prevEmployees, employeeData]);
    setEmployeeData({
      id: '',
      name: '',
      email: '',
      dateOfJoining: '',
      daysAbsent: '',
      totalDaysInMonth: '',
      basicPay: ''
    });
    setView('');
  };

  const handleReset = () => {
    setEmployeeData({
      id: '',
      name: '',
      email: '',
      dateOfJoining: '',
      daysAbsent: '',
      totalDaysInMonth: '',
      basicPay: ''
    });
    setView('');
  };

  const handleLoadForm = () => {
    setView('form');
  };

  const handleViewAll = () => {
    setView('viewAll');
  };

  return (
    <div className="App">
      {view === '' && (
        <div>
          <button onClick={handleLoadForm}>Load Employee Form</button>
          <button onClick={handleViewAll}>View All Employees</button>
        </div>
      )}
      {view === 'form' && (
        <form onSubmit={handleSubmit} className="employee-form">
          <label>
            ID:
            <input
              type="number"
              name="id"
              value={employeeData.id}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={employeeData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date of Joining:
            <input
              type="date"
              name="dateOfJoining"
              value={employeeData.dateOfJoining}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Days Absent:
            <input
              type="number"
              name="daysAbsent"
              value={employeeData.daysAbsent}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Basic Pay:
            <input
              type="number"
              name="basicPay"
              value={employeeData.basicPay}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Cancel</button>
        </form>
      )}
      {view === 'viewAll' && (
        <div className="employee-list">
          <h2>All Employees</h2>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <Employee key={index} {...employee} />
            ))
          ) : (
            <p>No employees to display.</p>
          )}
          <button onClick={() => setView('')}>Back</button>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
