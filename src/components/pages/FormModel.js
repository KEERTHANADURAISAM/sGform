import React from 'react'
import "../styles/LandingPage.css";
import { BiCustomize, BiUndo } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { SiGoogleforms } from 'react-icons/si';
import { LiaRedoSolid, LiaUndoSolid } from 'react-icons/lia';
import { CiMenuKebab } from 'react-icons/ci';
const FormModel = () => {
  return (
    <div>
    <div create-form-header-div>
        <div>
        <IconContext.Provider value={{ color: '#7248B9', size: '40px' }}>
<SiGoogleforms/>
</IconContext.Provider>
<p>Untilted Form</p>  
</div>
<div>
<BiCustomize />
<FaRegEye />
<LiaUndoSolid />
<LiaRedoSolid />
<button>Send</button>
<CiMenuKebab />
{/* <LuRedo2 /> */}
</div>
      
    </div>
    </div>
  )
}

export default FormModel
