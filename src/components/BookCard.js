import React from "react";
import AddButton from "./AddButton";
import "../styles/styles.css";
import {useContext} from "react";
import MainContext from '../context/MainContext.js'

const BookCard = (props) => {
  const {location,setLocation}=useContext(MainContext)
  function handle_AddBook(){
    props.setSelections(props.book)
    window.localStorage.setItem('book',JSON.stringify(props.book))
    setLocation('RESERVE')
  }
  return (
    <div className="book-card shadow-md">
      <div className="book-card-img">
        <img src={props.book.img} alt="Image Not Available" />
      </div>
      <div className='xs-text-black-semibold flex flex-col w-[250px]'>
        <span className="truncate center-text"> 
          {props.book.title}
        </span>
        <span className="xs-text-lighter-black-normal italic center-text">
          By {props.book.author}</span>
      </div>
      <div className='flex justify-end'>
        <AddButton text="Add Book" clickHandler={handle_AddBook}/>
      </div>
      
    </div>
  );
};

export default BookCard;
