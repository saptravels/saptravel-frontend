import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { updateHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import {server} from "../config"

export default function UpdateHoliday() {
  const holidays = useSelector((state) => state.holidays.holidays);
  const { id } = useParams();
  const holiday = holidays.find((u) => u.id === id);

  const [name, setName] = useState(holiday?.name || "");
  const [services, setServices] = useState(holiday?.services || []);
  const [imageUrl, setImageUrl] = useState(holiday?.imageUrl || "");
  const [pdf, setPdf] = useState(holiday?.pdf || "");
  const [serviceName, setServiceName] = useState("");
  const [categories, setCategories] = useState([]); // Array of category objects
  const [categoryName, setCategoryName] = useState(""); // Input for category name
const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addService = (e) => {
    e.preventDefault();
    if (serviceName.trim()) {
      setServices([...services, { name: serviceName }]);
      setServiceName("");
    }
  };

  const removeService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index); // Corrected logic
    setServices(updatedServices);
  };
  const addCategory = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
        setCategories([...categories, { name: categoryName }]); // Push category object with name
        setCategoryName(""); // Clear category input field
    }
};

// Remove a category from the array
const removeCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
};

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePdfChange = (e) => {
    const selectedPdf = e.target.files[0];
    if (selectedPdf) {
      setPdf(selectedPdf);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", JSON.stringify(services));
    formData.append("services", JSON.stringify(services)); // Convert services to a JSON string

    if (file) {
      formData.append("imageUrl", file); // Add image file if selected
    }

    if (pdf) {
      formData.append("pdf", pdf); // Add PDF file if selected
    }

    try {
      const response = await axios.put(
        `${server}/api/v1/updateHoliday/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the content type is set for FormData
          },
        }
      );

      dispatch(updateHoliday(response.data.holiday));
      navigate("/holiday");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div className="container create">
        <form className="create-table" onSubmit={handleSubmit}>
          <div className="create-head">
            <h2>Update Holiday Package</h2>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="serviceName">Services</label>
            <input
              type="text"
              id="serviceName"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
            <button onClick={addService}>Add Services</button>
          </div>
          <div className="form-group">
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  {service.name}
                  <button type="button" onClick={() => removeService(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="form-group">
                        <label htmlFor="category">Categories</label>
                        <input
                            type="text"
                            id="category"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                        <button type="button" onClick={addCategory}>
                            Add Category
                        </button>
                    </div>
                    <div className="form-group">
                        <ul>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    {category.name}
                                    <button
                                        type="button"
                                        onClick={() => removeCategory(index)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image</label>
            <input
              type="file"
              id="imageUrl"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          {file && (
            <div>
              <p>Image Selected: {file.name}</p>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="pdfFile">PDF</label>
            <input
              type="file"
              accept="application/pdf"
              id="pdfFile"
              onChange={handlePdfChange}
            />
          </div>
          {pdf && (
            <div>
              <p>PDF Selected: {pdf.name}</p>
            </div>
          )}
          <button className="create-submit mb-3" type="submit">
            Update
          </button>
          <Link to="/holiday">
            <button className="create-cancel" type="button">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
}
