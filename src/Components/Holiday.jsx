import { Fragment, useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHoliday, getHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import { Link } from "react-router-dom";
import Admin from "../Pages/Admin";
import BootstrapCustomTable from "../utilis/customTable"; // Assuming the table is in the same directory
import CustomModal from "../utilis/customModal";
import { Button } from "react-bootstrap";
import {server} from "../config"

export default function Holiday() {
    const dispatch = useDispatch();
    const holidays = useSelector((state) => state.holidays.holidays);
    const [showModal, setShowModal] = useState(false);
    const [selectedRoleId, setSelectedRoleId] = useState(null);
  

    const confirmDelete = async (id) => {

        try {
            await axios.delete(`${server}/api/v1/deleteHoliday/${id}`);
            dispatch(deleteHoliday({ id }));
            setShowModal(false); // Close the modal
            setSelectedRoleId(null);
            fetchData()
            alert('Holiday deleted successfully!'); // Dispatch the action after the response
        } catch (error) {
            console.error("Error deleting holiday:", error);
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

    const handleEdit = (holiday) => {
        // Redirect to edit page with the selected holiday ID
        window.location.href = `/holidayEdit/${holiday.id}`;
    };

    useEffect(() => {
     
        fetchData();
    }, [dispatch]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${server}/api/v1/holiday`);
            dispatch(getHoliday(response.data.holidays));
        } catch (error) {
            console.error("Error fetching holidays:", error.message);
        }
    };

    const headers = ["Sno", "Name","Image" ,"Services", "Category", "PDF", "Actions"];
    const data = holidays.map((holiday, index) => ({
        Sno: index + 1,        
        id: holiday.id,
        Name: holiday.name,
        Image: (
            <img
              src={`${server}/${holiday.imageUrl}`}
              alt="Car"
              className="img-thumbnail"
              style={{ width: '50px', height: 'auto' }}
            />
          ),
        Services: holiday.services.map((service) => service.name).join(", "),
        Category: holiday.category?.map((cat) => cat.name).join(", ") || "",
        PDF: holiday.pdf ? (
            <a href={`${server}/${holiday.pdf}`} target="_blank" rel="noopener noreferrer">
                Download PDF
            </a>
        ) : (
            "N/A"
        ),
        Actions: holiday, // Pass the whole object for edit and delete actions
       
    }));

    return (
        <Fragment>
            <Admin />
            <div className="tour-container">
                <div className="d-flex justify-content-between">
                    <h2 className="tour-header">Manage Holiday Package</h2>
                    <div className="table-add">
                        <Link to="/holiday/create">
                            <button className="add-button">
                                <i className="fa-solid fa-plus"></i> Add Holiday
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-5">
                    <BootstrapCustomTable
                        headers={headers}
                        data={data}
                        rowsPerPage={5}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        />
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
            </div>
        </Fragment>
    );
}
