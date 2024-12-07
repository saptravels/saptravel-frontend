import React, { Fragment, useEffect ,useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, getAllCar } from '../Slice/carsSlice';
import { Link } from 'react-router-dom';
import Admin from "../Pages/Admin";
import CustomTable from "../utilis/customTable";
import CustomModal from '../utilis/customModal';
import { Button } from 'react-bootstrap';
import {server} from "../config"

function Table() {
  const dispatch = useDispatch();
  const cabs = useSelector(state => state.Cabs.Cabs || []);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState(null);

  const confirmDelete = async (id) => {
    try {
      await axios.delete(`${server}/api/v1/delete/${id}`);
      dispatch(deleteCar({ id }));
      setShowModal(false); // Close the modal
      setSelectedRoleId(null);
      fetchData()
      alert('Car deleted successfully!');
    } catch (error) {
      console.error('Error deleting car:', error.message);
      alert('Failed to delete car. Please try again.');
    }
  };

  useEffect(() => {

    fetchData();
  }, [dispatch]);


  const fetchData = async () => {
    try {
      const response = await axios.get(`${server}/api/v1/allCars`);
      dispatch(getAllCar(response.data));
    } catch (error) {
      console.error('Error fetching cars:', error.message);
    }
  };

  const headers = ['S.No', 'Image', 'Model', 'Brand', 'Seats', 'Category', 'Description', 'Actions'];
  const formattedData = cabs.map((car, index) => ({
    'S.No': index + 1,
    Image: (
      <img
        src={`${server}/${car.imageUrl}`}
        alt="Car"
        className="img-thumbnail"
        style={{ width: '50px', height: 'auto' }}
      />
    ),
    Model: car.carModel,
    Brand: car.brand,
    Seats: car.seats,
    Category: car.category,
    Description: car.description,
    Actions: null, // Actions will be handled by BootstrapCustomTable
    id: car._id, // Include `id` to use in the edit/delete handlers
  }));

  const handleClose = () => {
    setShowModal(false);
    setSelectedRoleId(null); // Reset selected ID
  };


  const handleEdit = (car) => {
    // Navigate to the edit page (or trigger edit functionality)
    window.location.href = `/edit/${car.id}`;
  };

  const handleDelete = (row) => {
    setSelectedRoleId(row.id);
    setShowModal(true); // Show the modal
  };

  return (
    <Fragment>
      <Admin />
      <div className="tour-container">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="tour-header">Manage Cabs</h2>
          <Link to="/admin/create">
            <button className="btn btn-success">
              <i className="fa-solid fa-plus"></i> Add Cab
            </button>
          </Link>
        </div>

        {cabs.length > 0 ? (
          <CustomTable
            headers={headers}
            data={formattedData}
            rowsPerPage={5}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <p>No cars available.</p>
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
              <Button  style={{ backgroundColor: "#6c757d", color: "white" }} onClick={handleClose} >Cancel</Button>
              <Button style={{ backgroundColor: "rgb(231, 28, 28)", color: "white" }}  onClick={() => confirmDelete(selectedRoleId)} >Delete </Button>
            </div>
          </div>
        }
      />
    </Fragment>
  );
}

export default Table;
