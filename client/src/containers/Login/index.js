import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import UTILS from '../../utils';
// import config from "../../config/config";


// Create an async function called loginUser. The function will take credentials as an argument, then it will call the fetch method using the POST option:

async function loginUser(credentials) {
  return fetch(`${UTILS.signIn}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 

function Login({setToken}){
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

//  create a form submit handler called handleSubmit that will call loginUser with the username and password. Call setToken with a successful result. Call handleSubmit using the onSubmit event handler on the <form>:
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}



Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login;

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// import styles from "./Login.css";

// import { useForm } from "react-hook-form";
// import {BrowserRouter as Route, Link } from "react-router-dom";

// import config from "../../config/config";

// const Login = () => {
//   const { register, handleSubmit, errors } = useForm();
//   const [message, setMessage] = useState();
//   const history = useHistory();

//   const onSubmit = (data, e) => {
//     setMessage({
//       data: "Login is in progress...",
//       type: "alert-warning",
//     });
//     fetch(`${config.baseUrl}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then(({ error, data }) => {
//         setMessage({
//           data: error || "Logged in successfully, redirecting...",
//           type: error ? "alert-danger" : "alert-success",
//         });

//         !error &&
//           setTimeout(() => {
//             localStorage.setItem("token", data.token);
//             history.push("/ho");
//           }, 3000);

//         !error && e.target.reset();
//       });
//   };

//   return (
//     <div
//       className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
//     >
//       <div className={styles.loginFormContainer}>
//         {message && (
//           <div
//             className={`alert fade show d-flex ${message.type}`}
//             role="alert"
//           >
//             {message.data}
//             <span
//               aria-hidden="true"
//               className="ml-auto cursor-pointer"
//               onClick={() => setMessage(null)}
//             >
//               &times;
//             </span>
//           </div>
//         )}
//         <fieldset className="border p-3 rounded">
//           <legend
//             className={`${styles.loginFormLegend} border rounded p-1 text-center`}
//           >
//             Login Form
//           </legend>
//           <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
//             <div className="form-group">
//               <label htmlFor="inputForEmail">Email address</label>
//               <span className="mandatory">*</span>
//               <input
//                 id="inputForEmail"
//                 name="email"
//                 type="email"
//                 className="form-control"
//                 aria-describedby="Enter email address"
//                 placeholder="Enter email address"
//                 ref={register({
//                   required: {
//                     value: true,
//                     message: "Please enter your email address",
//                   },
//                 })}
//               />
//               {/**
//                * we provide validation configuration for email field above
//                * error message are displayed with code below
//                */}
//               {errors.email && (
//                 <span className={`${styles.errorMessage} mandatory`}>
//                   {errors.email.message}
//                 </span>
//               )}
//             </div>
//             <div className="form-group">
//               <label htmlFor="inputForPassword">Password</label>
//               <span className="mandatory">*</span>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 id="inputForPassword"
//                 placeholder="Enter password"
//                 ref={register({
//                   required: {
//                     value: true,
//                     message: "Please enter password",
//                   },
//                 })}
//               />
//               {errors.password && (
//                 <span className={`${styles.errorMessage} mandatory`}>
//                   {errors.password.message}
//                 </span>
//               )}
//             </div>
//             <div className="d-flex align-items-center">
//               <button type="submit" className="btn btn-outline-primary">
//                 Login
//               </button>
//               <Route>
//                 <Link to='register'>New User</Link>
//                 <Route path="/re"
//               </Route>
             
//             </div>
//           </form>
//         </fieldset>
//       </div>
//     </div>
//   );
// };

// export default Login;