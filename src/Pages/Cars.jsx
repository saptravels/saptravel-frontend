import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {server} from "../config"

const Cars = () => {

    const { state } = useLocation()
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch(`${server}/api/v1/avaibleCars?category=${state.triptype}`)
            .then((res) => res.json())
            .then((json) => {
                setCars(json.Cars)

            })

    }, [state.triptype])

    const navigate = useNavigate()
    const SelectCab = (cab) => {
        navigate("/confirmbooking", { state: { ...state, selectedCab: cab } })
    }

    return (
        <section className='all-cabs container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='avail-cars'>
                        <h2>Showing {cars.length} Available Cabs</h2>
                    </div>

                    <div className='container '>
                        <div className='row'>
                            {cars.length > 0 ? cars.map((car, index) => {

                                return (
                                    <div key={index} className='col-4 cabs' >
                                        <div className='cab-inner'>

                                            <div className='cab-img'>
                                                <img src={car.imageUrl} alt="img" />
                                            </div>

                                            <div className='cab-details-content container mt-3'>
                                                <div className='row'>
                                                    <div className='col-8' >
                                                        <div className='car-name-details'>
                                                            <h3 >{car.brand} {car.carModel}</h3>
                                                        </div>

                                                        <div className='car-description'>
                                                            <p>Manual - Petrol - {car.seats} seats</p>

                                                            
                                                            
                                                        </div>

                                                        
                                                        
                                                    </div>

                                                    <div className="col-4 p-0" >
                                                        <div className='cab-fare-inner'>
                                                        <h3 className='cab-fare'> ₹{car.price}</h3>
                                                        <p className='cab-fees'>₹1000 excluding fees</p>

                                                      
                                                        </div>
                                                       
                                                    </div>
                                                </div>

                                                <div className='dotted-line'></div>

                                                <div className='row'>
                                                    <div className='col-12'>
                                                    <p className='pt-3' style={{textWrap:"wrap"}}>{car.description}</p>
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="col-8 ">
                                                        <p className='extra-fea'>Active Fastag</p>

                                                    </div>
                                                    <div className='col-4 p-0'>
                                                    <button className='select-button' type='button' onClick={() => {
                                                            SelectCab(car)
                                                        }}>Select
                                                        </button>
                                                    </div>
                                                </div>


                                            </div>



                                        </div>

                                    </div>


                                )
                            })
                                : <p>No Cars Available</p>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Cars

