import "./UserProfile.scss";
import Avatar from "../../assets/Images/Avatar1.png"

import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import ResultCircle from "../3-ResultCircle/ResultCircle";

function UserProfile (){

     const [percentages, setPercentages] = useState({ A: 0, B: 0, C: 0, D: 0 });

     useEffect(() => {
          const savedPercentages = localStorage.getItem('assessmentPercentages');
          if (savedPercentages) {
              setPercentages(JSON.parse(savedPercentages));
          }
      }, []);


      return <div className="results"> 
        
 <nav className="results__wrapper">



      <div className="results__box1">
          <h4>Welcome Back Jessy!</h4>
          <h4>These are your Learning Styles</h4>
      </div>         

         <div className="results__container">
         
                 <div className="results__circle">  <ResultCircle percentage={percentages.A} color="#ff6384" label="Read/Write" /></div> 
                 <div className="results__circle">  <ResultCircle percentage={percentages.B} color="#36a2eb" label="Visual" /></div> 
                 <div className="results__circle">  <ResultCircle percentage={percentages.C} color="#ffcd56" label="Auditory" /></div> 
                 <div className="results__circle">  <ResultCircle percentage={percentages.D} color="#4bc0c0" label="Kinesthetic" /></div> 
                    
         </div>

         <div className="results__box2">
          <img className="results__img" src={Avatar} alt="" />
          <NavLink to="/assessment" ><button className="results__assess">Retake</button></NavLink>
      </div>    


  
  </nav>

 </div>

}

export default UserProfile;