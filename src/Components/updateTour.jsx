import axios from "axios";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { updateTour } from "../Slice/toursSlice";
import {server} from "../config"

export default function UpdateTour() {
    const tours = useSelector((state) => state.tours.tours);
    const { id } = useParams();
    const tour = tours.find((u) => u.id === id);

    const [name, setName] = useState(tour?.name || '');
    const [category, setCategory] = useState(tour?.category || 'Basic');
    const [services, setServices] = useState(tour?.services || []);
    const [imageUrl, setImageUrl] = useState(tour?.imageUrl || '');
    const [pdf, setPdf] = useState(null); // Updated to handle the file directly
    const [file, setFile] = useState(null);
    const [noOfPersons, setNoOfPersons] = useState(tour?.noOfPersons || '');
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
            setImageUrl(URL.createObjectURL(selectedFile));
        }
    };

    const handlePdfChange = (e) => {
        const selectedPdf = e.target.files[0];
        if (selectedPdf) {
            setPdf(selectedPdf);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formData = new FormData(); // Create FormData object to handle file uploads
            formData.append('name', name);
            formData.append('category', category);
            formData.append('services', JSON.stringify(services)); // Convert services array to a JSON string
            formData.append('noOfPersons', noOfPersons);
            if (file) {
                formData.append('image', file); // Append image file if selected
            }
            if (pdf) {
                formData.append('pdf', pdf); // Append PDF file if selected
            }
    
            const response = await axios.put(`${server}/api/v1/updateTour/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the content type to multipart for file upload
                },
            });
    
            dispatch(updateTour(response.data.tour));
            navigate('/tour');
        } catch (error) {
            console.log(error.message);
        }
    };
    

    return (
        <Fragment>
            <div className="container create">
                <form className="create-table" onSubmit={handleSubmit}>
                    <div className="create-head">
                        <h2>Update Your Tour Details</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
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
                            {Array.isArray(services) && services.map((service, index) => (
                                <li key={index}>
                                    {service.name}
                                    <button type="button" onClick={() => removeService(index)}>Remove</button>

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Basic">Basic</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noOfPersons">Number of Persons</label>
                        <input
                            type="text"
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
                        <label htmlFor="pdf">PDF</label>
                        <input type="file" accept="application/pdf" id="pdf" onChange={handlePdfChange} />
                    </div>

                    {pdf && (
                        <div>
                            <a href={URL.createObjectURL(pdf)} target="_blank" rel="noopener noreferrer">
                                View PDF
                            </a>
                        </div>
                    )}

                    <button className="create-submit mb-3" type="submit">Update</button>
                    <Link to="/tour">
                    <button className="create-cancel" type="button">Cancel</button>
                </Link>
                </form>
            </div>
        </Fragment>
    );
}
