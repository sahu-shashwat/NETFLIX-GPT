import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm,setisSignInForm]=useState(true)

    const toggleSigninFrom =()=>{
         setisSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='Background'/>
        </div>
        <form className='w-3/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
             <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In':'Sign Up'}</h1>

             {!isSignInForm && (
            <div>
             <input 
             type='text'
             placeholder='Name'
             className='p-2 my-3 w-full bg-slate-900'
             /> 
             <input 
             type='text'
             placeholder='Phon number'
             className='p-2 my-3 w-full bg-slate-900'
             />
            </div>
             )}
             <input 
             type='text'
             placeholder='Email Address'
             className='p-2 my-3 w-full bg-slate-900'
             />
             <input 
             type='text'
             placeholder='Password'
             className='p-2 my-3 w-full bg-slate-900'
             />
            
            <button className='p-2 my-6 bg-red-600 w-full rounded-lg'>
              {isSignInForm ? 'Sign In':'Sign Up'}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSigninFrom}>{isSignInForm ? 'New to Netflix? Sign Up Now':'Alredy user ? Sign In Now'}</p>
        </form>
    </div>
  )
}

export default Login