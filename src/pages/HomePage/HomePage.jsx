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

            <div className="home__types"> Sliding Text </div>

            
        </div>
    );
}

export default HomePageJSX;
