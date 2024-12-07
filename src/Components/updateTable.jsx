import { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { updateCar } from "../Slice/carsSlice";
import { useNavigate, useParams, Link } from "react-router-dom";  
import {server} from "../config"

export function UpdateTable(){
    const Cars = useSelector(state => state.Cars.Cars)
    const {id} = useParams();
    const car = Cars.find(u=>u.id === id);
    const [carModel, setCarModel] = useState(car.carModel);
    const [brand, setBrand] = useState(car.brand);
    const [price, setPrice] = useState(car.price);
    const [seats, setSeats] = useState(car.seats);
    const [availability, setAvailability] = useState(true);
    const [description, setDescription] = useState(car.description);
    const [category, setCategory] = useState(car.category);
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(car.imageUrl);
  
    
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setImageUrl(URL.createObjectURL(selectedFile));
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const formData = { carModel, brand, price, seats, availability, description, category,imageUrl  };
        const response = await axios.put(`${server}/api/v1/update/${id}`, formData);
        dispatch(updateCar(response.data.car));
        navigate('/admin');
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
  
    return(
        <Fragment>
          <div className="container create">
          <form onSubmit={handleUpdate} className="create-table">
            <h1 className="create-head mb-5">Update Your Cab Details</h1>

      <div className="form-group">
        <label htmlFor="carModel">Car Model:</label>
        <input
          type="text"
          id="carModel"
          name="carModel"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="seats">Seats:</label>
        <input
          type="number"
          id="seats"
          name="seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="availability">Availability:</label>
        <input
          type="checkbox"
          id="availability"
          name="availability"
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Upload Image:</label>
        <input
          type="file"
          id="imageUrl"
          name="imageUrl"
          onChange={handleFileChange}
        />
      </div>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Image Preview" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
            <option value="Outstation">Outstation</option>
            <option value="Local Trip">Local Trip</option>
            <option value="Drop Trip">Drop Trip</option>
        </select>
      </div>
      <button className="create-submit mb-3" type="submit">Update</button>
      <Link to="/table">
                    <button className="create-cancel" type="button">Cancel</button>
                </Link>
    </form>
          </div>
           
        </Fragment>
    )
}