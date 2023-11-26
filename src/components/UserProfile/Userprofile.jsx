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


      return <div className="nav"> 
        
 <nav className="nav__wrapper">



      <div className="nav__list">
          <img className="nav__img nav__img--1" src={Avatar} alt="" />
      </div>         

         <div className="results-container">
                    <ResultCircle percentage={percentages.A} color="#ff6384" label="Reading/Writing" />
                    <ResultCircle percentage={percentages.B} color="#36a2eb" label="Visual" />
                    <ResultCircle percentage={percentages.C} color="#ffcd56" label="Auditory" />
                    <ResultCircle percentage={percentages.D} color="#4bc0c0" label="Kinesthetic" />
          </div>



      <div className="nav__block  nav__block--1">

    
           <div className="nav__item nav__item--upload">
              <NavLink to="/assessment" >
                  <button className="nav__up-button">Re-Assess</button>
              </NavLink>
          </div>
      </div> 



  
  </nav>

 </div>

}

export default UserProfile;