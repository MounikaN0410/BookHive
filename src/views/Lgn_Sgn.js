import React, { useContext } from 'react'
import { useState ,useEffect} from 'react'
import Login from './Login'
import SignUp from './SignUp'
import ViewPortContext from '../context/UserContext';
import MainContext from '../context/MainContext'


const Lgn_Sgn = () => {
    const {viewPortWidth,viewPortHeight,setViewPortWidth,setViewPortHeight}=useContext(ViewPortContext)
    
    const [method,setMethod]=useState("login")
  return (
    
    <div className='lgn-sgn '>
      
        {viewPortWidth<600?
          <div className='lgn-sgn-main-box  items-center' >
              <div className='flex justify-center items-center pt-6'>
                  {method=="login" ?<Login setSwitch={setMethod}/>:<SignUp setSwitch = {setMethod}/>}
              </div>
          </div>
          :
          <div className='lgn-sgn-main-box justify-evenly  bg-[#e4c5ff] sm:h-screen' >
              <div className='flex w-1/2 items-center bg-[#e4c5ff]'>
                  <img src={'/assets/LMS_Mainimg.webp'} alt="My Image"/>      
              </div>
              <div className='flex w-1/2 justify-center items-center sm:items-start sm:p-0 sm:mt-0'>
                  {method=="login" ?<Login setSwitch={setMethod}/>:<SignUp setSwitch = {setMethod}/>}
              </div>

        </div>
        }
    </div>
  )
}

export default Lgn_Sgn
