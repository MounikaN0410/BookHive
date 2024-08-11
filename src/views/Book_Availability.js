import React from 'react'
import { useContext } from 'react';
import Calendar from '../components/Calendar'
import { IoMdArrowRoundBack } from "react-icons/io";
import MainContext from '../context/MainContext';
import ViewPortContext from '../context/UserContext';


const Book_Availability = ({setSelection}) => {
    const {location,setLocation}=useContext(MainContext)
    const {viewPortWidth,viewPortHeight,setViewPortWidth,setViewPortHeight}=useContext(ViewPortContext)
    const book = JSON.parse(localStorage.getItem('book'));
    const handleBack=()=>{
        setLocation('HOME')
        window.localStorage.removeItem("book")
        setSelection('')
    }
    {if (viewPortWidth<500)
        return (
           <>
                <div className='flex flex-col items-center gap-2 justify-center mb-10 border-b-2 border-gray-700'>
                    <span className='m-text-black'>{book.title}</span>
                    <span className='s-text-grey'>By {book.author}</span>
                     
                </div>
                <Calendar />
                <div className='flex flex-col items-center gap-2 justify-center mt-10'>
                    <div className='text-black font-bold py-2 px-8 border border-black rounded flex items-center ' onClick={handleBack}>
                        <IoMdArrowRoundBack/>
                        <span>Back</span>
                    </div>

                </div>
       </>
        )
    }
  return (
    <div className='book-now'>
        
        <div className='book-now-data'>
            <div className='text-black font-bold py-2 px-4 border border-black rounded flex items-center absolute left-1 top-16' onClick={handleBack}>
                <IoMdArrowRoundBack/>
                <span>Back</span>
            </div>

            <div className='book-now-image-container flex flex-col items-center justify-center mt-8 '>
                <span className='l-text-black'>{book.title}</span>
                <span className='m-text-grey'>By {book.author}</span>

                <img src={book.img} alt="" />
            </div>
            
        </div>
        <div className='book-now-calendar'>
            <div className='calendar'>
                <Calendar />
            </div>

        </div>
      
    </div>
  )
}

export default Book_Availability
