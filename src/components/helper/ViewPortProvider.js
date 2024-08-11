import React from 'react'
import { createContext,useEffect,useState ,useContext} from 'react'
import ViewPortContext from '../../context/UserContext';


const ViewPortProvider = ({children}) => {
    const [viewPortWidth,setViewPortWidth]=useState(window.innerWidth)
    const [viewPortHeight,setViewPortHeight]=useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
          setViewPortWidth(window.innerWidth);
          setViewPortHeight(window.innerHeight);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);  
   
  return (
    <ViewPortContext.Provider value={{viewPortWidth,viewPortHeight,setViewPortWidth,setViewPortHeight}}>
       {children}
    </ViewPortContext.Provider>
    
  )
}
export default ViewPortProvider;
