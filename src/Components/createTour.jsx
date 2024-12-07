import axios from "axios";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTour } from "../Slice/toursSlice";
import Table from 'react-bootstrap/Table';
import { IoMdClose } from "react-icons/io";
import {server} from "../config"


export default function CreateTour() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [services, setServices] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [pdf, setPdf] = useState(null);
    const [file, setFile] = useState(null);
    const [noOfPersons, setNoOfPersons] = useState(0);
    const [serviceName, setServiceName] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addService = (e) => {
        e.preventDefault();
        if (serviceName.trim()) {
            setServices([...services, { name: serviceName }]);
            setServiceName('');
        }
    };

    const removeService = (index) => {
        const updatedServices = services.filter((_, i) => i !== index);
        setServices(updatedServices);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            setImageUrl(URL.createObjectURL(selectedFile)); // Preview image
        }
    };

    const handlePdfChange = (e) => {
        const selectedPdf = e.target.files[0];
        setPdf(selectedPdf);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("numberOfPersons", noOfPersons);
            formData.append("category", category); // Ensure category is included
            
            // Add services array to formData
            services.forEach((service, index) => {
                formData.append(`services[${index}][name]`, service.name);
            });

            if (file) {
                formData.append("imageUrl", file);
            }
            if (pdf) {
                formData.append("pdf", pdf);
            }

           
            const response = await axios.post(`${server}/api/v1/createTour`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate('/tour');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <div className="container create">
                <form className="create-table" onSubmit={handleSubmit}>
                    <div className="create-head">
                        <h2>Create Tour Package</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceName">Services</label>
                        <div className="d-flex gap-2">
                            <input
                                type="text"
                                id="serviceName"
                                style={{ width: "66%", padding: "10px", borderRadius: "10px" }}
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                            />
                            <button onClick={addService}>Add Services</button>
                        </div>
                    </div>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select a category</option>
                            <option value="Basic">Basic</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noOfPersons">Number of Persons</label>
                        <input
                            type="number"
                            id="noOfPersons"
                            value={noOfPersons}
                            onChange={(e) => setNoOfPersons(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image</label>
                        <input type="file" id="imageUrl" accept="image/*" onChange={handleFileChange} />
                    </div>

                    {imageUrl && (
                        <div>
                            <img src={imageUrl} alt={name} style={{ width: '200px', height: 'auto' }} />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="pdfFile">PDF</label>
                        <input type="file" accept="application/pdf" id="pdfFile" onChange={handlePdfChange} />
                    </div>

                    {pdf && (
                        <div>
                            <p>PDF Selected: {pdf.name}</p>
                        </div>
                    )}

                    <button className="create-submit mb-3" type="submit">Create</button>
                </form>
            </div>
        </Fragment>
    );
}
