import React from 'react'
import AddButton from './AddButton'
import { useContext } from 'react'
import MainContext from '../context/MainContext.js'

const MobileBookCard = (props) => {
  const {location,setLocation}=useContext(MainContext)
  function handle_AddBook(){
    props.setSelections(props.book)
    window.localStorage.setItem('book',JSON.stringify(props.book))
    setLocation('RESERVE')
  }
  return (
        <div className='flex flex-row w-screen h-40 shadow-lg rounded-md border-b-4 border-gray-400'>
            <div className='flex justify-center align-middle w-2/5 pt-3' >
                <img className="h-[80%] w-[55%] object-fill" src={props.book.img} alt="Image Not Available" />
            </div>
            <div className='w-3/5 flex flex-col' >
              <span className="s-text-black-semibold truncate w-[250px]">{props.book.title}</span>
              <span className="xs-text-lighter-black-normal italic font-thin">By {props.book.author}</span>
              <div className='flex justify-end mt-9 p-4'>
              <AddButton text="Add Book" clickHandler={handle_AddBook}/>
              </div>
              
            </div>
        </div>
  )
}

export default MobileBookCard
