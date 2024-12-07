import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { IoMdClose } from "react-icons/io";
import {server} from "../config"



export default function CreateHoliday() {
    const [name, setName] = useState("");
    const [categories, setCategories] = useState([]); // Array of category objects
    const [categoryName, setCategoryName] = useState(""); // Input for category name
    const [services, setServices] = useState([]); // Array of services with name field
    const [serviceName, setServiceName] = useState(""); // Input for service name
    const [file, setFile] = useState(null); // Image file
    const [pdf, setPdf] = useState(null); // PDF file
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Add a service to the services array
    const addService = (e) => {
        e.preventDefault();
        if (serviceName.trim()) {
            setServices([...services, { name: serviceName }]); // Push service object with name
            setServiceName(""); // Clear service input field
        }
    };

    // Remove a service from the array
    const removeService = (index) => {
        const updatedServices = services.filter((_, i) => i !== index);
        setServices(updatedServices);
    };

    // Add a category to the categories array
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

    // Handle image file change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile); // Set image file
    };

    // Handle PDF file change
    const handlePdfChange = (e) => {
        const selectedPdf = e.target.files[0];
        setPdf(selectedPdf); // Set PDF file
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append("name", name);
            // Append categories as an array of objects
            categories.forEach((category, index) => {
                formData.append(`category[${index}][name]`, category.name);
            });
            formData.append("imageUrl", file); // Add image file
            formData.append("pdf", pdf); // Add PDF file

            // Append services as an array of objects
            services.forEach((service, index) => {
                formData.append(`services[${index}][name]`, service.name);
            });

            const response = await axios.post(
                `${server}/api/v1/createHoliday`,
                formData,
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                }
            );

            if (response.data && response.data.holiday) {
                dispatch(addHoliday(response.data.holiday));
                navigate('/holiday');
            } else {
                console.error("Holiday data is undefined or missing in response.");
            }
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    return (
        <Fragment>
            <div className="container create">
                <form className="create-table" onSubmit={handleSubmit}>
                    <div className="create-head">
                        <h2>Create Holiday Package</h2>
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

                    {/* Services Section */}
                    <div className="form-group">
                        <label htmlFor="serviceName">Services</label>
                        <div className="d-flex  gap-2">
                            <input
                                type="text"
                                id="serviceName"
                                style={{width:"69%" ,padding:"10px" , borderRadius:"10px"}}
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                            />
                            <button type="button" onClick={addService}>
                                Add Service
                            </button>
                        </div>

                    </div>
                    {services.length > 0 && (
                    <div className="mt-3">
                 

                    <Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Service Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, index) => (
                                    <tr key={index}>
                                        <td>{service.name}</td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() => removeService(index)}
                                            >
                                                <IoMdClose />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                  
                    </div>
                            )}

                    {/* Categories Section */}
                    <div className="form-group">
                        <label htmlFor="category">Categories</label>
                        <div className="d-flex gap-2">
                        <input
                            type="text"
                            id="category"
                            style={{width:"66%" ,padding:"10px" , borderRadius:"10px"}}

                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                        <button type="button" onClick={addCategory}>
                            Add Category
                        </button>
                        </div>
                       
                    </div>
                    {categories.length > 0 && (
                    <div className="mt-3">
                    <Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Category Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((service, index) => (
                                    <tr key={index}>
                                        <td>{service.name}</td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() => removeCategory(index)}
                                            >
                                                <IoMdClose />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                   
                   
                    </div>
                     )}

                    {/* Image and PDF File Inputs */}
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

                    <div>
                        <button className="create-submit" type="submit">
                            Create
                        </button>
                        <Link to="/holiday">
                            <button className="create-cancel" type="button">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
