import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Store } from './Store';
import { Provider } from 'react-redux';
import Admin from './Pages/Admin';
import { CreateTable } from './Components/CreateTable';
import Cars from './Pages/Cars';
import { UpdateTable } from './Components/updateTable';
import ConfirmBooking from './Pages/Confirm Booking';
import About from './Pages/About';
import TermsConditions from './Pages/Terms & Conditions';
import Service from './Pages/Service';
import ScrollToTop from './Components/scrollToTop';
import Contact from './Pages/Contact';
import Login1 from './Pages/Login1';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import TourPackages from './Pages/Tourpackages';
import Holiday from './Components/Holiday';
import CreateHoliday from './Components/createHoliday';
import UpdateHoliday from './Components/updateHoliday';
import Tour from './Components/tour';
import CreateTour from './Components/createTour';
import UpdateTour from './Components/updateTour';
import Table from './Components/Table'
import PackageBooknow from './Components/PackageBooknow';
import CustomTourPackageForm from './Pages/customizedForm';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" 
             element = {isAuthenticated ? <Admin/> : <Navigate to="/login" />} />
             <Route path='/login' element ={<Login1 setIsAuthenticated={setIsAuthenticated}/>}/>
             <Route 
          path='/table' 
          element={isAuthenticated ? <Table /> : <Navigate to="/login" />} 
        />
            <Route path="/admin/create" element={<CreateTable />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/edit/:id" element={<UpdateTable />} />
            <Route path="/confirmbooking" element={<ConfirmBooking />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/terms&conditions" element={<TermsConditions />} />
            <Route path="/holidayPackage" element={<Service />} />
            <Route path='/tourPackage' element={<TourPackages/>}/>
            <Route path='/holiday' element={<Holiday/>}/>
            <Route path='/holiday/create' element={<CreateHoliday/>}/>
            <Route path='/holidayEdit/:id' element={<UpdateHoliday/>}/>
            <Route path='/tour' element={<Tour/>}/>
            <Route path='/tour/create' element={<CreateTour/>}/>
            <Route path='tourEdit/:id' element={<UpdateTour/>}/>
            <Route path='/PackageBooknow/:id' element={<PackageBooknow/>}/>
            <Route path='/CustomTourPackageForm' element={<CustomTourPackageForm/>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer/>

    </Provider>
  );
}

export default App;
