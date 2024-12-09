import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import { server } from "../config";

const ConfirmBooking = () => {
  const { state } = useLocation();
  console.log('Selected Cab:', state.selectedCab);
  

  console.log("eeeeeeeeee" , state)
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    mail: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value
    }));
  };

  const [loading, setLoading] = useState(false);

  const BookNow = async (e) => {
    e.preventDefault();
    const bookingDetails = { ...state, ...form };

    setLoading(true);

    try {
      const response = await fetch(`${server}/api/v1/sendemail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bookingDetails })
      });

      const data = await response.json();
      if (data) {
        toast.success('Your booking is confirmed. Our team will contact you soon.');
      } else {
        toast.warning("Failed to book your cab. Please contact our customer support.");
      }
      setForm({
        name: "",
        mobile: "",
        mail: ""
      });
    } catch (error) {
      toast.error("Error sending email: " + error.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='confirmBooking-sec container-fluid'>
      <div className='container'>
        <h5 className='mt-4'>Confirm Your Cab</h5>
        <div className='row mt-4'>
          <div className='col-12'>
            <div className='form-details'>
              <div className='d-flex justify-content-between align-items-center location'>
                <h4>
                  {state.from} &nbsp; &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
                  </svg>
                  &nbsp; &nbsp; {state.to}
                </h4>
                <div>
                  <h4>Date - {state.PickUpdate}</h4>
                  <h4>Time - {state.pickUpTime}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-5 mb-5'>
          <div className='col-12'>
            <div className='container p-0'>
              <div className='row'>
                <div className='col-12 col-lg-8'>
                  <div className='selected-cab'>
                    <div className='selected-cab-img'>
                      <img src={state.selectedCab.imageUrl} alt={state.selectedCab.brand} />
                    </div>
                    <div className='address-details'>
                      <h3 className='my-4' style={{ fontWeight: "bold" }}>{state.selectedCab.brand} {state.carModel}</h3>
                      <p><b>Pick Up Location</b> - {state.pickUpLocation}</p>
                      <p><b>Pick Up Date</b> - {state.PickUpdate}</p>
                      <p><b>Pick Up Time</b> - {state.pickUpTime}</p>
                      {state.triptype === "Outstation" && (
                        <div>
                          <p><b>Visiting Place</b> - {state.visitingPlaces.join(', ')}</p>
                          <p><b>Number Of Persons</b> - {state.NumberOfPersons} Members</p>
                        </div>
                      )}
                      {(state.triptype === "Local Trip" || state.triptype === "Outstation") && (
                        <div>
                          <p><b>Return Location</b> - {state.returnLocation}</p>
                          <p><b>Return Date</b> - {state.returndate}</p>
                          <p><b>Return Time</b> - {state.ReturnTime}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-4'>
                  <div className='price-details'>
                    <h4 style={{ fontWeight: "bold" }}><b style={{ fontWeight: "normal" }}>Total Price -</b> ₹{state.fare} approx</h4>
                  </div>
                  <div className='traveller-details mt-4'>
                    <h6>Fill Your Details</h6>
                    <form onSubmit={BookNow}>
                      <div className='field'>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" id='name' value={form.name} onChange={handleInputChange} required />
                      </div>
                      <div className='field'>
                        <label htmlFor="mobile">Mobile</label> <br />
                        <input type="text" id='mobile' value={form.mobile} onChange={handleInputChange} required />
                      </div>
                      <div className='field'>
                        <label htmlFor="mail">Mail Id</label> <br />
                        <input type="email" id='mail' value={form.mail} onChange={handleInputChange} required />
                      </div>
                      <div>
                        <button type='submit' disabled={loading}>
                          {loading ? <Spinner animation="border" size="sm" /> : 'Book Now'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmBooking;
