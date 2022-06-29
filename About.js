import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";

const About = () => {
         const [users, setUsers] = useState([]);
         const params = useParams();
      //    const[data,setData] = useState(); 
         const [show, setShow] = useState(false);
         const handleClose = () => setShow(false);
const handleShow = async () =>{ 
                setShow(true);
          }
const getUsers = async () => {
                const response = await fetch('http://localhost:4000/');
                const data = await response.json();
                setUsers(data);
                console.log(data);
}
useEffect(() => {
          getUsers();
}, []);

const DeleteData = async (id) => {

            const result = await axios.delete(`http://localhost:4000/delete/${params.id}`)
           .then(function (result) {
             console.log("click")
            if (result) {
               console.log(id)
                 getUsers();
}
      })
        .catch(function (error) {
         console.log(error);
                        })
        
}

const listItems = users.map((myList) => {
    const {_id,f_name,l_name,email,contact,password}=myList;
     return (<>
           
                <tr >  
                        <td>{_id}</td> 
                        <td>{f_name}</td>
                        <td>{l_name}</td>
                        <td>{email}</td>
                        <td>{contact}</td>
                        <td>{password}</td>
                        <td>
                              <Link to={'../edit/'+myList._id}><button>Edit</button></Link>
                              <button onClick={()=>{handleShow(myList.id)}}> Delete</button>
                        </td>                 
                </tr>
            
 </>);
 });
 return (
          <>
           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure You Want To Delete this information...!!</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={DeleteData}> Yes </Button>
                  <Button variant="primary" onClick={handleClose}> No </Button>
              </Modal.Footer>
            </Modal>
                <div className="Btn">
                      <Link to={'../add'}> <button>Add Data</button></Link>
                </div>
    <table>
           <thead>
                 <tr>
                    <th> ID</th> 
                    <th> f_name </th>
                    <th>l_name</th>
                    <th> Email </th>
                    <th> Conact </th>
                    <th> password </th>
                    <th>Action</th>
                 </tr>
          </thead>
                 <tbody> {listItems}</tbody>
     </table>

 </>)}
export default About;