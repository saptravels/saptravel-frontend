import React, { useState } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "941fad71-65af-410f-819f-9d4da8a0ac37");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());


        toast.success("Form submitted successfully!");
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });


    };



    return (
        <div className='contact-page'>
            <div className="container-fluid p-0 about-banner">
                <div className="about-img ">
                    <img src="./images/w4.jpg" alt="" />
                </div>
                <div className="about-text container-fluid mx-auto" >
                    <div className='row'>
                        <div className='col-10 col-md-6 about-content'>
                            <h2 style={{ fontWeight: "600" }}>Contact Us</h2>
                            <h5 className='mt-3'>With our reliable cab service, comfort is just a ride away. Contact us to reserve your cab today!
                            </h5>

                            <p className=' bredcrumb mt-3'>
                                <Link to="/" style={{ color: "#deded7", textDecoration: "none" }}>Home/ </Link>
                                <Link to="/contactus" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
                            </p>
                        </div>
                        <div className='col-2 col-md-6'></div>
                    </div>

                </div>

            </div>

            <hr className='bredcrumb-hr' />
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 service-item'>
                        <div className='service-item-inner text-center'>
                            <div className='item'>

                                <h3>Office Location </h3>
                                <p>No 13, Thadagam road, Somayampalayam post, Kanuvai, Coimbatore
                                641108.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 service-item'>
                        <div className='service-item-inner text-center'>
                            <div className='item'>
                                <h3>Phone Number</h3>
                                <a href="tel:9994074471" style={{textDecoration:"none", color:"black"}}> 9994074471</a> ,<br />
                                <a href="tel:9442154471" style={{textDecoration:"none", color:"black"}}> 9442154471</a>,
                                <a href="tel:9443403533" style={{textDecoration:"none", color:"black"}}> 9443403533</a> 
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-md-4 service-item'>
                        <div className='service-item-inner text-center'>
                            <div className='item'>
                                <h3>Email Address</h3>
                                <a href="mailto:abc@gmail.com" style={{textDecoration:"none", color:"black"}}>info@saptravels.in</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='contact-form container mt-3 p-5'>
                <div className='row'>
                    <div className='col-12 col-lg-10 mx-auto'>
                        <h2 style={{textAlign:"center"}}>LEAVE A COMMENT</h2>
                        <p style={{textAlign:"center"}}>The minutes that usually takes to deliver!</p>

                        <form className="container mt-5 con-right" onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-12 col-lg-9 mx-auto">
                                    <div className="row">
                                        <div className="col-12 col-lg-4 mb-4">
                                            <p>Your name</p>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                name="name"
                                                required
                                                className="form-control"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12 col-lg-4 mb-4">
                                            <p>Email Id</p>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                name="email"
                                                value={formData.email}
                                                required
                                                className="form-control"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12 col-lg-4 mb-4">
                                            <p>Phone</p>
                                            <input
                                                type="tel"
                                                placeholder="Enter your phone"
                                                name="phone"
                                                value={formData.phone}
                                                required
                                                className="form-control"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mx-auto">
                                            <textarea
                                                name="message"
                                                rows="7"
                                                placeholder="Enter your message"
                                                required
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formData.message}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary con-submit mb-3">
                                                Submit
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>


            </div>
            <div className="container-fluid">
                <div className="map">
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4636191867157!2d76.96913247504408!3d10.928308889229877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b1072f0a6a7%3A0x40c812a7d5394fdf!2sAIC%20RAISE%20Business%20Incubator!5e0!3m2!1sen!2sin!4v1719557220100!5m2!1sen!2sin"
                        width="100%"
                        height="450px"
                        style={{ border: "0", margin: '0' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </div>

        </div>

    )
}
