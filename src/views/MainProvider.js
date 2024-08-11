import React from "react";
import { useState } from "react";
import MainContext from "../context/MainContext";

const MainProvider = ({children}) => {
    const [location,setLocation] = useState('LOGIN')
    return(
        <MainContext.Provider value={{location,setLocation}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;