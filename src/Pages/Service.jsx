import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getHoliday } from "../Slice/holidaySlice";
import { Link } from "react-router-dom";
import { server } from "../config";

const Service = () => {
  const dispatch = useDispatch();
  const holidays = useSelector((state) => state.holidays.holidays);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}/api/v1/holiday`);
        dispatch(getHoliday(response.data.holidays));
      } catch (error) {
        console.log("Cannot fetch data", error.message);
      }
    };

    fetchData();
  }, [dispatch]);

  const [Category, setCategory] = useState("")

  return (
    <section>
      <div className="container-fluid p-0 about-banner">
        <div className="about-img ">
          <img src="./images/w4.jpg" alt="About Us Banner" />
        </div>
        <div className="about-text container-fluid mx-auto">
          <div className='row'>
            <div className='col-10 col-md-6 about-content'>
              <h2 style={{ fontWeight: "600" }}>Holiday Package</h2>
              <h5 className='mt-3'>Explore the World in One Line – All Your Holiday Needs at a Glance!</h5>

              <p className='bredcrumb mt-3'>
                <Link to="/" style={{ color: "#deded7", textDecoration: "none" }}>Home/ </Link>
                <Link to="/holidayPackage" style={{ color: "white", textDecoration: "none" }}>Holiday Package</Link>
              </p>
            </div>
            <div className='col-2 col-md-6'></div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="text-center mt-5 pb-5">
          <h5 className="section-title">OUR SERVICES</h5>
          <h1 className="section-header">We Provide Best Holiday Packages For You</h1>
        </div>

        <section className="tour-package-section">
          {holidays.map((tour) => (
            <div className="tour-package-card" key={tour._id}>
              <img
                src={`${server}/${tour.imageUrl}`}
                alt={tour.name}
                className="tour-image img-fluid"
              />
              <div className="tour-package-content">
                <h2 className="tour-name">Package: {tour.name}</h2>

                <h3 className=" mt-4">
                  <p className="head-category"> Category:</p>
                  <ul className="tour-services">
                    {tour.category.map((cat, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {cat.name}
                      </li>
                    ))}
                  </ul>
                </h3>

                <div className="mt-4 mb-4">

                  <p className="head-category">
                    Service Included:
                  </p>
                  <ul className="tour-services">
                    {tour.services.map((ser, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {ser.name}
                      </li>
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
                        href={`${server}/${tour.pdf}`}
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
};

export default Service;
