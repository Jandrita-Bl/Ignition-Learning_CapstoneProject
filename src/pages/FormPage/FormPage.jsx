import "./UploadPage.scss";

import MainNav from "../../components/MainNav/MainNav";
import FormWithOnSubmit from "../../components/Form/Form";

function UploadPageJSX() {
    return (
        <div className="UploadHP">
            <MainNav />

            <FormWithOnSubmit />
        </div>
    );
}

export default UploadPageJSX;
