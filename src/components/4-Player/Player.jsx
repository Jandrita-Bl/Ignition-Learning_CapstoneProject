
import "./Player.scss";



import axios from "axios";

import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";





function Player () {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});



    const params = useParams();
//     const {id} = useParams();
//     console.log("params" , params.id);
   
   

    useEffect(() => {
        async function fetchVideos() {

            const response = await axios.get(
                "http://localhost:8080/videos/"
            );

            // console.log("video data", response.data);

            setVideos(response.data);



            // console.log(videos);

          //   console.log(SelectedVideo.data);


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

   
             } else {
   
                const selectedResponse = await axios.get(`http://localhost:8080/videos/${params.id}`);
                setSelectedVideo(selectedResponse.data);

                console.log("Selected Video Data:", selectedResponse.data);
             }
   

     }
     fetchVideo();

    }, [params.id]);



     // console.log("props", props);

return  (
<div className="selected-video">
     <section className="selected-video__outerbox">
                <div className="selected-video__Section selected-video__Section--2">
                    <video
                        className="selected-video__Video"
                        poster= {`http://localhost:8080/${selectedVideo.image}`}
                    >
                        
                    </video>
                </div>

                <div className="selected-video__Section selected-video__Section--1">
                    <h2 className="selected-video__Title">
                        {selectedVideo.title}
                    </h2>
                </div>


                <div className="selected-video__Section selected-video__Section--3">
                    <div className="selected-video__box">
                        <span className="selected-video__Item">
                            
                            {selectedVideo.channel} 
                        </span>
                        <span className="selected-video__Item">
                            {" "}
                            {new Date(
                                selectedVideo.timestamp
                            ).toLocaleDateString()}
                        </span>
                    </div>
                    <div className="selected-video__box">
                        <span className="selected-video__Item">
                            {selectedVideo.views}{" "}
                        </span>
                        <span className="selected-video__Item">
                            {selectedVideo.likes}
                        </span>
                    </div>
                </div>
            </section>

            <main className="article">
                <div className="article__Box">
                    <p className="article__Text">
                        {selectedVideo.description}
                    </p>
                </div>
            </main>

            <section className="comments">
                <div className="comments__section">
                    <div className="comments__userimg">
                        <img
                            className="comments__avatarIMG"
                            src={"AvatarImg"}
                            alt="Avatar User"
                        />
                    </div>

                    <form className="comments__form">
                        <h5 className="comments__Title"> # Comments</h5>

                        <h6 className="comments__Title2">
                            JOIN THE CONVERSATION
                        </h6>

                        <textarea
                            className="comments__textarea"
                            name="boxComment"
                            type="text"
                            placeholder="Add a new comment"
                            required
                        ></textarea>
                        <button className="comments__btn" type="submit">
                            COMMENT
                        </button>
                    </form>
                </div>

                <div className="comments__section2">
                    <div className="comments__userimg2">
                        <img
                            className="comments__avatarIMG"
                            src={"AvatarImg"}
                            alt="Avatar User"
                        />
                    </div>

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
            </section>
            
        



               <section className="next-video">

                         <ul>

                         <div className="recipes-page">
                         <div className="next-video__boxheader">
                    
                    <h6 className="next-video__header">NEXT VIDEOS</h6>
               </div>
                    <ul>
                    {selectedVideo.videos?.map((ingredient, index) => {
                         return <li key={index}>{ingredient}</li>;
                    })}
                    </ul>
                   
                    <ul>
                    {videos
                         .filter((video) => video.id !== selectedVideo.id)
                         .map((video) => {
                         return (
                         <li key={video.id} className="next-video__item">
                              <Link to={`/player/${video.id}`}>

                              <div className="next-video__box">
                         <img
                         className="next-video__IMG"
                        //  src= {video.image}
                        //  alt={video.title}
                        src={`http://localhost:8080/${video.image}`} // need to append the image file name with our server URL
            alt={video.title}
                         />

                         <div className="next-video__container">
                         <h6 className="next-video__subheader">{video.title}</h6>
                         <p className="next-video__txt">{video.channel}</p>
                         </div>
                         </div>

                              </Link>
                         </li>
                         );
                         })}
                    </ul>
    
                    </div>

                    </ul>

                   </section>

                   </div>

);
                    }

export default Player;

          

