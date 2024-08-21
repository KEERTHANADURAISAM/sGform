import React from 'react'
import '../styles/LandingPage.css'
import { SiGoogleforms } from "react-icons/si";
import { IconContext } from 'react-icons/lib';
import { MdOutlineMenu } from "react-icons/md";


const LandingPage = () => {
  return (
    <div className='land-icons'>
       <div>
<IconContext.Provider value={{ size:'25px'}}>
<MdOutlineMenu className='menu-item'/>
</IconContext.Provider>
<div>
<IconContext.Provider value={{ color: '#7248B9', size: '30px' }}>
<SiGoogleforms />
</IconContext.Provider>
<div className='span-head-ladingPage'><span>Google</span> Forms</div>
</div>
    </div>
    </div>
  )
}

export default LandingPage
