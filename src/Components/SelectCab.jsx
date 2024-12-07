import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCar } from '../Slice/carsSlice';
import {server} from "../config"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SelectCab = ({ state }) => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const dispatch=useDispatch()
    const cabs = useSelector(state => state.Cabs.Cabs || []);
    const [cab, setCabs] = useState([]);
        const [selectedCarModel, setSelectedCarModel] = useState("");


    const openPopup = () => {
        if (state.triptype && state.NumberOfPersons && state.distance) {
            setOpenPopUp(true);
            document.body.classList.add('dull-background');
        } else {
            if (!state.triptype) alert("Please choose the trip type");
            if (!state.NumberOfPersons) alert("Please fill the number of persons");
            if (!state.distance) alert("Please fill the distance");
        }
    };

    const closePopup = () => {
        setOpenPopUp(false);
        document.body.classList.remove('dull-background');
    };

    const getPriceRange = (distance) => {
        if (distance >= 0 && distance <= 25) return "0-25";
        if (distance > 25 && distance <= 50) return "26-50";
        if (distance > 50 && distance <= 75) return "51-75";
        if (distance > 75 && distance <= 100) return "76-100";
        if (distance > 100 && distance <= 150) return "101-150";
        if (distance > 150 && distance <= 200) return "151-200";
        if (distance > 200 && distance <= 250) return "201-250";
        return ">250";
    };

    const getKmRange = (distance) => {
        if (distance >= 0 && distance <= 400) return "0-400";
        return ">400";
    };

    useEffect(() => {

        fetchData();
      }, []);
    
    
      const fetchData = async () => {
        try {
          const response = await axios.get(`${server}/api/v1/allCars`);
          dispatch(getAllCar(response.data));
        } catch (error) {
          console.error('Error fetching cars:', error.message);
        }
      };

    useEffect(() => {
        if (state.triptype && state.NumberOfPersons && state.distance) {
            let apiUrl = `${server}/api/v1/allFilteredCabs?category=${state.triptype}&seats=${state.NumberOfPersons}`;

            if (state.triptype === 'Drop Trip' || state.triptype === 'Outstation') {
                apiUrl += `&distance=${state.distance}`;
            }
            if (state.triptype === 'Local Trip' && state.LocalTripType) {
                apiUrl += `&LocalTripType=${state.LocalTripType}`;
            }

            fetch(apiUrl)
                .then((res) => res.json())
                .then((json) => {
                    setCabs(json.filteredCabs);
                });
        }
    }, [state.triptype, state.NumberOfPersons, state.distance, state.LocalTripType]);

    const handleSelectCab = (cab) => {
        let fareForCab;
        let additionalInfo = "";

        if (state.triptype === "Local Trip") {
            const localType = state.LocalTripType;
            const localTripData = cab.localTripType[localType];

            if (localTripData) {
                fareForCab = localTripData.minCharge || localTripData.perDayRent || "Price not available";

                additionalInfo = localType === "Hour-Basis" ?
                    `${localTripData.minCharge} for 2hrs 20km ----- ${localTripData.extraHourCharge}₹/Extra Hour ----- ${localTripData.extraKmCharge}₹/Extra Km` :
                    `Free For ${localTripData.freeKm}km  ----- ${localTripData.extraKmCharge}₹/Extra Km`;
            } else {
                fareForCab = "Not available for selected trip type";
            }
        }

        if (state.triptype === "Drop Trip") {
            const priceRange = getPriceRange(state.distance);
            fareForCab = cab.pricePerKm[priceRange]?.totalFare || (cab.pricePerKm[priceRange]?.price * state.distance) || "Price not available";
            additionalInfo = cab.pricePerKm[priceRange]?.additionalInfo || "";
        }

        if (state.triptype === "Outstation") {
            const priceRange = getKmRange(state.distance);
            fareForCab = ((cab.pricePerday[priceRange]?.kmCharge * state.distance) + (cab.pricePerday[priceRange]?.driverBeta || 0)) || "Price not available";
        }

        const selectedCab = `${cab.brand || ""} ${cab.carModel || ""} - ${cab.seats} Seater`;
        dispatch({ type: "CAB-TYPE", payload: selectedCab });
        dispatch({ type: "FARE", payload: fareForCab });
        dispatch({ type: "SELECTED-CAB", payload: cab });
        closePopup();
    };

    const handleCarModelChange = (e) => {
        const carModel = e.target.value;
        setSelectedCarModel(carModel);
        dispatch({ type: "SELECTED-CAR-MODEL", payload: carModel });
    };


    return (
        <>
            <div className='col-6'>
                <label htmlFor="SelectCab">Select Cab</label> <br />
            <select
                id="carModelDropdown"
                value={selectedCarModel}
                onChange={handleCarModelChange}
                className="car-model-dropdown"
            >
                <option value="">-- Select Car Model --</option>
                {cabs.map((cab) => (
                    <option key={cab._id} value={cab.carModel}>
                        {cab.carModel} ({cab.brand})
                    </option>
                ))}
            </select>
            </div>
            <div className='col-6 text-right'>
                <p className='fare-text mt-4' style={{ color: "black" }}>
                    approx&nbsp;<b style={{ fontSize: "30px" }}>₹{state.fare}</b>
                </p>
                <Link to="/terms&conditions">
                    <p className='fare-explanation' style={{ color: "black", marginTop: "-20px", fontSize: "10px", textAlign: "right" }}>
                        Terms & conditions Applicable
                    </p>
                </Link>
            </div>

            {openPopUp && (
                <div className="slider-popup">
                    <div onClick={closePopup}>
                        <i className="fa-solid fa-x close-btn"></i>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {cabs && cabs.length > 0 ? (
                            cabs.filter(cab => {
                                if (state.triptype === "Local Trip" && state.LocalTripType) {
                                    return cab.localTripType[state.LocalTripType];
                                }
                                return true;
                            }).map((cab) => {
                                let fareForCab;
                                let additionalInfo;

                                if (state.triptype === "Local Trip") {
                                    const localType = state.LocalTripType;
                                    fareForCab = cab.localTripType[localType]?.minCharge || "Price not available";

                                    additionalInfo = localType === "Hour-Basis" ?
                                        `${cab.localTripType[localType]?.minCharge} for 2hrs 20km ----- ${cab.localTripType[localType]?.extraHourCharge}₹/Extra Hour` :
                                        `Free For ${cab.localTripType[localType]?.freeKm}km  ----- ${cab.localTripType[localType]?.extraKmCharge}₹/Extra Km`;
                                } else if (state.triptype === "Drop Trip") {
                                    const priceRange = getPriceRange(state.distance);
                                    fareForCab = cab.pricePerKm[priceRange]?.totalFare || "Price not available";
                                    additionalInfo = cab.pricePerKm[priceRange]?.additionalInfo || "";
                                } else if (state.triptype === "Outstation") {
                                    const priceRange = getKmRange(state.distance);
                                    fareForCab = ((cab.pricePerday[priceRange]?.kmCharge * state.distance) + (cab.pricePerday[priceRange]?.driverBeta || 0)) || "Price not available";
                                }

                                return (
                                    <SwiperSlide key={cab._id} style={{ color: "black" }}>
                                        <div className='col-12 cabs'>
                                            <div className='cab-inner'>
                                                <div className='cab-img'>
                                                    <img src={cab.imageUrl} alt="Cab" />
                                                </div>
                                                <div className='cab-details-content container mt-3'>
                                                    <div className='row'>
                                                        <div className='col-8'>
                                                            <div className='car-name-details'>
                                                                <h3>{cab.carModel}</h3>
                                                            </div>
                                                            <div className='car-description'>
                                                                <p>Manual - {cab.brand} - {cab.seats} seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 p-0">
                                                            <div className='cab-fare-inner'>
                                                                <h3 className='cab-fare'> ₹{fareForCab}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='dotted-line'></div>
                                                    <div className='row'>
                                                        <div className='col-12'>
                                                            <p className='pt-3'>{cab.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className="col-9">
                                                            <p className='extra-fea'>{additionalInfo}</p>
                                                        </div>
                                                        <div className='col-3 p-0' style={{ textAlign: "end" }}>
                                                            <button className='select-button mx-2' type='button' onClick={() => handleSelectCab(cab)}>
                                                                Select
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        ) : (
                            <div style={{ color: "black" }}>No cabs available</div>
                        )}
                    </Swiper>
                </div>
            )}
        </>
    );
};

export default SelectCab;
