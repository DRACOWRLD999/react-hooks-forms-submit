import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    // Clear errors when user starts typing again
    setErrors([]);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    // Clear errors when user starts typing again
    setErrors([]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Validation logic
    if (firstName.trim() === "") {
      setErrors(["First name is required!"]);
      return;
    }
    const formData = { firstName: firstName, lastName: lastName };
    const dataArray = [...props.submittedData, formData];
    props.setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally render error messages */}
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} className="error">
              {error}
            </p>
          ))}
        </div>
      )}
      <h3>Submissions</h3>
      {props.submittedData.map((data, index) => (
        <div key={index}>
          {data.firstName} {data.lastName}
        </div>
      ))}
    </div>
  );
}

export default Form;
