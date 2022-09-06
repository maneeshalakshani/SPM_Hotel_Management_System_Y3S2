import React from 'react'

import img1 from '../../images/Common/login_bg.jpg';
import img2 from '../../images/Common/logo.PNG';

function About() {
  return (
    <div className='container container-main'>
      <div className='row'>
        <h1 className='hearder-menu'>iHotels</h1>
      </div>
      <div className='row'> 
        <div className='col'>
          <p className='aboutPara'>
            A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside 
            a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality 
            beds, a dresser, a refrigerator and other kitchen facilities, upholstered chairs, a flat screen television, and 
            en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. 
            Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre 
            (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or 
            basketball courts, gymnasium, restaurants, day spa, and social function services. Hotel rooms are usually numbered 
            (or named in some smaller hotels and B&Bs) to allow guests to identify their room. Some boutique, high-end hotels 
            have custom decorated rooms. Some hotels offer meals as part of a room and board arrangement. In Japan, capsule 
            hotels provide a tiny room suitable only for sleeping and shared bathroom facilities.
          </p>
        </div>
        <div className='col'>
          <img src={img1} alt='img1' className='aboutImg aboutImg1' />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <img src={img2} alt='img2' className='aboutImg' />
        </div>
        <div className='col'>
          <p className='aboutPara aboutPara2'>
            The precursor to the modern hotel was the inn of medieval Europe. For a period of about 200 years from 
            the mid-17th century, coaching inns served as a place for lodging for coach travelers. Inns began to cater 
            to richer clients in the mid-18th century. One of the first hotels in a modern sense was opened in Exeter in 
            1768. Hotels proliferated throughout Western Europe and North America in the early 19th century, and luxury 
            hotels began to spring up in the later part of the 19th century.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;