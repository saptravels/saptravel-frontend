import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getTour } from "../Slice/toursSlice";
import { Link } from "react-router-dom";
import { server } from "../config";

export default function TourPackages() {
    const dispatch = useDispatch();
    const tours = useSelector((state) => state.tours.tours);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${server}/api/v1/tour`);
                dispatch(getTour(response.data.tour));
            } catch (error) {
                console.log("Cannot fetch data", error.message);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <section>
            <div className="container-fluid p-0 about-banner">
                <div className="about-img ">
                    <img src="./images/w4.jpg" alt="About Us Banner" />
                </div>
                <div className="about-text container-fluid mx-auto">
                    <div className='row'>
                        <div className='col-10 col-md-6 about-content'>
                            <h2 style={{ fontWeight: "600" }}>Tour Package</h2>
                            <h5 className='mt-3'>Unforgettable Journeys, One Package – Discover, Explore, and Enjoy!</h5>

                            <p className='bredcrumb mt-3'>
                                <Link to="/" style={{ color: "#deded7", textDecoration: "none" }}>Home/ </Link>
                                <Link to="/tourPackage" style={{ color: "white", textDecoration: "none" }}>Tour Package</Link>
                            </p>
                        </div>
                        <div className='col-2 col-md-6'></div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="text-center mt-5 pb-5">
                    <h5>OUR SERVICES</h5>
                    <h1>We Provide Best Tour Packages For You</h1>
                </div>

                <section className="tour-package row">
                    {tours.map((tour) => (
                        <div className="tour-package-card col-lg-4" key={tour._id}>
                            <img src={`http://localhost:8000/${tour.imageUrl}`} alt={tour.name} className="img-fluid" />
                            <div className="tour-package-content">
                                <h3>Package: {tour.name}</h3>
                                <h4>Category:  <ul className="tour-category">
                                    <li><i class="fa-solid fa-check"></i> {tour.category}</li>
                                </ul>

                                </h4>
                                <h4>No of Persons: {tour.numberOfPersons}</h4>
                                <p>Service Included:
                                    <ul className="tour-category">
                                        {tour.services.map((ser, i) => (
                                            <li key={i}><i class="fa-solid fa-check"></i> {ser.name}</li>
                                        ))}
                                    </ul>
                                </p>
                                <div className="tour-package-btn">
  <Link to={`/PackageBooknow/${tour._id}`} state={{ tour }}>
    <button>Book Now</button>
  </Link>
</div>
                                <div className="holiday-pdf">
                                    <label htmlFor="pdf">
                                        <h6>PDF</h6>
                                    </label> &nbsp; &nbsp; &nbsp;
                                    {tour.pdf && (
                                        <a
                                        
                                            href={`http://localhost:8000/${tour.pdf}`}  // URL to the PDF file
                                            target="_blank"      // Opens the PDF in a new tab or window
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                        >
                                            Download PDF
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </div> */}

            <div className="container mb-5">
                <div className="text-center mt-5 pb-5">
                    <h5 className="section-title">OUR SERVICES</h5>
                    <h1 className="section-header">We Provide the Best Tour Packages For You</h1>
                </div>

                <section className="row tour-package-section">
                    <div className="table-add">
                        <Link to='/CustomTourPackageForm'>
                            <button className="add-button"><i className="fa-solid fa-plus"></i> Add Customized Tour</button>
                        </Link>
                    </div>
                    {tours.map((tour) => (
                        <div className="tour-package-card col-lg-4 col-md-6 col-sm-12 mb-4" key={tour._id}>
                            <img src={`http://localhost:8000/${tour.imageUrl}`} alt={tour.name} className="img-fluid tour-image" />
                            <div className="tour-package-content">
                                <h3 className="tour-name">Package: {tour.name}</h3>
                                {/* <h4 className="tour-category">
                                    Category: <span className="category-text">{tour.category}</span>
                                </h4> */}
                                <h4 className="head-category mt-3">No of Persons: {tour.numberOfPersons}</h4>
                                <div className="mt-3">
                                    <p className="head-category">
                                        Service Included:
                                    </p>                               
                                     <ul className="tour-services">
                                        {tour.services.map((ser, i) => (
                                            <li key={i}><i className="fa-solid fa-check"></i> {ser.name}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="tour-package-btn">
                                    <Link to={`/PackageBooknow/${tour._id}`} state={{ tour }}>
                                        <button className="btn btn-book-now">Book Now</button>
                                    </Link>
                                </div>
                                <div className="holiday-pdf">
                                    {
                                        tour.pdf && (<h6>For More Details about the package
                                            <a
                                                href={`http://localhost:8000/${tour.pdf}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Tour Itenary
                                            </a>
                                        </h6>)
                                    }

                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

        </section>
    );
}
