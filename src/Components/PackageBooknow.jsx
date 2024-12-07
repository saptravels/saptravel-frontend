import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {server} from "../config"

const PackageBooknow = () => {
  const location = useLocation();
  const { tour } = location.state; // Get tour details from state
  const [result, setResult] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setResult("Sending....");

    // Send data to Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "941fad71-65af-410f-819f-9d4da8a0ac37",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: tour.category.map(cat => cat.name),
          tourName: tour.name,
          services: tour.services.map(service => service.name),
          imageUrl: tour.imageUrl,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', phone: '', category: '' }); // Reset form fields
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while sending the form");
    }
  };

  return (
    <section className="book-now-section package">
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "36px", fontWeight: "600" }}>
          Book Your Package
        </h2>

        {/* Display the selected package image */}
        <div className="row">
          <div className="col-lg-6">
            <img
              src={`${server}/${tour.imageUrl}`}
              alt={tour.name}
              className="img-fluid mb-4"
              style={{ borderRadius: "10px" }}
            />
          </div>

          {/* Booking Form */}
          <div className="col-lg-6">
            <h4 style={{ fontSize: "24px", fontWeight: "500" }}>{tour.name}</h4>
            <h5 style={{ fontSize: "20px", fontWeight: "400" }}>{tour.category.map(cat => cat.name).join(', ')}</h5>
            <p style={{ fontSize: "16px" }}>Services: {tour.services.map(service => service.name).join(', ')}</p>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="category">Choose Package Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: "10px 20px" }}>
                Submit
              </button>
            </form>

            {/* Display result message */}
            {result && <p className="mt-3">{result}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageBooknow;
