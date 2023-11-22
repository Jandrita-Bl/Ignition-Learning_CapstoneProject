import "./MainNav.scss";

import {NavLink} from "react-router-dom";

function MainNav (){



      return <div className="nav"> 
        
 <nav className="nav__wrapper">

      <div className="nav__box">
        <NavLink to="/home" className="nav__logo-link">
                <img
                    className="nav__logo"
                    src={""}
                    alt="logo"
                />
        </NavLink>
         
      </div>

      <div className="nav__list">
          
      
          
          <div className="nav__item nav__item--search">
              <form className="nav__form" action="">
                  <input className="nav__input" type="text" placeholder="Search" />
              </form>
          </div>

          <img className="nav__img nav__img--1" src={"AvatarImg"} alt="" />

      </div>                   
          
      <div className="nav__block">
           <div className="nav__item nav__item--upload">
              <NavLink to="/upload" >
                  <button className="nav__up-button">BUTTON</button>
              </NavLink>
          </div>

          <img className="nav__img nav__img--2" src={""} alt="" />
      </div>

  
  </nav>

 </div>

}

export default MainNav;