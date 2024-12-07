import React, { useState } from "react";

const CustomTourPackageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPersons: "",
    category: "",
    visitingPlaces: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "941fad71-65af-410f-819f-9d4da8a0ac37"); // Replace with your access key
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("numberOfPersons", formData.numberOfPersons);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("visitingPlaces", formData.visitingPlaces);
    formDataToSend.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        numberOfPersons: "",
        category: "",
        visitingPlaces: "",
        message: "",
      });
    } else {
      setResult("Error: " + data.message);
    }
  };

  return (
    <div className="custom-tour-package-form">
      <h2>Book Your Tour Package</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="numberOfPersons">Number of Persons</label>
        <input
          type="number"
          id="numberOfPersons"
          name="numberOfPersons"
          value={formData.numberOfPersons}
          onChange={handleChange}
          required
        />

        <label htmlFor="category">Package Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
        </select>

        <label htmlFor="visitingPlaces">Visiting Places</label>
        <textarea
          id="visitingPlaces"
          name="visitingPlaces"
          value={formData.visitingPlaces}
          onChange={handleChange}
          required
          placeholder="List the places you want to visit..."
        ></textarea>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Any additional requests or comments..."
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default CustomTourPackageForm;
