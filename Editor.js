import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Editor = () => {
  const [f_name, setF_Name] = useState("");
  const [l_name, setL_Name] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  
  const params = useParams("");
  useEffect(() => {
    getproduct();
  }, []);
  const getproduct = async () => {

    axios.get(`http://localhost:4000/User/${params.id}`)
      .then(function (response) {
        let userData = response.data;
        setF_Name(userData.f_name);
        setL_Name(userData.l_name);
        setEmail(userData.email);
        setContact(userData.contact);
        setPassword(userData.password);

      })
      .catch(function (error) {
        console.log("Msg : data not found")
      });
  }

 const Data=async()=>{
    //  console.log(f_name,l_name,email,Contact,password)
     const result= await axios.put(`http://localhost:4000/Update/${params.id}`,{ 
        f_name : f_name,
        l_name : l_name,
          email : email,
        contact : Contact,
        password : password,
})
      .then(function(result){
              console.log(result.data);
          
})
    .catch(function(error){
              console.log(error)
                })

}
return (
    <div className="ragister">
      <h1>Register</h1>


      <input className="inputBox" type="text"
        value={f_name} onChange={(e) => setF_Name(e.target.value)} /><br />

      <input className="inputBox" type="text"
        value={l_name} onChange={(e) => setL_Name(e.target.value)} /><br />

      <input className="inputBox" type="text"
        value={email} onChange={(e) => setEmail(e.target.value)} /><br />

      <input className="inputBox" type="Contact"
        value={Contact} onChange={(e) => setContact(e.target.value)} /><br />

      <input className="inputBox" type="Password"
        value={password} onChange={(e) => setPassword(e.target.value)} /><br />

      <Link to={'../'}><button onClick={Data} type="button">Update</button></Link>

    </div>
  )
}
export default Editor;