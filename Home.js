import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <div className="App">
            <ul>
               <li>
                  <Link to="/data">Home</Link>
               </li>

               <li>
                  <Link to="/about">About Us</Link>
               </li>

               <li>
                  <Link to="/contact">Contact Us</Link>
               </li>
            </ul>
         </div>
      </>
   )

};
export default Home;