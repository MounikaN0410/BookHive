import React from "react";
import { useState ,useContext} from "react";

import InputField from "../components/InputField";
import InputPass from "../components/InputPass";
import AddButton from "../components/AddButton";
import { GrFormViewHide } from "react-icons/gr";
import { PiEyeBold } from "react-icons/pi";
import { RxDividerHorizontal } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import MainContext from "../context/MainContext";
import "../styles/styles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {location,setLocation}=useContext(MainContext)

  function handle_signup(){
    props.setSwitch('signup');
  }

  function handle_Login(){
    if (!email){
      
      toast.error("Email not Entered")
      
    } 
    else if (!/\S+@\S+\.\S+/.test(email)){
      
      toast.error("Invalid Email")
     
    }
    if (!password){
      toast.error("Password Not entered")

    }
    
    else{
      login(email,password);
    }
  
  }

  const login = async (e,pwd) => {
      

      try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
          "email": e,
          "password": pwd
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        const response=await fetch("https://bookhive.store/login/", requestOptions)
        if (!response.ok) {
          throw new Error('Failed to login');
            }
        else if(response.ok){
          const data = await response.json();
          window.sessionStorage.setItem("token", data['token']);
          setLocation('HOME');
        }

          }
      catch(error){
              toast.error("Failed to login Try again/Sign Up")  
              console.log(error.message);
            }
        }

  function handle_show_pass(){
    setShowPassword(!showPassword)
  }

  return (
    <div className='box'>
      <span className='l-text-black text-2xl mb-4 justify-start '>Welcome Back!</span>
      <div className='flex flex-col items-start'>
          <InputField
            type='text'
            placeholder="Email"
            parent_function={setEmail}
          />
         
      </div>
      <div className='wrapper flex flex-col items-start'>
          <InputPass
            icon={showPassword?<PiEyeBold size='2rem' color='grey' onClick={handle_show_pass}/>:<GrFormViewHide size='2rem' color='grey' onClick={handle_show_pass}/>} 
            type={showPassword? 'text' : 'password'}
            placeholder="Password"
            parent_function={setPassword}
          />
          
      </div>
      <AddButton clickHandler={handle_Login} text='Login'/>
      
      <div className='xs-text-black'>New User?</div> 
      <AddButton clickHandler={handle_signup} text='Create Account'/>
      <ToastContainer />
    </div>
  );
};

export default Login;