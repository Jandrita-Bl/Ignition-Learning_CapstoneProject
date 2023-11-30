import "./HomePage.scss";
import Painter from "../../assets/Images/Painter.png"
import Girl from "../../assets/Images/Girl.png"


import MainNav from "../../components/1-MainNav/MainNav";


function HomePageJSX() {
    return (
        <div className="home">
            <MainNav />

            <div className="home__hero">
                <div className="home__overlay">
                    <div className="home__content">
                        <div className="home__content1">
                            <p className="home__sub1">  <b>Learning Styles... 
                                <br /> Truth or Myth? </b>
                            </p>
                        </div>

                        <div  className="home__content2">
                            <p  className="home__sub2 home__kin">Kinesthetic</p>
                            <p  className="home__sub2 home__aud">Auditive</p>
                            <p  className="home__sub2 home__visual">Visual</p>
                        </div>


                    </div>
                    
                </div>
            </div>
            <div className="home__section home__section--1">

                    <div className="home__title home__title--1">  
                          <p> <b>It really does not matter!  <br />
                            What matters is that YOU get to decide HOW you want your content delivered!  </b><br /> </p>
                    </div>
                    
                    <div className="home__button home__button1"> Show me All your Content!</div>

                    <div className="home__button  home__button2"> I want to take the Learning Style Assessment!</div>


                    <div className="home__block home__block--1">

                    <div  className="home__subblock home__subblock1">
                            <img className="home__painter" src={Girl} alt="" />
                        </div>
                       
                        <div className="home__subblock home__subblock2">
                         <span className="home__text home__text--1">In Ignition Learning, we offer you a platform with thousands of courses at your fingertips... <br /> <br />
                         But most important of all, you get to personalize your profile and select the type of media, formats or modality that best fits your needs, wether you beleive in Learning Styles or not...
                         </span>
                         <span className="home__text home__text--1"><br /> <br />
                         Every course you need available here via video, diagrams, audio files, audio books, to name a few... <br /> <br /> We also have classes, events, gatherings, both on-line and in-person, far and near, as we connect with local professionals, instututions, and enthusiasts, that share their resources with us... <br /><br />
                          We have it all here in one place for you!
                         </span>

                         </div>

                        

                       
                         <div  className="home__subblock home__subblock1">
                            <img className="home__painter" src={Painter} alt="" />
                        </div>
                        
                     </div>
            </div>

                 
        

                  
        </div>
    );
}

export default HomePageJSX;
