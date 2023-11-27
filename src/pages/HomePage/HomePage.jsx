import "./HomePage.scss";

import MainNav from "../../components/1-MainNav/MainNav";


function HomePageJSX() {
    return (
        <div className="home">
            <MainNav />

            <div className="home__hero">
                <div className="home__overlay">
                    <div className="home__content">

                    </div>
                    
                </div>
            </div>
            <div className="home__section home__section--1">

                    <div className="home__title home__title--1">  
                          <p> <b>Welcome to Ignition Learning: </b><br />Tailoring Education to Your Unique Learning Style </p>
                    </div>
                    <div className="home__block home__block--1">
                         <span className="home__text home__text--1">Unlock the Power of Personalized Learning! In Ignition Learning, where we embrace the diversity of learning styles! Our mission is simple yet profound: to revolutionize education by tailoring it to fit the unique learning needs of each individual. We understand that everyone absorbs and processes information differently, and our platform is designed to honor these differences.</span>
                     </div>
            </div>

            <div  className="home__section home__section--2">     
                  <div className="home__block home__block--2">
                    <h2>Why Learning Styles Matter </h2>
                    <span className="home__text home__text--2">At the heart of our approach is a deep appreciation for the various learning styles: kinesthetic, auditory, visual, and reading/writing. Each style has its strengths and challenges, and recognizing this can transform the way you learn. Here’s why understanding and leveraging your learning style is crucial: </span>
                    <ul>
                        <li> <b> - Maximizes Learning Efficiency:</b> By aligning educational content with your learning preference, we ensure that you absorb information more effectively and efficiently.</li>
                        <li> <b> - Boosts Retention and Understanding:</b> When you learn in a way that suits you best, you not only retain information longer but also understand it more deeply.</li>
                        <li> <b> - Increases Engagement and Motivation:</b>Learning in your preferred style makes the process more enjoyable and engaging, fueling your motivation to learn.</li>
                    </ul>
                 </div>
            </div> 

            <div className="home__section home__section--3">
                <div className="home__block home__block--3">
                    <h2>The Challenge in Traditional Education </h2>
                    <span className="home__text home__text--3">Traditional education often adopts a one-size-fits-all approach, overlooking the unique learning needs of each student. This mismatch can lead to reduced engagement, lower retention rates, and a feeling of disconnect for many learners. Our platform seeks to bridge this gap by providing a personalized learning experience.</span>
                    <h2>Our Solution: A Customized Learning Journey </h2>
                    <span className="home__text home__text--3">Here’s how [Your Website Name] changes the game:</span>
                    
                    <ul>
                        <li> <b> - Personalized Learning Style Assessment:</b> When you join us, you’ll start with a comprehensive assessment to identify your dominant learning style.</li>
                        <li> <b> - Curated Content:</b> Based on your assessment results, we provide a rich mix of curated educational resources tailored to your learning style:</li>
                        <li> <b> - Community and Support: </b>Connect with learners who share your style, exchange ideas, and grow together.</li>
                    </ul>
                 </div>
             </div>

                  
        </div>
    );
}

export default HomePageJSX;
