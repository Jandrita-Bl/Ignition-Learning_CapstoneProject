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
                              Create Your Own Course <br />
                              & Upload it Here!
                         </span>

               </div>
                    
          

               <div className="UploadHP__Thumbnail">

                    <h6 className="Upload__Title2"> ADD YOUR MEDIA HERE</h6>

                    <div className="graybox"></div>

               </div>

          </div>


          <div>
               <form className="comments__form" onSubmit={handleSubmit}>

                    <h6 className="comments__Title2">
                         TITLE OF YOUR COURSE
                    </h6>

                    <textarea
                    className="comments__textarea"
                    name="VideoTitle"
                    type="text"
                    placeholder="Type the title to your course here"
                    required
                    ></textarea>

                    <h6 className="comments__Title2">
                         TYPE OF STYLE
                    </h6>

                    <label>
                            <input
                                type="radio"
                                name="K"
                            /> Kinesthesic
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="A"
                            />Auditive
                        </label> <label>
                            <input
                                type="radio"
                                name="V"
                            /> Visual
                        </label> <label>
                            <input
                                type="radio"
                                name="RW"
                            /> Read / Write
                        </label>

                    <h6 className="comments__Title2">
                    ADD A DESCRIPTION OF YOUR COURSE
                    </h6>

                    <textarea
                    className="comments__textarea comments__textarea-desc"
                    name="VideoDescription"
                    type="text"
                    placeholder="Type the description to your course here"
                    required
                    ></textarea>
                    <br />
                    <button  className="comments__button">
                    PUBLISH
                    </button>

                    <br />
                                   
                    <button className="comments__button comments__btn-cancel" type="submit">
                    CANCEL
                    </button>

                    </form>

          </div>          

     </div>
            
</div >

);

};


export default Form