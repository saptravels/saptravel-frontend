import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Fragment>
      <div className="container-fluid p-0 about-banner">
        <div className="about-img ">
          <img src="./images/w4.jpg" alt="About Us Banner" />
        </div>
        <div className="about-text container-fluid mx-auto">
          <div className='row'>
            <div className='col-10 col-md-6 about-content'>
              <h2 style={{ fontWeight: "600" }}>About Us</h2>
              <h5 className='mt-3'>Be comfortable while you travel with our reliable bus rental.</h5>

              <p className='bredcrumb mt-3'>
                <Link to="/" style={{ color: "#deded7", textDecoration: "none" }}>Home/ </Link>
                <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
              </p>
            </div>
            <div className='col-2 col-md-6'></div>
          </div>
        </div>
      </div>

      <section className='ab-pg mt-0'>
        <div className="container-fluid  whoweare" style={{ backgroundColor: "transparent" }}>
          <div className="row">
            <div className='col-12 col-md-10 mx-auto pt-5 pb-5'>
              <div className='container'>
                <div className='row mt-5'>
                  <div className="col-lg-4">
                    <h6>ABOUT SAPTRAVELS</h6>
                    <h2 style={{ color: "#005395" }}>Our Journey</h2>
                  </div>
                  <div className="col-lg-8 mt-3 mt-lg-0">
                    <p>
                      In 2000, Saptravels was started by Mr. Subramaniam, who possessed decades of experience working in well-known travel companies. It was when he operated the cab on his own that he attracted a large number of customers due to his dedicated and professional service.
                    </p>
                    <p>
                      With his ambitious drive in both the business world and his personal life, Mr. Krishna Kumar, his second son, was greatly admired. After pursuing master’s degrees, he took over the business in early 2012, elevating it to the next level and gaining a huge boost with many satisfied customers and corporates.
                    </p>
                    <p>
                      Saptravels aims to provide a complete tourism experience for every customer, where tourism means understanding the history, culture, food, and practices associated with the locations visited. Our goal is to help customers feel as if they are living as locals in the places they explore.
                    </p>
                    <p>
                      Whether you are seeking a tourism-format holiday, a memorable trip, or a safe and secure travel partner, stay connected and tuned in with us for the ultimate travel experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container mb-3 about-ser">
          <div className="row about-service">
            <div className="col-lg-6">
              <img src="./images/carbanner1.png" alt="Bus Maintenance" className='img-fluid' />
            </div>
            <div className="col-lg-6">
              <h2>We make sure every bus is in excellent shape</h2>
              <p>We ensure that every bus is in top condition with thorough checks and maintenance, so you can enjoy a smooth and comfortable ride.</p>
              <div>
                <ul className="about-point p-4">
                  <li><i className="fa-solid fa-check"></i>&nbsp; Confirming a proper amount of engine oil and coolant</li>
                  <li><i className="fa-solid fa-check"></i>&nbsp; Ensuring that tire pressure is at an appropriate level</li>
                  <li><i className="fa-solid fa-check"></i>&nbsp; Measuring tire tread depth for optimum traction</li>
                  <li><i className="fa-solid fa-check"></i>&nbsp; Keeping electrical equipment clean and free of dust</li>
                </ul>
              </div>
              <button>Discover More</button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='container-fluid'>
        <div className='row' style={{ marginTop: "200px" }}>
          <div className='col-12 p-0'>
              <div className=" container-fluid">
                <div className='row'>
                  <div className="col-lg-8 col-md-12">
                    <div className='about-banner-content p-5'>
                      <h1>Why Choose Us</h1>
                      <p>Choose us for cab rental for our well-maintained vehicles, professional drivers, transparent pricing, and exceptional customer service, ensuring a smooth and reliable experience every time.</p>
                      <div className="row mt-4 about-banner-para">
                        <div className="col-lg-6 col-sm-12 mt-4">
                          <h3 className='text-center'>
                            <i className="fa-solid fa-check"></i> &nbsp;
                            Safety & Security
                          </h3>
                          <p>We prioritize your safety with stringent vehicle checks and 24/7 support, ensuring a secure journey.</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-4">
                          <h3 className='text-center'>
                            <i className="fa-solid fa-check"></i> &nbsp;
                            On Time & Punctual
                          </h3>
                          <p>We pride ourselves on being on time and punctual, ensuring you reach your destination promptly and reliably every time.</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-4">
                          <h3 className='text-center'>
                            <i className="fa-solid fa-check"></i> &nbsp;
                            Professional Drivers
                          </h3>
                          <p>Our professional drivers are experienced, courteous, and dedicated to providing a safe and comfortable journey for you.</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-4">
                          <h3 className='text-center'>
                            <i className="fa-solid fa-check"></i> &nbsp;
                            Well Maintenance
                          </h3>
                          <p>We meticulously maintain our vehicles to ensure a safe, smooth, and reliable ride every time.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-none d-md-block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='why-choose-us container-fluid'>
        <div className='row' >
          <div className='col-12 text-center'>
            <h1 className='why-choose-us-heading'>Why Choose Us</h1>
            <p className='why-choose-us-description'>
              Choose us for cab rental for our well-maintained vehicles, professional drivers, transparent pricing, and exceptional customer service, ensuring a smooth and reliable experience every time.
            </p>
          </div>
          <div className='col-12'>
            <div className='row justify-content-center mt-4' style={{padding:"0 50px 20px 50px"}}>
              {[
                { title: "Safety & Security", description: "We prioritize your safety with stringent vehicle checks and 24/7 support, ensuring a secure journey." },
                { title: "On Time & Punctual", description: "We pride ourselves on being on time and punctual, ensuring you reach your destination promptly and reliably every time." },
                { title: "Professional Drivers", description: "Our professional drivers are experienced, courteous, and dedicated to providing a safe and comfortable journey for you." },
                { title: "Well Maintenance", description: "We meticulously maintain our vehicles to ensure a safe, smooth, and reliable ride every time." },
              ].map((feature, index) => (
                <div key={index} className='col-lg-3 col-md-4 col-sm-6 my-3'>
                  <div className='feature-card d-flex flex-column justify-content-between p-4 text-center'>
                    <i className='fa-solid fa-check fa-2x mb-3'></i>
                    <h3 className='feature-title'>{feature.title}</h3>
                    <p className='feature-description'>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      <section className='pb-5'>
        <div className="container">
          <div className="pt-5 home-service">
            <h5 className='text-center' style={{ fontWeight: "700", "font-size": "18px" }}>OUR SERVICES </h5>
            <h3 className='text-center  mt-4' style={{ fontWeight: "700", "color": "#005395" }}> We Provide Best Services For You</h3>
            <p className='text-center mt-4' style={{ fontWeight: "400", "font-size": "16px" }}>
              Our cab rental service is dedicated to providing you with the best services tailored to your needs. Whether you need a quick ride across town, a comfortable long-distance journey, or transportation for a special event, we have you covered. With our well-maintained fleet and professional drivers, we ensure a smooth, safe, and reliable experience. Choose us for punctual, dependable service designed to meet your every transportation need.
            </p>
          </div>
          <div className='row '>
            <div className='col-12 col-md-4 service-item mt-5'>
              <div className='service-item-inner text-center  '>
                <div className='item'>
                  <div className='drop-icon'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="90"
                      height="90"
                      viewBox="0 0 64 64"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          fill="#005395"
                          d="M54 33v-7a4 4 0 0 0-4-4H36a4 4 0 0 0-4 4v7a4 4 0 0 0-4 4v8h30v-8a4 4 0 0 0-4-4z"
                          opacity="1"
                          data-original="#fab400"
                        />
                        <circle cx="54" cy="39" r="2" fill="#cfcdc8" opacity="1" data-original="#dc9600" />
                        <circle cx="32" cy="39" r="2" fill="#cfcdc8" opacity="1" data-original="#dc9600" />
                        <circle cx="54" cy="38" r="2" fill="#e8edef" opacity="1" data-original="#f0f0f0" />
                        <circle cx="32" cy="38" r="2" fill="#e8edef" opacity="1" data-original="#f0f0f0" />
                        <circle cx="32" cy="38" r="1" fill="#ffffff" opacity="1" data-original="#00a0c8" />
                        <circle cx="54" cy="38" r="1" fill="#ffffff" opacity="1" data-original="#00a0c8" />
                        <path
                          fill="#0a5078"
                          d="M39 40a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zM43 40a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zM47 40a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1z"
                          opacity="1"
                          data-original="#0a5078"
                        />
                        <path fill="#e8edef" d="M58 47H28a2 2 0 1 1 0-4h30a2 2 0 1 1 0 4z" opacity="1" data-original="#f0f0f0" />
                        <path
                          fill="#ffffff"
                          d="M34 32v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H35a1 1 0 0 1-1-1z"
                          opacity="1"
                          data-original="#00a0c8"
                        />
                        <path fill="#0082aa" d="M52 26v1c0-1.1-.9-2-2-2H36c-1.1 0-2 .9-2 2v-1c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2z" opacity="1" data-original="#0082aa" />
                        <path
                          fill="#0a5078"
                          d="M34 47v4c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-4zM56 47v4c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-4zM30 33h2v-4h-2a2 2 0 1 0 0 4zM56 29h-2v4h2a2 2 0 1 0 0-4z"
                          opacity="1"
                          data-original="#0a5078"
                        />
                        <path fill="#00325a" d="M30 47h4v1h-4zM52 47h4v1h-4z" opacity="1" data-original="#00325a" />
                        <path fill="#e8edef" d="M48 22H38l.811-3.243a1 1 0 0 1 .97-.757h6.438a1 1 0 0 1 .97.757z" opacity="1" data-original="#f0f0f0" />
                        <path fill="#0a5078" d="M45.5 19.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" opacity="1" data-original="#0a5078" />
                        <path fill="#005395" d="M44 13v2a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0z" opacity="1" data-original="#c80a50" />
                        <path fill="#0a5078" d="m49.122 15.293-1.415 1.414a.999.999 0 1 1-1.414-1.414l1.415-1.414a.999.999 0 1 1 1.414 1.414z" opacity="1" data-original="#0a5078" />
                        <path fill="#005395" d="M39.707 16.707a.999.999 0 0 1-1.414 0l-1.414-1.414a.999.999 0 1 1 1.414-1.414l1.414 1.414a.999.999 0 0 1 0 1.414z" opacity="1" data-original="#fab400" />
                        <path fill="#e4c69f" d="M18 42h2v8h-2z" opacity="1" data-original="#e4c69f" />
                        <path fill="#ffffff" d="M21 52h-2a1 1 0 0 1-1-1v-1h3a1 1 0 0 1 0 2z" opacity="1" data-original="#a00028" />
                        <path fill="#e4c69f" d="M20 20.5a4 4 0 0 1-4-4V16a3 3 0 1 1 6 0v2.5a2 2 0 0 1-2 2z" opacity="1" data-original="#e4c69f" />
                        <path fill="#ffffff" d="M21 33h-7V23a3 3 0 0 1 3-3 4 4 0 0 1 4 4z" opacity="1" data-original="#00a0c8" />
                        <path fill="#0a5078" d="M21 33v8a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-8z" opacity="1" data-original="#0a5078" />
                        <path fill="#00325a" d="M21 35v6a1 1 0 0 1-1 1h-2v-6a1 1 0 0 1 1-1z" opacity="1" data-original="#00325a" />
                        <path fill="#e4c69f" d="M15 42h2v8h-2z" opacity="1" data-original="#e4c69f" />
                        <path fill="#005395" d="M18 52h-2a1 1 0 0 1-1-1v-1h3a1 1 0 0 1 0 2z" opacity="1" data-original="#c80a50" />
                        <path fill="#0a5078" d="M15 48h2v2h-2zM18 48h2v2h-2z" opacity="1" data-original="#0a5078" />
                        <path fill="#e4c69f" d="M17 24v9c0 .55-.45 1-1 1s-1-.45-1-1v-9z" opacity="1" data-original="#e4c69f" />
                        <path fill="#d2aa82" d="M15 42h2v1h-2zM18 42h2v1h-2z" opacity="1" data-original="#d2aa82" />
                        <path fill="#0a5078" d="M23.5 15H22a3 3 0 1 0-6 0v1h7.5a.5.5 0 0 0 0-1z" opacity="1" data-original="#0a5078" />
                        <path fill="#005395" d="M14 50H5a1 1 0 0 1-1-1V35a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" opacity="1" data-original="#c80a50" />
                        <circle cx="6" cy="51" r="1" fill="#0a5078" opacity="1" data-original="#0a5078" />
                        <circle cx="13" cy="51" r="1" fill="#0a5078" opacity="1" data-original="#0a5078" />
                        <path
                          fill="#ffffff"
                          d="M6.5 48a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5zM9.5 48a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5zM12.5 48a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5z"
                          opacity="1"
                          data-original="#a00028"
                        />
                        <path fill="#e8edef" d="M7.5 31.5h1V34h-1zM10.5 31.5h1V34h-1z" opacity="1" data-original="#f0f0f0" />
                        <path fill="#0a5078" d="M12 30.5H7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" opacity="1" data-original="#0a5078" />
                        <path fill="#d2d2d2" d="M7.5 31.5h1v1h-1zM10.5 31.5h1v1h-1z" opacity="1" data-original="#d2d2d2" />
                      </g>
                    </svg>

                  </div>

                  <h3>Drop Services</h3>
                  <p>Our drop services ensure convenient, reliable, and timely transport to your desired locations with ease.</p>
                  {/* <a href="#DropServices">Learn More</a> */}
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 service-item mt-5'>
              <div className='service-item-inner text-center'>
                <div className='item'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="80"
                    height="80"
                    x="0"
                    y="0"
                    viewBox="0 0 128 128"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#ffffff"
                        d="M46.069 26.766h25.345v8.706H46.069z"
                        opacity="1"
                        data-original="#a7d0fe"
                      />
                      <path
                        fill="#005395"
                        d="M16.896 21h29.173v14.472H16.896z"
                        opacity="1"
                        data-original="#1a6cf3"
                      />
                      <g fill="#8b9ca6">
                        <path
                          d="M21.633 45.43a2 2 0 0 1-2-2v-7.957a2 2 0 0 1 4 0v7.957a2 2 0 0 1-2 2zM67.1 45.43a2 2 0 0 1-2-2v-7.957a2 2 0 0 1 4 0v7.957a2 2 0 0 1-2 2z"
                          fill="#dcdbdb"
                          opacity="1"
                          data-original="#8b9ca6"
                        />
                        <path
                          d="M75.316 37.473H13.417a2 2 0 0 1 0-4h61.899a2 2 0 0 1 0 4z"
                          fill="#dcdbdb"
                          opacity="1"
                          data-original="#8b9ca6"
                        />
                      </g>
                      <path
                        fill="#005395"
                        d="m112.094 91.382-95.853-.087L2 85.847v-9.446l2.395-3.036V63.034c0-2.806.979-5.525 2.77-7.689l8.652-10.455a4.034 4.034 0 0 1 3.107-1.461h44.527a38.21 38.21 0 0 1 19.986 5.618c7.747 4.754 15.113 10.196 15.113 10.196l15.564 3.852s11.995 3.352 11.885 15.497l-.005.337c-.133 6.948-5.876 12.478-12.837 12.46z"
                        opacity="1"
                        data-original="#1a6cf3"
                      />
                      <ellipse
                        cx="28.837"
                        cy="91.408"
                        fill="#ffffff"
                        rx="15.618"
                        ry="15.592"
                        opacity="1"
                        data-original="#a7d0fe"
                      />
                      <ellipse
                        cx="28.837"
                        cy="91.408"
                        fill="#005395"
                        rx="7.053"
                        ry="7.042"
                        opacity="1"
                        data-original="#1a6cf3"
                      />
                      <ellipse
                        cx="97.096"
                        cy="91.408"
                        fill="#ffffff"
                        rx="15.618"
                        ry="15.592"
                        opacity="1"
                        data-original="#a7d0fe"
                      />
                      <ellipse
                        cx="97.096"
                        cy="91.408"
                        fill="#005395"
                        rx="7.053"
                        ry="7.042"
                        opacity="1"
                        data-original="#1a6cf3"
                      />
                      <path
                        fill="#ffffff"
                        d="M124.542 82.515h-5.248c-1.141 0-2.067.917-2.067 2.048s.925 2.048 2.067 2.048h3.889a12.616 12.616 0 0 0 2.168-3.932 2.059 2.059 0 0 0-.809-.164z"
                        opacity="1"
                        data-original="#a7d0fe"
                      />
                      <g fill="#a7d0fe">
                        <path
                          d="M65.079 50.449h-7.956v12.854h31.524c-5.512-6.511-16.977-12.854-23.568-12.854zM36.099 50.449h11.934v12.854H36.099zM27.128 50.449h.086v12.854H15.28v-.085c0-6.506 5.304-12.769 11.848-12.769zM76.281 86.366H51.133a2 2 0 0 1-2-2V82.97a2 2 0 0 1 3.907-.604h21.334a2 2 0 0 1 3.907.604v1.396a2 2 0 0 1-2 2z"
                          fill="#ffffff"
                          opacity="1"
                          data-original="#a7d0fe"
                        />
                      </g>
                      <path
                        fill="#005395"
                        d="M116.193 69.794c0 5.535 4.323 8.508 9.806 8.773.028-3.686-1.061-6.557-2.589-8.773z"
                        opacity="1"
                        data-original="#ffca00"
                      />
                    </g>
                  </svg>

                  <h3>Hour Basis</h3>
                  <p>We offer flexible hour-based rentals to suit your schedule and travel needs, providing convenience and ease.</p>
                  {/* <a href="#DropServices">Learn More</a> */}
                </div>

              </div>
            </div>
            <div className='col-12 col-md-4 service-item mt-5'>
              <div className='service-item-inner text-center'>
                <div className='item'>
                  <svg
                    className='mt-3'
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="60"
                    height="60"
                    x="0"
                    y="0"
                    viewBox="0 0 64 64"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M8.65 62h46.7c1.92 0 3.48-1.56 3.48-3.48V43.99c0-1.92-1.56-3.48-3.48-3.48h-4.29v-4.14c2.23-.68 3.86-2.89 3.86-5.5v-5.64c0-.1 0-.2-.01-.29-.02-.19-.05-.37-.09-.55l-.09-.29c-.02-.05-.04-.1-.06-.14-.16-.44-.41-.83-.74-1.13l-2.5-2.44c.52-.11 1-.38 1.39-.79.52-.56.81-1.3.81-2.07 0-1.63-1.28-2.96-2.86-2.96h-.91c-.31 0-.63.03-.93.11l-1-4.16c-.45-1.88-2.03-3.19-3.85-3.19h-4.6V4.45c0-1.35-1.1-2.45-2.45-2.45H26.75C25.4 2 24.3 3.1 24.3 4.45v2.88h-4.38c-1.82 0-3.4 1.31-3.85 3.19l-1 4.16c-.3-.08-.62-.11-.93-.11h-.91c-1.58 0-2.86 1.33-2.86 2.96 0 .77.29 1.51.82 2.09.38.39.86.66 1.37.78l-2.48 2.42c-.34.32-.6.72-.75 1.14-.02.04-.04.09-.06.14-.13.36-.19.73-.19 1.13v5.64c0 2.61 1.63 4.82 3.86 5.5v4.14H8.65c-1.92 0-3.48 1.56-3.48 3.48v14.53c0 1.92 1.56 3.48 3.48 3.48zm13.39-25.4h19.92v3.91H22.04zm27.82-20.03h.91c.47 0 .86.43.86.96 0 .26-.09.52-.25.69-.17.17-.39.26-.61.26h-.92l-.45-1.86c.15-.03.3-.05.46-.05zM26.3 4.45c0-.25.2-.45.45-.45h10.28c.25 0 .45.2.45.45v2.88H26.3zM12.37 17.53c0-.53.39-.96.86-.96h.91c.16 0 .31.02.46.05l-.45 1.86h-.92c-.22 0-.44-.09-.59-.25a.99.99 0 0 1-.27-.7zm-1.29 13.34v-.81h6.95c1.05 0 1.91-.87 1.91-1.95 0-2.57-2.02-4.67-4.49-4.67h-3.14l2.98-2.92h.01c1.99.18 10.05.87 16.7.87s14.71-.69 16.7-.87h.01l2.98 2.92h-3.14c-2.47 0-4.49 2.1-4.49 4.67 0 1.08.86 1.95 1.91 1.95h6.95v.81c0 2.06-1.5 3.73-3.34 3.73H14.42c-1.84 0-3.34-1.67-3.34-3.73zM7.17 43.99c0-.81.67-1.48 1.48-1.48h46.7c.81 0 1.48.67 1.48 1.48v14.53c0 .82-.67 1.48-1.48 1.48H8.65c-.81 0-1.48-.66-1.48-1.48z"
                        fill="#005395"
                        opacity="1"
                        data-original="#000000"
                      />
                      <path
                        d="M14.689 50.447a1 1 0 0 0 1-1c0-.857.697-1.555 1.581-1.555.623.01.902.473.994.671.167.364.212.915-.167 1.372l-4.179 5.049a1 1 0 0 0 .77 1.637h5.11a1 1 0 1 0 0-2h-2.984l2.823-3.411c.812-.98.98-2.315.442-3.484-.512-1.112-1.576-1.815-2.837-1.835a3.56 3.56 0 0 0-3.555 3.555 1 1 0 0 0 1 1z"
                        fill="#005395"
                        opacity="1"
                        data-original="#000000"
                      />
                      <path
                        d="M21.57 54.31h3.83v1.31c0 .55.45 1 1 1s1-.45 1-1v-1.31h.21c.56 0 1-.44 1-1 0-.55-.44-1-1-1h-.21v-5.42c0-.43-.28-.81-.68-.95-.41-.13-.86.01-1.12.35l-4.83 6.42c-.22.31-.26.71-.09 1.05s.52.55.89.55zm3.83-4.42v2.42h-1.82zM33.825 56.622a1 1 0 0 0 1-1v-2.961h2.38v2.961a1 1 0 1 0 2 0V47.7a1 1 0 1 0-2 0v2.961h-2.38V47.7a1 1 0 1 0-2 0v7.922a1 1 0 0 0 1 1zM41.056 56.622a1 1 0 0 0 1-1v-4.315l1.154-.027v.125a1 1 0 1 0 2 0v-.125c0-1.075-.894-1.95-1.991-1.95h-1.234a.994.994 0 0 0-1.929.35v5.942a1 1 0 0 0 1 1zM47.961 53.861h1.3c.088 0 .221.151.221.38s-.133.38-.221.38h-1.298c-.065 0-.146-.083-.188-.192a1 1 0 0 0-1.874.698c.339.907 1.147 1.494 2.062 1.494h1.298c1.225 0 2.221-1.068 2.221-2.38s-.995-2.379-2.219-2.38h-1.3c-.088 0-.22-.152-.22-.38s.132-.38.22-.38h1.298c.054 0 .119.056.163.138a1 1 0 0 0 1.766-.939c-.393-.74-1.132-1.2-1.929-1.2h-1.298c-1.224 0-2.22 1.068-2.22 2.38s.995 2.379 2.218 2.38zM22.961 30.213c.558 1.192 1.553 1.904 2.664 1.904h6.361s.009.003.014.003h6.38c1.11 0 2.1-.71 2.66-1.91l.8-1.71c.34-.74.29-1.64-.13-2.31-.34-.53-.87-.84-1.45-.84H32l-.008.002h-8.255c-.579 0-1.104.305-1.442.835-.426.668-.479 1.575-.136 2.308zm.987-2.862H32l.008-.002h8.042c.02.08.03.2-.02.3l-.8 1.72c-.22.46-.55.75-.85.75h-6.366s-.009-.003-.014-.003h-6.375c-.31 0-.636-.288-.852-.75l-.802-1.719a.463.463 0 0 1-.023-.297z"
                        fill="#005395"
                        opacity="1"
                        data-original="#000000"
                      />
                    </g>
                  </svg>
                  <h3>OutStation</h3>
                  <p>We provide reliable and comfortable outstation travel, ensuring a smooth journey to your destination.</p>
                  {/* <a href="#DropServices">Learn More</a> */}
                </div>

              </div>
            </div>
          </div>
          {/* <div className="row p-5 home-banner1-icons">
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <div className="card">
                <div className='flat-icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                    <g>
                      <g data-name="Layer 2">
                        <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#005395" opacity="0" data-original="#000000" />
                        <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#005395" opacity="1" />
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="card-body">
                  <h5 className="card-title text-center">Drop Trip</h5>
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <div className="card">
                <div className='flat-icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                    <g>
                      <g data-name="Layer 2">
                        <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#005395" opacity="0" data-original="#000000" />
                        <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#005395" opacity="1" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Local Trip</h5>
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <div className="card">
                <div className='flat-icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                    <g>
                      <g data-name="Layer 2">
                        <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#005395" opacity="0" data-original="#000000" />
                        <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#005395" opacity="1" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">OutStation</h5>
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
           
          </div> */}
        </div>
      </section>

    </Fragment>
  );
}
