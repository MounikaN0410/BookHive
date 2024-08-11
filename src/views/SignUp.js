import React from 'react'
import { useState,useContext } from "react";
import InputField from "../components/InputField";
import InputPass from "../components/InputPass";
import AddButton from "../components/AddButton";
import { GrFormViewHide } from "react-icons/gr";
import { PiEyeBold } from "react-icons/pi";
import MainContext from '../context/MainContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/styles.css";


const SignUp = (props) => {

  
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [mobile,setMobile]=useState("")
    const [showPassword,setShowPassword]=useState(false)
    const {location,setLocation}=useContext(MainContext)
   


    function handle_Signup(){
      if (!email){
       
        toast.error("Email not Entered")
        
      } 
      else if (!/\S+@\S+\.\S+/.test(email)){
       
        toast.error("Invalid Email")
      }
      if (!password){
        toast.error('Password not entered')
      }
      if (!firstName || !lastName || !mobile){
        toast.error('Please fill all the fields')
      }
      else if (password!=confirmPassword){
        toast.error('Password not matched')
      }
      else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password)) {
        toast.error('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit');
    }
      else{
        signup(firstName,lastName,email,password,mobile) 
      }
    }
    const signup= async(firstName,lastName,email,password,mobile)=>{


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZXhwIjoxNzIxMTQ3ODg3LCJpYXQiOjE3MjExNDQyODd9.-EuJ2SMKZtV4bzux3Qr_SpA9IGDk_4nN13zSxAcoos0");

        const raw = JSON.stringify({
          "firstname":firstName,
          "lastname":lastName,
          "email":email,
          "password":password,
          "phone":mobile
        });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("https://bookhive.store/register/", requestOptions)
        .then((response) => {
          if(response.ok)          
            setLocation('HOME');
          else
            toast.error('User Already Exists')
        }).catch((error) => toast.error(error));
            
        }

    function handle_Login(){
        props.setSwitch("login");
    }

    function handle_show_pass(){
        setShowPassword(!showPassword);
    }
  return (
    <div className='box items-center'>
        <span className='l-text-black sm:pt-16'>Join Us Today!</span>

        <div>
          <InputField
            type='text'
            placeholder="First Name"
            parent_function={setFirstName}
          />
      </div>

      <div>
          <InputField
            type='text'
            placeholder="Last Name"
            parent_function={setLastName}
          />
      </div>

      <div>
          <InputField
            type='text'
            placeholder="Email"
            parent_function={setEmail}
          />
      </div>

      <div>
        <InputPass
                icon={showPassword?<PiEyeBold size='2rem' color='grey' onClick={handle_show_pass}/>:<GrFormViewHide size='2rem' color='grey' onClick={handle_show_pass}/>} 
                type={showPassword? 'text' : 'password'}
                placeholder="Password"
                parent_function={setPassword}
            />
      </div>


      <div>
        <InputPass
            icon={showPassword?<PiEyeBold size='2rem' color='grey' onClick={handle_show_pass}/>:<GrFormViewHide size='2rem' color='grey' onClick={handle_show_pass}/>} 
            type={showPassword? 'text' : 'password'}
            placeholder="Confirm Password"
            parent_function={setConfirmPassword}
          />
      </div>

      <div>
          <InputField
            type='tel'
            placeholder="Mobile number"
            parent_function={setMobile}
          />
      </div>
      <div className='flex flex-col items-center sm:mt-0 gap-2 sm:gap-0'>
        <AddButton clickHandler={handle_Signup} text='Sign Up'/> 
        <div className='xs-text-black'>Already a member?</div> 
        <AddButton clickHandler={handle_Login} text='Login'/>

      </div>
      <ToastContainer />
      
    </div>
  )
}

export default SignUp
