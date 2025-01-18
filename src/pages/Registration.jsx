import React, { useState } from "react";
import '../styles/styles.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    department: "",
    year: "",
    screenshot: null,
    technicalEvent: "",
    nonTechnicalEvent: "",
  });

  const technicalEvents = ["Hackathon", "Coding Contest", "Robotics"];
  const nonTechnicalEvents = ["Debate", "Quiz", "Photography"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      screenshot: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
      <div className="wrap">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>

          {/* College */}
          <div className="input-group">
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
            />
            <label>College</label>
          </div>

          {/* Department */}
          <div className="input-group">
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
            <label>Department</label>
          </div>

          {/* Year */}
          <div className="input-group">
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
            <label>Year</label>
          </div>

          {/* Technical Events */}
          <div className="input-group1">
            <label>Technical Event</label>
            <select
              name="technicalEvent"
              value={formData.technicalEvent}
              onChange={handleChange}
              required
            >
              <option value="">Select Technical Event</option>
              {technicalEvents.map((event, index) => (
                <option key={index} value={event}>
                  {event}
                </option>
              ))}
            </select>
          </div>

          {/* Non-Technical Events */}
          <div className="input-group1">
            <label>Non-Technical Event</label>
            <select
              name="nonTechnicalEvent"
              value={formData.nonTechnicalEvent}
              onChange={handleChange}
              required
            >
              <option value="">Select Non-Technical Event</option>
              {nonTechnicalEvents.map((event, index) => (
                <option key={index} value={event}>
                  {event}
                </option>
              ))}
            </select>
          </div>

          {/* Upload Screenshot */}
          <div className="input-group2">
            <label>Upload Screenshot</label>
            <div className="upload-box" onClick={() => document.getElementById('file-input').click()}>
              {formData.screenshot ? (
                <img src={URL.createObjectURL(formData.screenshot)} alt="Screenshot Preview" />
              ) : (
                <div className="upload-text">Click to Upload</div>
              )}
              <input
                type="file"
                id="file-input"
                name="screenshot"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
  );
}

export default App;
