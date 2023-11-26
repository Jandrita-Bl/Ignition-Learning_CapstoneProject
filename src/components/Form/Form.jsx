import "../Form/Form.scss"

import { useNavigate } from "react-router-dom";
import axios from 'axios'; 



function Form () { 

     const navigate = useNavigate();
    
     


  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.VideoTitle.value;
    const description = event.target.VideoDescription.value;
    
    
    

    console.log("Title:", title);
    console.log("Description:", description);

    try {
    
     const formData = new FormData(event.target);
     const title = formData.get("VideoTitle");
     const description = formData.get("VideoDescription");
    
     const response = await axios.post(`http://localhost:8080/videos`, {
  
     title: title,
     description: description,
     


      }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      
  
     console.log("Response Data:", response.data);


      alert("Course uploaded!", response.data);
      navigate("/player");
    } catch (err) {
      alert("Something went wrong, try again", );
     
    }
  };

    




return (

 <div className="Container">

     <div className="SubContainer">
               
          <div className="UploadHP">

               <div className="UploadHP__Box1">

                         <span className="UploadHP__Title">
                              Upload Video
                         </span>

               </div>
                    
          

               <div className="UploadHP__Thumbnail">

                    <h6 className="Upload__Title2"> VIDEO THUMBNAIL</h6>

                    <img className="UploadHP__Video" src={"ThumbnailIMG"} alt="Upload" />

               </div>

          </div>


          <div>
               <form className="comments__form" onSubmit={handleSubmit}>

                    <h6 className="comments__Title2">
                         TITLE YOUR VIDEO
                    </h6>

                    <textarea
                    className="comments__textarea"
                    name="VideoTitle"
                    type="text"
                    placeholder="Add a title to your video"
                    required
                    ></textarea>

                    <br />

                    <h6 className="comments__Title2">
                    ADD A VIDEO DESCRIPTION
                    </h6>

                    <textarea
                    className="comments__textarea comments__textarea-desc"
                    name="VideoDescription"
                    type="text"
                    placeholder="Add a description to your video"
                    required
                    ></textarea>
                    <br />
                    <button  className="comments__btn">
                    PUBLISH
                    </button>

                    <br />
                                   
                    <button className="comments__btn comments__btn-cancel" type="submit">
                    CANCEL
                    </button>

                    </form>

          </div>          

     </div>
            
</div >

);

};


export default Form