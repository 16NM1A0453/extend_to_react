import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
   const goTo = useNavigate();
   const [fname, setFname] = useState('');
   const [lname, setLname] = useState('');
   const [email, setEmail] = useState('');
   //error usage variables
   const [firstNameError, setFirstNameError] = useState('');
   const [emailError, setEmailError] = useState('');
   const [error, setError] = useState('');

   const onfNameChange = (e) => {
      setFname(e.target.value);
   };
   //later push into helper functions
   const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email); //returns a boolean value
   };
   const onEmailChange = (e) => {
      if (!isValidEmail(e?.target?.value)) {
         setEmail(null);
     } else {
         setEmail(e?.target?.value);
     }
   };
   const onSignUpBtnClick = () => {
      //validating firstname
      if (fname?.length < 3) {
         setFirstNameError("Please enter more than 3 characters");
         setError("Please enter more than 3 characters");
      } 
      //validating email
      if (!email) {
         setEmailError("Invalid Email");
         setError("Please enter more than 3 characters");
     } else {
         setEmailError(null);
         setEmail("");
     }
   };
   const onLoginBtnClick = () => {
      goTo('/Login');
   };

   return (
      <>
         <div className='container'>
            <div className='heading'>
               <h2>
                  Sign Up
               </h2>
            </div>
            <div className='firstname'>
               <input type="text" placeholder='Enter First Name' onChange={onfNameChange}/>
               {firstNameError && <p style={{color: "red"}}>{firstNameError}</p>}
            </div>
            <div className='lastname'>
               <input type="text" placeholder='Enter Last Name' />
            </div>
            <div className='email'>
               <input type="email" placeholder='Enter email' onChange={onEmailChange}/>
               {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>
            <div className='password'>
               <input type="password" placeholder='Enter password' />
            </div>
            <div className='confirmPwd'>
               <input type="password" placeholder='Confirm password' />
            </div>
            <div className='btnClass'>
               <button onClick={onSignUpBtnClick}>Sign Up</button>
               <button onClick={onLoginBtnClick}>Login</button>
            </div>
         </div>
      </>
   );
};

export default SignUp;
