import "./ContentPage.scss";
import cooking from "../../assets/Images/Cooking.png"
import note from "../../assets/Images/Note.png"
import meetup from "../../assets/Images/Meetup.png"
import diagram from "../../assets/Images/VegDiagram.png"
import MainNav from "../../components/1-MainNav/MainNav";

import React, { useState, useEffect, useRef } from 'react';

const ContentPage = () => {
     const [selectedItem, setSelectedItem] = useState(null);
     const [mediaContent, setMediaContent] = useState(null);
   
     const handleItemClick = (item) => {
       setSelectedItem(item);
   
       if (item === 'video') {
         createYouTubePlayer("l0i2eQQ9UeA"); // Replace with the actual YouTube video ID
       } else {
         // Pause and destroy the YouTube player if it exists
         if (youtubePlayer) {
           youtubePlayer.pauseVideo();
           youtubePlayer.destroy();
           setYoutubePlayer(null);
         }
       }
     };
   
     const clearSelectedItem = () => {
       setSelectedItem(null);
       setMediaContent(null);
   
       // Pause and destroy the YouTube player if it exists
       if (youtubePlayer) {
         youtubePlayer.pauseVideo();
         youtubePlayer.destroy();
         setYoutubePlayer(null);
       }
     };
   
     // YouTube iframe API setup
     const [youtubePlayer, setYoutubePlayer] = useState(null);
     const youtubePlayerRef = useRef(null);
   
     const createYouTubePlayer = (videoId) => {
       if (youtubePlayerRef.current) {
         const player = new window.YT.Player(youtubePlayerRef.current, {
           height: '100%',
           width: '100%',
           videoId: videoId,
           playerVars: {
             autoplay: 1,
           },
           events: {
             onReady: (event) => {
               event.target.playVideo();
             },
           },
         });
   
         setYoutubePlayer(player);
       }
     };
   
     useEffect(() => {
       // Load the YouTube iframe API
       const script = document.createElement('script');
       script.src = 'https://www.youtube.com/iframe_api';
       script.async = true;
       document.head.appendChild(script);
   
       return () => {
         // Clean up the YouTube iframe API script when unmounting
         document.head.removeChild(script);
       };
     }, []);
   
     const renderContent = () => {
       switch (selectedItem) {
         case 'video':
           return (
             <div className="media-container" ref={youtubePlayerRef}></div>
           );
         case 'audio':
           return (
             <div className="media-container">
               
               <audio controls>
                 <source src="your-audio.mp3" type="audio/mpeg" className="media-audio"/>
               </audio>
               <img className="image" src={note} alt="" />
               
             </div>
           );
         case 'image':
           return (
             <div className="media-container">
               {mediaContent && <img src={mediaContent} alt="Image" />}
             </div>
           );
         case 'list':
           return (
             <div className="list-container">
                 <ul className="list-meetups">
                 <li  className="list-meetups"> <img className="img" src={meetup} alt="" /></li>
                 <li className="list-meetups">Meetups in Vancouver <br/> <br /> December 2024</li>
                 <li className="list-meetups">Cooking Vegeterian Food with Amy</li>
                 <li className="list-meetups">Cook the best Christmas Turkey! with Josh</li>
                 <li className="list-meetups">Workshop: Bake Gluten-Free Chocolate Muffins</li>
                 <li className="list-meetups">On-Line - Dipping Sauce Class 2</li>
                 <li></li>
                 <li></li>
               </ul>
             </div>
           );
         default:
           return (
             <div className="placeholder-container">
               <img className="placeholder-contimg"src={cooking} alt="" />
             </div>
           );
       }
     };
   
     return (
       <div className="content-page">
            <MainNav />
            
            <div className="content-wrapper">
            <div className="content-title">All Content</div>
            <div className="content-title2">Selected Course: Cooking </div>
         <div className="content-list">
           <ul>
             <li onClick={() => handleItemClick('video')}>Play Video</li>
             <li onClick={() => handleItemClick('audio')}>Play Audio</li>
             <li onClick={() => handleItemClick('image')}>Display Image</li>
             <li onClick={() => handleItemClick('list')}>Display Meetups</li>
           </ul>
         </div>
   
         <div className="content-display">
           <div className={`player ${selectedItem ? 'active' : ''}`}>
             {renderContent()}
             {selectedItem && (
               <div className="button-container">
                 <button onClick={clearSelectedItem}>Close</button>
                 <a href="your-link" target="_blank" rel="noopener noreferrer">
                   Open Link
                 </a>
               </div>
             )}
           </div>
         </div>

         </div>

       </div>
     );
   };
   
   export default ContentPage;