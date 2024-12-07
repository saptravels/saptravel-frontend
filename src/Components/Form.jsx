import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import SelectCab from './SelectCab';


const BookingForm = () => {

    const InitialState = {
        triptype: "",
        from: "",
        to: "",
        PickUpdate: new Date(),
        pickUpTime: '',
        pickUpLocation: "",
        returndate: new Date(),
        ReturnTime: "",
        returnLocation: "",
        package: "",
        visitingPlaces: [""],
        NumberOfPersons: "",
        CabType: "",
        name: "",
        mobile: "",
        mail: "",
        distance: "",
        fare: "",
        LocalTripType: "Hour-Basis",
        selectedCab:null
    };

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    const reducer = (state, action) => {
        switch (action.type) {
            case "TRIP-TYPE":
                return { ...state, triptype: capitalizeFirstLetter(action.payload) };
            case "FROM":
                return { ...state, from: capitalizeFirstLetter(action.payload) };
            case "TO":
                return { ...state, to: capitalizeFirstLetter(action.payload) };
            case "PICK-UP-DATE":
                return { ...state, PickUpdate: action.payload };
            case "RETURN-DATE":
                return { ...state, returndate: action.payload};
            case "NAME":
                return { ...state, name: capitalizeFirstLetter(action.payload) };
            case "MOBILE":
                return { ...state, mobile: action.payload };
            case "MAIL":
                return { ...state, mail: action.payload };
            case "PICK-UP-LOCATION":
                return { ...state, pickUpLocation: capitalizeFirstLetter(action.payload) };
            case "PICK-UP-TIME":
                return { ...state, pickUpTime: action.payload};
            case "RETURN-LOCATION":
                return { ...state, returnLocation: capitalizeFirstLetter(action.payload)};
            case "RETURN-TIME":
                return { ...state, ReturnTime: action.payload };
            case "ADD-VISITING-PLACE":
                return { ...state, visitingPlaces: [...state.visitingPlaces, ""] };
            case "REMOVE-VISITING-PLACE":
                return { ...state, visitingPlaces: state.visitingPlaces.filter((_, index) => index !== action.payload) };
            case "UPDATE-VISITING-PLACE":
                const updatedVisitingPlaces = state.visitingPlaces.map((place, index) =>
                    index === action.payload.index ? capitalizeFirstLetter(action.payload.value) : place
                );
                return { ...state, visitingPlaces: updatedVisitingPlaces };
            case "NUMBER-OF-PERSONS":
                return { ...state, NumberOfPersons: action.payload };
            case "CAB-TYPE":
               
                return { ...state, CabType: capitalizeFirstLetter(action.payload) };
              
                
            case "LOCAL-TRIP-TYPE":
                return { ...state, LocalTripType: capitalizeFirstLetter(action.payload) };
            case "DISTANCE":
                return { ...state, distance: action.payload };
            case "FARE":
                return { ...state, fare: action.payload };
            case "SELECTED-CAB":
                return{...state, selectedCab: action.payload}   
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, InitialState);
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const FormSubmit = (e) => {
        e.preventDefault();

        if (!state.triptype) {
            setError("Please Select The TripType")
            return
        }
        setError("")


        navigate("/confirmbooking", { state: { ...state,PickUpdate: state.PickUpdate.toLocaleDateString(), returndate: state.returndate.toLocaleDateString() } })


    };

   

    const handleDistanceChange = (e) => {
        const distance = e.target.value;
        dispatch({ type: "DISTANCE", payload: distance });
        // const fare = calculateFare(parseFloat(distance) || 0);
        // dispatch({ type: "FARE", payload: fare });
    };





    return (
        <div className="container form-section">
            <div className="row search-call">
                <div className=" col-md-4 form-left " style={{ backgroundColor: "#005395" }} >
                    <h3>Call Now !</h3>
                    <div className="row">
                        <div className="col-2 phone-icons mt-4">
                            <i className="fa-solid fa-phone" style={{ fontSize: "40px", padding: "8px", color: "white", textAlign: "start" }}></i>
                        </div>
                        <div className=" col-10 callDetails">
                            <h6>Call for detail information</h6>
                            <h2>9994074471</h2>
                        </div>
                    </div>
                </div>
                <div className=" col-md-8 form-right" style={{ backgroundColor: "white" }}>
                    <form className='container-fluid booking-form' onSubmit={FormSubmit}>
                        <div className='row triptype'>
                            <div className='col-4 from-input trip-type-btn'>

                                <button
                                    type='button'
                                    className={`${state.triptype === 'Drop Trip' ? "active" : ""}`}
                                    value="Drop Trip"
                                    onClick={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}>Drop Trip
                                </button>

                                {/* <input
                                    type="radio"
                                    id='Drop-Trip'
                                    name='trip-type'
                                    value="Drop Trip"

                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                />
                                <label htmlFor="Drop-Trip">Drop Trip</label> */}
                            </div>
                            <div className='col-4 from-input trip-type-btn'>
                                <button
                                    type='button'
                                    className={`${state.triptype === 'Local Trip' ? "active" : ""}`}
                                    value="Local Trip"
                                    onClick={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}>Local Trip
                                </button>
                                {/* <input
                                    type="radio"
                                    id='Local-Trip'
                                    name='trip-type'
                                    value="Local Trip"
                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                /> 
                                <label htmlFor="Local-Trip">Local Trip</label>*/}
                            </div>
                            <div className='col-4 from-input trip-type-btn'>
                                <button
                                    type='button'
                                    className={`${state.triptype === 'Outstation' ? "active" : ""}`}
                                    value="Outstation"
                                    onClick={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}>Out Station
                                </button>
                                {/* <input
                                    type="radio"
                                    id='Outstation'
                                    name='trip-type'
                                    value="Outstation"
                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                /> 
                                <label htmlFor="Outstation">Outstation</label>*/}
                            </div>
                        </div>

                        {error && (
                            <div className='row mt-2'>
                                <div className='col-12'>
                                    <p style={{ color: 'red', fontSize: "12px" }} >{error}</p>
                                </div>
                            </div>
                        )}

                        <div className={`row  ${error ? "mt-0" : "mt-4"}`}>
                            <div className='col-6'>
                                <label htmlFor="From">From</label>
                                <input type="text" className='input-field'
                                    id='From'
                                    value={state.from}
                                    required
                                    onChange={(e) => { dispatch({ type: "FROM", payload: e.target.value }) }} />
                            </div>

                            <div className='col-6'>
                                <label htmlFor="To">To</label>
                                <input type="text" className='input-field'
                                    id='To'
                                    value={state.to}
                                    required
                                    onChange={(e) => { dispatch({ type: "TO", payload: e.target.value }) }} />
                            </div>


                        </div>



                        <div className='row mt-3'>
                            <div className='col-4'>
                                <label htmlFor="PickUpLoaction">Pick Up Loaction</label>
                                <input type="text" className='input-field'
                                    id='PickUpLoaction'
                                    value={state.pickUpLocation}
                                    required
                                    onChange={(e) => { dispatch({ type: "PICK-UP-LOCATION", payload: e.target.value }) }} />
                            </div>

                            <div className='col-4'>
                                <label htmlFor="Date">Pick Up Date</label> <br />
                                <Datepicker className='input-field'
                                    selected={state.PickUpdate}
                                    required
                                    onChange={(date) => { dispatch({ type: "PICK-UP-DATE", payload: date }) }} />
                            </div>

                            <div className='col-4'>
                                <label htmlFor="PickUpTime">Pick Up Time</label> <br />
                                <input type="time" className='input-field'
                                    id='PickUpTime'
                                    value={state.pickUpTime}
                                    placeholder="10.00 am"
                                    onChange={(e) => dispatch({ type: "PICK-UP-TIME", payload: e.target.value })}
                                />
                            </div>

                        </div>

                        {state.triptype === "Outstation" && (
                            <>
                                <div className='row mt-3'>
                                    <div className="col-12">
                                        <label htmlFor="Visiting Places">Visiting Places</label>
                                        {state.visitingPlaces.map((place, index) => (
                                            <div className='row mb-2' key={index}>
                                                <div className="col-8">
                                                    <input
                                                        type="text"
                                                        className='input-field'
                                                        value={place}

                                                        onChange={(e) => dispatch({ type: "UPDATE-VISITING-PLACE", payload: { index, value: e.target.value } })}
                                                    />
                                                </div>
                                                <div className='col-4'>
                                                    <button className='visiting-pl-add' type='button' onClick={() => dispatch({ type: "ADD-VISITING-PLACE" })}>+</button>
                                                    <button className='visiting-pl-delete' type='button' onClick={() => dispatch({ type: "REMOVE-VISITING-PLACE", payload: index })}>x</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </>


                        )}



                        {(state.triptype === "Local Trip" || state.triptype === "Outstation") && (
                            <div className='row mt-3'>
                                <div className='col-4'>
                                    <label htmlFor="returnLocation">Return Location <b style={{ fontSize: "12px" }}>(Distination is Garage) </b></label>
                                    <input type="text" className='input-field'
                                        id='DropLoaction'
                                        value={state.ReturnLocation}
                                        placeholder="Aathur,Salem"
                                        required
                                        onChange={(e) => { dispatch({ type: "RETURN-LOCATION", payload: e.target.value }) }} />
                                </div>

                                <div className='col-4'>
                                    <label htmlFor="Date">Return Date</label> <br />
                                    <Datepicker className='input-field'
                                        selected={state.returndate}
                                        required
                                        onChange={(date) => { dispatch({ type: "RETURN-DATE", payload: date }) }} />
                                </div>

                                <div className='col-4'>
                                    <label htmlFor="ReturnTime">Return Time</label>
                                    <input type="time" className='input-field'
                                        id='ReturnTime'
                                        value={state.ReturnTime}
                                        placeholder='2.00 pm'
                                        required
                                        onChange={(e) => dispatch({ type: "RETURN-TIME", payload: e.target.value })} />
                                </div>
                            </div>
                        )}

                        {state.triptype === "Local Trip" && (
                            <div className='row mt-3'>
                                <div className='col-10'>
                                    <label htmlFor="LocalTripType">Select Trip Type</label>
                                    <select
                                        id='LocalTripType'
                                        className='input-field'
                                        value={state.LocalTripType}
                                        required
                                        onChange={(e) => { dispatch({ type: "LOCAL-TRIP-TYPE", payload: e.target.value }) }}
                                    >
                                        <option value="Hour-Basis">Hour-Basis</option>
                                        <option value="Day-Use">Day-Use</option>

                                    </select>
                                </div>
                            </div>
                        )

                        }

                        <div className='row mt-3'>
                            <div className='col-6'>
                                <label htmlFor="NumberOfPersons">Number Of Persons</label>
                                <input type="text" className='input-field'
                                    id='NumberOfPersons'
                                    value={state.NumberOfPersons}
                                    placeholder="4"
                                    required
                                    onChange={(e) => { dispatch({ type: "NUMBER-OF-PERSONS", payload: e.target.value }) }} />
                            </div>

                            <div className='col-6'>
                                <label htmlFor="Distance">Distance <b style={{ fontSize: "12px" }}>({state.from} - {state.to} in km)</b></label>
                                <input type="number" className='input-field'
                                    id='Distance'
                                    value={state.distance}
                                    placeholder="100"
                                    required
                                    onChange={handleDistanceChange}
                                />
                            </div>




                        </div>



                        <div className='row mt-3'>

                            <SelectCab state={state} dispatch={dispatch} />
                            {/* <div className='col-6'>

                                     <label htmlFor="CabType">Cab Type</label> <br />
                                        <select
                                            id='CabType'
                                            className='input-field'
                                            value={state.CabType}
                                            required
                                            onChange={(e) => { dispatch({ type: "CAB-TYPE", payload: e.target.value }) }}
                                        >
                                            <option>3 Seater</option>
                                            <option>4 Seater</option>
                                            <option>5 Seater</option>
                                            <option>6 Seater</option>
                                        </select>

                                    </div> */}
                            {/* <div className='col-6'>
                                        <label htmlFor="Fare">Fare (Rs)</label>
                                        <input type="text" className='input-field'
                                            id='Fare'
                                            value={state.fare}
                                            readOnly
                                        />
                                        <p style={{color:"black"}}>{state.fare}</p>
                                    </div> */}

                        </div>


                        <div className='row mt-4'>
                            <div className="col-12 agree-tc">
                                <input type="checkbox"
                                    required />
                                <label>I agree to the terms & conditions of SAP Travels</label>
                            </div>

                        </div>

                        <div className='row mt-4'>
                            <div className="col-12 search-cab">
                                <button type='submit'>Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingForm;




