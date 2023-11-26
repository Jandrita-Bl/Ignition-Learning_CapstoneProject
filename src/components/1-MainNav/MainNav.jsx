import "./MainNav.scss";
import Logo from "../../assets/Logo/Ignition-Logo.png"
import Avatar from "../../assets/Images/Avatar1.png"


import {NavLink} from "react-router-dom";

function MainNav (){



      return <div className="nav"> 
        
 <nav className="nav__wrapper">

      <div className="nav__box">
        <NavLink to="/home" className="nav__logo-link">
                <img
                    className="nav__logo"
                    src={Logo}
                    alt="logo"
                />
        </NavLink>
         
      </div>

      <div className="nav__list">
          <img className="nav__img nav__img--1" src={Avatar} alt="" />
      </div>         

      <div className="nav__block  nav__block--1">
           <div className="nav__item nav__item--upload">
              <NavLink to="/home" >
                  <button className="nav__up-button">Home</button>
              </NavLink>
          </div>
      </div> 

      <div className="nav__block">
           <div className="nav__item nav__item--upload">
              <NavLink to="/assessment" >
                  <button className="nav__up-button">Assessment</button>
              </NavLink>
          </div>
      </div>    

        <div className="nav__block">
           <div className="nav__item nav__item--upload">
              <NavLink to="/player" >
                  <button className="nav__up-button">Content</button>
              </NavLink>
          </div>
      </div>       

          
      <div className="nav__block">
           <div className="nav__item nav__item--upload">
              <NavLink to="/upload" >
                  <button className="nav__up-button">Upload Course</button>
              </NavLink>
          </div>

          <img className="nav__img nav__img--2" src={Avatar} alt="" />
      </div>

  
  </nav>

 </div>

}

export default MainNav;