import "./Player.scss";
import axios from "axios";
import contenttype from "../../assets/Images/contenttypes.png"
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Player () {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
    const params = useParams();

    useEffect(() => {
        async function fetchVideos() {

            const response = await axios.get(
                "http://localhost:8080/videos/"
            );

            setVideos(response.data);
        }
        fetchVideos();
    },[]);

    useEffect(() => {

     async function fetchVideo () {

          if (!params.id) {
               const response = await axios.get(
                "http://localhost:8080/videos/"
               );

               const selectedResponse = await axios.get(`http://localhost:8080/videos/${response.data[0].id}`);

               setSelectedVideo(selectedResponse.data);

               
console.log("Selected Video Image URL:", selectedResponse.data.image);  


   
             } else {
   
                const selectedResponse = await axios.get(`http://localhost:8080/videos/${params.id}`);
                setSelectedVideo(selectedResponse.data);

                console.log("Selected Video Data:", selectedResponse.data);
             }
   

     }
     fetchVideo();

    }, [params.id]);




return  (
<div className="selected-video">

<h2 className="selected-video__h2">Content for Your Style</h2>
    
    <section className="selected-video__upper">
    
     <div className="selected-video__outerbox">
        
                <div className="selected-video__Section selected-video__Section--1">
                    <h3 className="selected-video__Title">
                        {selectedVideo.title}
                    </h3>
                </div>

                <div className="selected-video__Section selected-video__Section--2">
                    <video
                        className="selected-video__Video"
                        poster= {`http://localhost:8080/${selectedVideo.image}`}
                    >
                        
                    </video>
                </div>

             


                <div className="selected-video__Section selected-video__Section--3">
                    <div className="selected-video__box">
                            <span className="selected-video__Item">
                                    
                                  Learning Style: Visual
                             </span>

                             <br />
                        
                            <span className="selected-video__Item">
                                
                                 Content Delivery: Video
                            </span>

                            <br />
                            <br />

                            <span className="selected-video__Item">Teacher:
                                
                                {selectedVideo.channel} 
                            </span>

                            <br />

                            <span className="selected-video__Item"> Created:
                                {" "}
                                {new Date(
                                    selectedVideo.timestamp
                                ).toLocaleDateString()}
                            </span>
                    </div>
                    <br />
                    <div className="selected-video__box">
                    
                        <span className="selected-video__Item"> Students:
                            {selectedVideo.views}{" "}
                        </span>
                        <br />
                        
                        <span className="selected-video__Item"> Likes:
                            {selectedVideo.likes}
                        </span>
                    </div>
                </div>

                <main className="article">
                <div className="article__Box">
                    <p className="article__Text">
                        {selectedVideo.description}
                    </p>
                </div>
            </main>
            </div>

            <div className="selected-video__outerbox">
                
            <section className="comments">
                <div className="comments__section">
                  

               
                </div>

                <div className="comments__s">
                <h5 className="comments__Title"> COMMENTS</h5>

                  

                    <ul className="comments__item-box">
                        {selectedVideo.comments && selectedVideo.comments.map((comment) => (
                            
                            <div className="comments__item" key={comment.id}> 
                                <div className="comments__subheader">
                                    <div className="comments__name">
                                        <li
                                            className="comments__name--text"
                                            key={comment.id}
                                        >
                                            {comment.name}
                                        </li>
                                    </div>
                                    <div className="comments__date">
                                        <li className="comments__date--text">
                                            {new Date(
                                                comment.timestamp
                                            ).toLocaleDateString()}
                                        </li>
                                    </div>
                                </div>

                                <div className="comments__box">
                                    <li className="comments__box--text">
                                        {comment.comment}
                                    </li>
                                </div>
                            </div>
                        ))}
                    </ul>

                    
                </div>

{/* 
                <form className="comments__form">

<h6 className="comments__Title2">
    Let us know what you think of the content!
</h6>

<textarea
    className="comments__textarea"
    name="boxComment"
    type="text"
    placeholder="Add a new comment"
    required
></textarea>
<button className="comments__button" type="submit">
    COMMENT
</button>
</form> */}

            </section>
                
                 </div>




            </section>

          

            
        

               <section className="next-video">

                         <div className="next-video__boxh">
                            <div className="next-video__boxheader">
                                <h3 className="next-video__header">COURSES SELECTION</h3>
                            </div>
            
                                {selectedVideo.videos?.map((video, index) => {
                                    return <li key={index}>{video}</li>;
                                })}
                         

                            <br />
                            <br />
                   <div>
                    {videos
                         .filter((video) => video.id !== selectedVideo.id)
                         .map((video) => {
                         return (
                         <div key={video.id} className="next-video__item">
                              <Link to={`/player/${video.id}`}>

                                    <div className="next-video__box">
                                    <div className="next-video__container">
                                <h6 className="next-video__txt next-video__subheader">{video.title}</h6>
                                <p className="next-video__txt"> Learning Style: Visual</p>
                                <p className="next-video__txt">Content Delivery: Video</p>
                                </div>

                                <img className="next-video__info"   src={contenttype}
                                                  alt={video.title} />
                                                <img
                                                className="next-video__IMG"
                                            
                                                src={`http://localhost:8080/${video.image}`}
                                                     alt={video.title}
                                                />
                                                

                                    
                                </div>

                                    </Link>
                         </div>
                         );
                         })}
                    
                    </div>
                    </div>

                   

                   </section>

                   </div>

);
                    }

export default Player;

          

