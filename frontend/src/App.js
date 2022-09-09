import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './Components/Common/Nav';
import Home from './Components/Common/Home';
import About from './Components/Common/About';
import Login from './Components/Common/login';
import Register from './Components/Common/Register';
import AdminMenu from './Components/Common/adminMenu';
import UserMenu from './Components/Common/userMenu';
import Footer from './Components/Common/Footer';

import SelectTaxiOption from './Components/Taxi/AdminSide/SelectTaxiOption';
import AddTaxi from './Components/Taxi/AdminSide/AddTaxi';
import ViewAllTaxis from './Components/Taxi/AdminSide/ViewAllTaxis';
import CustomerViewAll from './Components/Taxi/CustomerSide/CustomerViewAll';
import UpdateTaxi from './Components/Taxi/AdminSide/UpdateTaxi';
import CustomerTaxiOption from './Components/Taxi/CustomerSide/CustomerTaxiOption';

import ViewAllRooms from './Components/Room/AdminSide/ViewAllRooms';
import AddRoom from './Components/Room/AdminSide/AddRoom';
//import UpdateRoom from './Components/Room/AdminSide/UpdateRoom';

function App() {
  return(
    <Router>
    <div className='App'>
    <Nav />
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/adminMenu' exact element={<AdminMenu />} />
        <Route path='/userMenu' exact element={<UserMenu />} />

        {/* Taxi Routes */}
        <Route path='/admin-selectTaxiOption' exact element={<SelectTaxiOption />} />
        <Route path='/customer-selectTaxiOption' element={<CustomerTaxiOption />} />
        <Route path='/addTaxi' exact element={<AddTaxi />} />
        <Route path='/admin-viewAllTaxis' element={<ViewAllTaxis />} />
        <Route path='/updateTaxi/:id' element={<UpdateTaxi />} />
        <Route path='/customer-viewAllTaxis' element={<CustomerViewAll />} />

        {/* Rooms Routes */}
        <Route path='/addRoom' exact element={<AddRoom />} />
        <Route path='/admin-viewAllRooms' element={<ViewAllRooms />} />
        <Route path='/updateRoom' exact element={<UpdateRoom />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
