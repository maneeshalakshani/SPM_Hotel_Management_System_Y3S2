import './App.css';

import Nav from './Components/Common/Nav';
import Home from './Components/Common/Home';
import About from './Components/Common/About';
import Login from './Components/Common/login';
import Register from './Components/Common/Register';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
      </Routes>
    </div>
  </Router>
  );
}

export default App;
