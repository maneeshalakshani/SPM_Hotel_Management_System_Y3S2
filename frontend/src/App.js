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

import Adminmenuhome from './Components/Menu/Adminmenuside/Adminmenuhome';
import Addmenu from './Components/Menu/Adminmenuside/Addmenu';
import Viewmenuadmin from './Components/Menu/Adminmenuside/Viewmenuadmin';
import Adminview from './Components/Menu/Adminmenuside/Adminview';
import ViewSingleMenu from './Components/Menu/Adminmenuside/ViewSingleMenu';
import UpdateMenu from './Components/Menu/Adminmenuside/Updatemenu';
import Menusetting from './Components/Menu/Adminmenuside/Menusetting';
import Mainmenusetting from './Components/Menu/Adminmenuside/Mainmenusetting';
import Deletemenu from './Components/Menu/Adminmenuside/Deletemenu';

import CustomerTaxiOption from './Components/Taxi/CustomerSide/CustomerTaxiOption';

import ViewAllRooms from './Components/Room/AdminSide/ViewAllRooms';
import AddRoom from './Components/Room/AdminSide/AddRoom';
import UpdateRoom from './Components/Room/AdminSide/UpdateRoom';
import CustomerViewVehicleDetails from './Components/Taxi/CustomerSide/CustomerViewVehicleDetails';
import CustomerBookYourVehicle from './Components/Taxi/CustomerSide/CustomerBookYourVehicle';
import CustomerBookedTaxis from './Components/Taxi/CustomerSide/CustomerBookedTaxis';
import BookedTaxiList from './Components/Taxi/AdminSide/BookedTaxiList';


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
        <Route path='/updateTaxi/:id' element={<UpdateTaxi />} />
        <Route path='/cusomer-View-Vehicle/:id' element={<CustomerViewVehicleDetails />} />
        <Route path='/cusomer-Book-Your-Vehicle/:id' element={<CustomerBookYourVehicle />} />
        <Route path='/customer-booked-taxis' element={<CustomerBookedTaxis />} />
        <Route path='/admin-booked-taxis' element={<BookedTaxiList />} />


        {/*Menu Routes */}
        <Route path='/menuhome' exact element={<Adminmenuhome/>}/>
        <Route path='/addmenu' exact element={<Addmenu/>}/>
        <Route path='/viewmenu' exact element={<Viewmenuadmin/>}/>
        <Route path='/adminviewmenu' exact element={<Adminview/>}/>
        <Route path="/viewmenu/:id" exact element={<ViewSingleMenu/>}/>
        <Route path="/updatemenu/:id" exact element={<UpdateMenu/>}/>
        <Route path='/menusetting' exact element={<Menusetting/>}/>
        <Route path='/mainmenusetting' exact element={<Mainmenusetting/>}/>
        <Route path='/deletemenu/:id' exact element={<Deletemenu/>}/>
     

        {/* Rooms Routes */}
        <Route path='/addRoom' exact element={<AddRoom />} />
        <Route path='/allRooms' element={<ViewAllRooms />} />
        <Route path='/updateRoom/:id' exact element={<UpdateRoom />} />


      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
