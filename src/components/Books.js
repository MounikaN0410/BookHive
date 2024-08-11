import React from 'react'
import { useContext,useState } from 'react'
import BookCard from './BookCard'
import MobileBookCard from './MobileBookCard'
import Book_Availability from '../views/Book_Availability.js'
import ViewPortContext from '../context/UserContext'

const Books = ({books,loading}) => {
    const {viewPortWidth,viewPortHeight,setViewPortWidth,setViewPortHeight}=useContext(ViewPortContext)
    const [bookSelected,setBookSelected]=useState('')
    if(loading){
        return <h2>Loading....</h2>
    }
    if (localStorage.getItem('book')){
        return <Book_Availability book={bookSelected} setSelection={setBookSelected}/>
    }

  return (
    
    <div>
        {viewPortWidth<500
            ?
                <div className='flex flex-col p-2'>
                    <div className='grid grid-rows-1 gap-5'>
                        {books.map((i)=>{
                            return <MobileBookCard book={i} setSelections={setBookSelected}/>
                        })}
                    </div>
                </div>
            :
                <div className='home-books p-2'>
                    {books.map((i)=>{
                        return <BookCard book={i} setSelections={setBookSelected}/>
                    })}
                </div>
                
        }
      
    </div>
  )
}

export default Books
