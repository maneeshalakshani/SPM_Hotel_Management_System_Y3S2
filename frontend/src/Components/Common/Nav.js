import '../../App.css';
import {Link} from 'react-router-dom';

import logo from '../../images/Common/logo.PNG';

function Nav() {

  const navStyle = {
    color: 'white',
  }

  return (
    <nav>
        <Link style={navStyle} to='/home'>
          <img src={logo} className='logo' />
        </Link>

        <ul className='nav-links'>
          <Link style={navStyle} to='/about'>
            <li>About</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;
