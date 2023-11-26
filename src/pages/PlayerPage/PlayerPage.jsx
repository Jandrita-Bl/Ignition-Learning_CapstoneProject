import "./PlayerPage.scss";

import MainNav from "../../components/1-MainNav/MainNav";
import Player from "../../components/4-Player/Player";
import UserProfile from "../../components/UserProfile/Userprofile";



function PlayerPageJSX() {
    return (
        <div className="UploadHP">
            <MainNav />

            <UserProfile />

            <Player />

           

        </div>
    );
}

export default PlayerPageJSX;
