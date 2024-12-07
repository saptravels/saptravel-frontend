import React, { Fragment, useEffect, useState, useCallback, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LoginPage from '../Pages/Login';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [homeNav, setHomeNav] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const scrollThreshold = 100;
    const currentScrollY = window.scrollY;
  
    // More precise state update
    setNavbar(currentScrollY > scrollThreshold);
  }, []);

  useEffect(() => {
    // Throttle scroll event to improve performance
    let timeoutId;
    const throttledHandleScroll = () => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
      timeoutId = requestAnimationFrame(handleScroll);
    };

    // Add event listener
    window.addEventListener('scroll', throttledHandleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    // Update home nav state based on location
    setHomeNav(location.pathname === '/');
  }, [location]);

  const handleOpenLogin = () => {
    setVisible(true);
  };

  const handleCloseLogin = () => {
    setVisible(false);
  };

  // Memoize logo source and classes to prevent unnecessary rerenders
  const logoSrc = useMemo(() => 
    homeNav || navbar ? "/images/logowhite1.png" : "/images/sap travels logo.png", 
    [homeNav, navbar]
  );

  const navbarClass = useMemo(() => 
    `navbar navbar-expand-lg desktop-nav ${navbar ? 'sticky-top' : ''}`, 
    [navbar]
  );

  const mobileNavbarClass = useMemo(() => 
    `navbar navbar-expand-lg mobile-nav ${navbar ? 'sticky-top' : ''}`, 
    [navbar]
  );

  const navLinkClass = useMemo(() => 
    homeNav ? "nav-link homeNav-color" : "nav-link", 
    [homeNav]
  );

  return (
    <Fragment>
       <nav className={navbar ? "navbar navbar-expand-lg desktop-nav scroll-nav" : "navbar navbar-expand-lg desktop-nav"}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-img">
            <img 
              className="img-fluid logo" 
              src={logoSrc} 
              alt="Logo" 
              style={{ 
                width: '250px', 
                transition: 'opacity 0.3s ease' // Smooth transition
              }} 
            />
          </div>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span 
              className={`navbar-toggler-icon hamburger ${homeNav ? 'homeNav-color' : ''}`} 
              style={{ color: "white" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/tourPackage', label: 'Tour Package' },
                { to: '/holidayPackage', label: 'Holiday Package' },
                { to: '/contactus', label: 'Contact Us' }
              ].map(({ to, label }) => (
                <li key={to} className="nav-item">
                  <NavLink 
                    exact={to === '/'} 
                    to={to} 
                    className={navLinkClass} 
                    activeClassName="active"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {visible && <LoginPage onClose={handleCloseLogin} />}

      {/* Mobile Navbar */}
      <nav className={mobileNavbarClass}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-img mobile-logo">
            <img 
              className="img-fluid logo" 
              src={navbar ? "/images/logowhite1.png" : "/images/sap travels logo.png"} 
              alt="Logo" 
              style={{ 
                width: '150px', 
                transition: 'opacity 0.3s ease' // Smooth transition
              }}             
            />
          </div>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/tourPackage', label: 'Tour Package' },
                { to: '/holidayPackage', label: 'Holiday Package' },
                { to: '/contactus', label: 'Contact Us' }
              ].map(({ to, label }) => (
                <li key={to} className="nav-item">
                  <NavLink 
                    exact={to === '/'} 
                    to={to} 
                    className="nav-link" 
                    activeClassName="active"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}