import React, { useContext } from 'react';

import MainContext from '../context/MainContext';
import Lgn_Sgn from './Lgn_Sgn';
import Home from './Home';

const Main = () => {
    const {location,setLocation}=useContext(MainContext);
    const helper = () => {
        if(window.sessionStorage.getItem('token')){
            if(localStorage.getItem('book'))
                setLocation('RESERVE');
            else
                setLocation('HOME');
        }
        else{
                setLocation('LOGIN');
        }
    }
    helper();
    return (
        <>
        {location === 'LOGIN'?<Lgn_Sgn/>:<Home/>}
        </>
    )

}

export default Main;