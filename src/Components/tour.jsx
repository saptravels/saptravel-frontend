import axios from "axios";
import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTour, deleteTour } from "../Slice/toursSlice";
import { Link } from 'react-router-dom';
import Admin from "../Pages/Admin";
import BootstrapCustomTable from "../utilis/customTable"; // Assuming the table is in the same directory
import CustomModal from "../utilis/customModal";
import { Button } from "react-bootstrap";
import {server} from "../config"

export default function Tour() {
    const dispatch = useDispatch();
    const tours = useSelector(state => state.tours.tours) || []; // Default to an empty array
    const [showModal, setShowModal] = useState(false);
    const [selectedRoleId, setSelectedRoleId] = useState(null);

    const confirmDelete = async (id) => {
        try {
            await axios.delete(`${server}/api/v1/deleteTour/${id}`);
            dispatch(deleteTour({ id }));
            setShowModal(false); // Close the modal
            setSelectedRoleId(null);
            fetchData()
            alert('Holiday deleted successfully!');

        } catch (error) {
            console.error("Failed to delete the tour", error.message);
        }
    };
    const handleClose = () => {
        setShowModal(false);
        setSelectedRoleId(null); // Reset selected ID
    };
    const handleDelete = (row) => {
        setSelectedRoleId(row.id);
        setShowModal(true); // Show the modal
    };
    useEffect(() => {
    

        fetchData();
    }, [dispatch]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${server}/api/v1/tour`);
            dispatch(getTour(response.data.tour));
        } catch (error) {
            console.log("Cannot fetch data", error.message);
        }
    };

    // Define headers for the custom table
    const headers = ['Sno', 'Name', 'Services', 'Category', 'Image', 'NoOfPersons', 'PDF', 'Actions'];

    // Prepare data for the custom table
    const tableData = tours.map((tour, index) => ({
        Sno: index + 1,
        id:tour.id,
        Name: tour.name,
        Image: (
            <img
              src={`${tour.imageUrl}`}
              alt="Car"
              className="img-thumbnail"
              style={{ width: '50px', height: 'auto' }}
            />
          ),
        Services: tour.services.map(service => service.name).join(', '),
        Category: tour.category.join(', '),
        NoOfPersons: tour.numberOfPersons,
        PDF: tour.pdf ? (
            <a href={`${tour.pdf}`} target="_blank" rel="noopener noreferrer">Download PDF</a>
        ) : 'N/A',
        Actions: (
            <div className="d-flex justify-content-left gap-2">
                <Link to={`/tourEdit/${tour.id}`}>
                    <button className="btn btn-warning"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(tour.id)}>
                    <i className="fa-solid fa-bucket"></i> Delete
                </button>
            </div>
        ),
    }));

    return (
        <Fragment>
            <Admin />
            <div className="tour-container">
                <div className="d-flex justify-content-between">
                    <h2 className="tour-header">Manage Tour Package</h2>
                    <div className="table-add">
                        <Link to='/tour/create'>
                            <button className="add-button"><i className="fa-solid fa-plus"></i> Add Tour</button>
                        </Link>
                    </div>
                </div>

                <div>
                    {tours.length > 0 ? (
                        <BootstrapCustomTable
                            headers={headers}
                            data={tableData}
                            rowsPerPage={5} // Set default rows per page
                            onEdit={() => { }} // Define onEdit functionality if needed
                            onDelete={handleDelete} // Pass delete function
                        />
                    ) : (
                        <p>No tours available.</p>
                    )}
                </div>
                <CustomModal
                    show={showModal}
                    handleClose={handleClose}
                    handleConfirm={confirmDelete}
                    body={
                        <div>
                            <h4 className='mb-3'>Delete</h4>
                            <p>Are you sure you want to delete?</p>
                            <div className='d-flex justify-content-end gap-2 mt-3'>
                                <Button style={{ backgroundColor: "#6c757d", color: "white" }} onClick={handleClose} >Cancel</Button>
                                <Button style={{ backgroundColor: "rgb(231, 28, 28)", color: "white" }} onClick={() => confirmDelete(selectedRoleId)} >Delete </Button>
                            </div>
                        </div>
                    }
                />
            </div>
        </Fragment>
    );
}
