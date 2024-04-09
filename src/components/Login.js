import React, { useState,useRef } from 'react'
import Header from './Header'
import { checkvlaidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
const Login = () => {

    const [isSignInForm,setisSignInForm]=useState(true)
    const [Errormessage,setErrormessage]=useState(null)

    const email=useRef(null)
    const password=useRef(null) // here email and password.. are two Object which is created by useRef hook
    const username=useRef(null)
    const phonenum=useRef(null)
    const handlebuttonclick =()=>{    
     const message= checkvlaidData(email.current.value,password.current.value,username.current.value,phonenum.current.value) //these are the value inside he objects
     setErrormessage(message)
     if(message) return   // if there is an error it will return if it is correct then go for signin/signup

        //sign in sign Up logic    
     if(!isSignInForm){
          //sign up logic
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setErrormessage(errorCode+'-'+errorMessage)
              });
     }
     else{
          //sign in logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+'-'+errorMessage)
  });
     }
    }

    const toggleSigninFrom =()=>{
         setisSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='Background'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
             <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In':'Sign Up'}</h1>

             {!isSignInForm && (
            <div>
             <input 
             ref={username}
             type='text'
             placeholder='Name'
             className='p-2 my-3 w-full bg-slate-900'
             /> 
             <input
             ref={phonenum} 
             type='text'
             placeholder='Phon number'
             className='p-2 my-3 w-full bg-slate-900'
             />
            </div>
             )}
             <input 
             ref={email}
             type='text'
             placeholder='Email Address'
             className='p-2 my-3 w-full bg-slate-900'
             />
             <input 
             ref={password}
             type='text'
             placeholder='Password'
             className='p-2 my-3 w-full bg-slate-900'
             />
            <p className='text-red-600 font-bold'>{Errormessage}</p>
            <button className='p-2 my-6 bg-red-600 w-full rounded-lg' onClick={handlebuttonclick}>
              {isSignInForm ? 'Sign In':'Sign Up'}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSigninFrom}>{isSignInForm ? 'New to Netflix? Sign Up Now':'Alredy user ? Sign In Now'}</p>
        </form>
    </div>
  )
}

export default Login