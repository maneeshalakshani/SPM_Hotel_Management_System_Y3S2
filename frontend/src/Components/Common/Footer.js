import React from 'react'
import '../../App.css';

import email from '../../images/Common/icons/email.gif';
import phone from '../../images/Common/icons/phone.gif';
import fb from '../../images/Common/icons/FB.png';
import li from '../../images/Common/icons/LI.png';
import ig from '../../images/Common/icons/IG.png';
import t from '../../images/Common/icons/T.png';

function Footer() {
  return (
    <footer>
        <div className='row'>
            <div className='col'>
                <div className='row'>
                    <h1 className='col'>CONTACT</h1>
                    <div className='col'>
                        <div className='row'>
                            <div className='col'>
                                <img src={email} alt='email' className='footerIcon' />
                            </div>
                            <h4 className='col'>asrg@gmail.com</h4>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <img src={phone} alt='email' className='footerIcon footerImageCol1-2' />
                            </div>
                            <h4 className='col footerTextCol1-2'>1234567890</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <h1 className='col'>FOLLOW US</h1>
                    <div className='col'>
                        <img src={fb} alt='facebook' />
                        <img src={ig} alt='facebook' />
                        <img src={t} alt='facebook' />
                        <img src={li} alt='facebook' />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer