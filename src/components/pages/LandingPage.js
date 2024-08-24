import React from 'react'
import '../styles/LandingPage.css'
import { SiGoogleforms } from "react-icons/si";
import { IconContext } from 'react-icons/lib';
import { MdOutlineMenu } from "react-icons/md";
import feedpack from '../imgs/gform-survey.png'
import customerservey from '../imgs/gform-survey1.png'
import servey from '../imgs/gform-survey2.png'
import analyst from '../imgs/gform-survey3.png'
import analystone from '../imgs/gform-survey4.png'
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className='land-icons'>
       <div className='land-sub-flex'>
<IconContext.Provider value={{ size:'25px'}}>
<MdOutlineMenu className='menu-item'/>
</IconContext.Provider>
<div className='landing-head-div'>
<IconContext.Provider value={{ color: '#7248B9', size: '30px' }}>
<SiGoogleforms />
</IconContext.Provider>
<span className="google-span">Google</span><span className='form-span'> Forms</span>
</div>
    </div>
    <div className='g-head-div'>
      <h1 className='g-head-h1'>Get insights quickly, with Google Forms</h1>
      <p className='g-para-p'>Easily create and share online forms and surveys, and analyze responses in real-time.</p>
    </div>
    <div className='g-btn-div'>
      <button className='g-btn1-try'>Try Forms for Work</button>
      <Link to='/createform' className='g-btn2-form'>Go To Forms</Link>
    </div>
    <div className='g-btn-div'>
      <p>Don't have an account? </p>
      <p className='g-p-sign'>Sign up for free </p>
    </div>
    <div className='land-img-div'>
      <img src={feedpack} alt='survey' className='survey-img'/>
    </div>
    <hr className='hr-width'></hr>
    <p className='do-g-form'>See what you can do with Google Forms</p>
    <div className='customerGrid'>
      <div>
      <img src={customerservey} alt='' className='customerImg'/>
      </div>
      <div>
        <h1 className='customer-h1'>Create an online form as easily as creating a document</h1>
       <p>Select from multiple question types, drag-and-drop to reorder questions, and customize values as easily as pasting a list.</p>
        </div>
    </div>
    <div className='customerGrid'>
<div>
  <h1 className='customer-h1'>
  Send polished surveys and forms</h1>
  <p className='srevey-p'>Customize colors, images, and fonts to adjust the look and feel or reflect your organization’s branding. And add custom logic that shows questions based on answers, for a more seamless experience.</p>
</div>
<div>
<img src={servey} alt='' className='customerImg'/>
</div>
    </div>
    <div className='customerGrid'>
    <div>
<img src={analyst} alt='' className='customerImg'/>
</div>
<div>
  <h1 className='customer-h1'>
  Analyze responses with automatic summaries</h1>
  <p className='srevey-p'>See charts with response data update in real-time. Or open the raw data with Google Sheets for deeper analysis or automation.</p>
</div>

    </div>
    <div className='customerGrid'>
    <div>
  <h1 className='customer-h1'>
  Create and respond to surveys from anywhere</h1>
  <p className='srevey-p'>Access, create, and edit forms on-the-go, from screens big and small. Others can respond to your survey from wherever they are—from any mobile device, tablet, or computer.</p>
</div>
    <div>
<img src={analystone} alt='' className='analystImg'/>
</div>
    </div>
    <hr className='hr-width'></hr>
    <h1 className='g-footer-h1'>Ready to get started?</h1>
    <div className='g-btn-div'>
   
      <button className='g-btn1-try'>Try Forms for Work</button>
      <Link to='/createform' className='g-btn2-form'>Go To Forms</Link>
    </div>
    
    <div className='footer-div'>
      <p className="google-span">Google</p>
      <p>About Google</p>
      <p>Google products</p>
        <p>Privacy</p>
<p>Terms</p>
    </div>

    </div>
  )
}

export default LandingPage
