import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './Components/Common/Nav';
import Home from './Components/Common/Home';
import About from './Components/Common/About';
import Login from './Components/Common/login';
import Register from './Components/Common/Register';
import AdminMenu from './Components/Common/adminMenu';
import UserMenu from './Components/Common/userMenu';

import AddTaxi from './Components/Taxi/AdminSide/AddTaxi';
import ViewAllTaxis from './Components/Taxi/CustomerSide/ViewAllTaxis';

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

        <Route path='/addTaxi' exact element={<AddTaxi />} />
        <Route path='/viewAllTaxis' element={<ViewAllTaxis />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
