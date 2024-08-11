import React from 'react'
import {useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "../styles/styles.css";

function renderEventContent(eventInfo) {
return (
    <>
    <b>{eventInfo.timeText}</b>
    <i>{eventInfo.event.title}</i>
    </>
)
}


const Calendar = () => {
  const [dates,setDates]=useState([]);
  const func = (data) => {
    console.log(data);
    let ev = [];
    for (let d in data) {
      if (!data[d]) {
        ev.push({ display: "background", start: d, end: d });
      }
    }
    setDates(ev);
  }
  
    const fetchDates=async ()=>{
        
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer "+window.sessionStorage.getItem("token"));
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        "book": JSON.parse(localStorage.getItem('book')).id
       
      });
      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
      };

      fetch("https://bookhive.store/reserve/", requestOptions)
      .then((response) => response.json())
      .then((result) => func(result))
      .catch((error) => console.error(error));

    };
    useEffect(()=>{
      fetchDates();
    },[])
   

   
  return (
    <div>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            events={dates}
            eventClassNames='green-events'
      />
    
    </div>
 
  )
}

export default Calendar
