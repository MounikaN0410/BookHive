import { useEffect, useState ,useContext} from "react"
import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import ViewPortContext from "../../context/UserContext";

const Pagination = ({Total,booksPerPage,handlePagination,currentPage}) => {
    const [slide,setSlide]=useState(1)
    const {viewPortWidth,viewPortHeight,setViewPortWidth,setViewPortHeight}=useContext(ViewPortContext)
    const pageNum=[];
    for (let i=1;i<=Math.ceil(Total/booksPerPage);i++){
      pageNum.push(i)
    }
    let currPages = [];
    let endPoint = slide*10;
    let startPoint = 1;
    let prevLimit=11
    if (viewPortWidth<500){
      endPoint=slide*4;
      startPoint=endPoint-3;
      currPages=pageNum.slice(startPoint-1,endPoint)
      prevLimit=5

    }else{
      endPoint=slide*10;
      startPoint=endPoint-9;
      currPages=pageNum.slice(startPoint-1,endPoint)

    }
    useEffect(()=>{
      console.log("In use Effect")
      handlePagination(startPoint)

    },[slide])
   

    const handleNext = () =>{
      setSlide(slide+1)
      
    }
    function handlePrevious(){
      setSlide(slide-1)
    
      
    }
    
  return (
   
      <div className='pagination relative w-screen p-2 '>
        <div className='flex justify-around'>
          {currentPage <prevLimit ?<div className='flex items-center gap-2'>
            <GrLinkPrevious/>
            <span className='text-xl s-text-lighter-black-normal cursor-pointer'>Prev</span>
          </div>:
          <div className='flex items-center gap-2 cursor-pointer' onClick={handlePrevious}>
            <GrLinkPrevious/>
            <span className='text-xl s-text-lighter-black-normal cursor-pointer'>Prev</span>
          </div>}

          <div className='flex justify-center align-center  '>
            {currPages.map((page)=>(
                <button key={page} onClick={()=>handlePagination(page)} className={currentPage==page?'active':''}>{page}</button>
            ))}
          </div>
          <div className='flex items-center gap-2 cursor-pointer' onClick={handleNext}>
            <span className='text-xl s-text-lighter-black-normal'>Next</span>
            <GrLinkNext/>
          </div> 
        </div>
    </div>
      
 
    
  )
}

export default Pagination





