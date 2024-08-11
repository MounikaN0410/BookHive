import React, { useContext } from 'react'
import {useState,useEffect} from 'react'
import Pagination from '../components/helper/Pagination.js'
import ViewPortContext from '../context/UserContext.js'
import NavBar from '../components/NavBar.js'
import MainContext from '../context/MainContext.js'
import Books from '../components/Books.js';



const Home = () => {
    
    const [loading,setLoading]=useState(false)
    const [books,setBooks]=useState([])
    const {location,setLocation}=useContext(MainContext)
    
    
    const [currentPage, setCurrentPage] = useState(1);
    const {viewPortWidth,viewPortHeight,setViewPortWidth,setViewPortHeight}=useContext(ViewPortContext);
    const [booksPerPage, setbooksPerPage] = useState(Math.floor(viewPortWidth/265)*10);
    
      useEffect(() => {
        const fetchBooks=async ()=>{
            setLoading(true);
            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer "+window.sessionStorage.getItem("token"));
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            fetch("https://bookhive.store/getbooks/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setBooks(result);
            })
            .catch((error) => console.error(error));
            setLoading(false);
        };
        fetchBooks();
      }, []);
    
    const indexOfLastBook=currentPage*booksPerPage;
    const indexOfFirstBook=indexOfLastBook-booksPerPage;
    const currentBooks=books.slice(indexOfFirstBook,indexOfLastBook)
    function handlePagination(pageNumber){
        console.log("In handle Pagination")
        console.log(pageNumber)
        setCurrentPage(pageNumber);

    }
  return (
    <div className='home'>
        <NavBar/>
        <Books books={currentBooks} loading={loading}/>
        {location === 'HOME'?<div className='home-pagination'>
            <Pagination Total={books.length} booksPerPage={booksPerPage} handlePagination={handlePagination} currentPage={currentPage}/>
        </div>:<></>}
        
    </div>
    
  )
}

export default Home
