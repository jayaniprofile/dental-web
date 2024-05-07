import React, { useState } from "react";
import "../Style/RegisterForm.css"; // Import external CSS file

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({}); // State for managing validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation before submitting
    if (validateForm()) {
      // Add your registration logic here
      console.log(formData);
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
      isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      errors.password =
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one numeric digit";
      isValid = false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      {/* <h2>Register</h2> Label at the top of the form */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      {/* Displaying validation errors */}
      {errors.name && <span className="error">{errors.name}</span>}
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      {/* Displaying email validation error */}
      {errors.email && <span className="error">{errors.email}</span>}
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      {/* Displaying password validation error */}
      {errors.password && <span className="error">{errors.password}</span>}
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </label>
      {/* Displaying confirm password validation error */}
      {errors.confirmPassword && (
        <span className="error">{errors.confirmPassword}</span>
      )}
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
