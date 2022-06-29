import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Data = () => {
   const [f_name, setF_Name] = useState("");
   const [l_name, setL_Name] = useState("");
   const [email, setEmail] = useState("");
   const [Contact, setContact] = useState("");
   const [password, setPassword] = useState("");
   const [_id, set_Id] = useState(null);


   const collectData = async (event) => {
      console.log(f_name, l_name, email, Contact, password, _id)
      event.preventDefault();
      const option = {
         method: 'POST',
         url: 'http://localhost:4000/signup',
         Headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
         },
         data: {
            _id: _id,
            f_name: f_name,
            l_name: l_name,
            email: email,
            contact: Contact,
            password: password,
            c_password: password
         }
      }
      axios(option)
         .then(function (response) {
            console.log(response);

         })
         .catch(function (error) {
            console.log(error);
         });
   }
   return (
      <div className="ragister">
         <h1>Login</h1>


         <input className="inputBox" type="text"
                value={f_name} onChange={(e) => setF_Name(e.target.value)} placeholder="Enter Name" /><br /> 

          <input className="inputBox" type="text"
                value={l_name} onChange={(e) => setL_Name(e.target.value)} placeholder="Enter Name" /><br /> 

         <input className="inputBox" type="text"
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" /><br />

         <input className="inputBox" type="Contact"
                value={Contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact" /><br />

         <input className="inputBox" type="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" /><br />

         <Link to={'../'}><button onClick={collectData} type="button">Submit</button></Link>

      </div>
   )
}
export default Data;