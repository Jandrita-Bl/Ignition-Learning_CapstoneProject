# Project Title:
Ignition Learning


## Overview
What is your app? Brief description in a couple of sentences:

Ignition Learning is a streamlined learning platform focusing on diverse learning styles. In its initial phase, it will feature a Homepage, a Learning Styles Assessment Page, a Content Library, and a Community Forum, catering primarily to Visual, Auditory, Kinesthetic, and Reading/Writing learning styles.

Main Four Types of Learning in Education:
Visual learning style
Auditory learning style
Kinesthetic learning style
Reading/Writing

Other Types of Learning Styles
Logical/analytical learners
Social/linguistic learners
Solitary learners
Nature learners


### Problem

Why is your app needed? Background information around any pain points or other reasons: 

In today's diverse educational landscape, there's a significant gap in catering to different learning styles through a single platform. Ignition Learning aims to bridge this gap by offering tailored content and interactive features that align with each user's preferred learning style. This approach addresses the challenge of one-size-fits-all educational resources and aims to enhance the learning experience for a broader audience.



### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account:

The platform targets students and self-learners who are exploring online resources tailored to their learning styles. The initial version will focus on ease of use and accessibility, with a user-friendly interface suitable for a wide range of ages and technical skills.



### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented:

Learning Styles Assessment: A simple quiz to help users identify their learning style.

Content Library: Curated educational content categorized by learning style.

Community Forum: A space for learners to share insights and discuss topics.



## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations: 


Frontend: 
HTML, 
CSS, 
SASS, 
JavaScript, 
React.

Backend: 
Node.js for server-side functions.

APIs: 
Basic APIs for handling user interactions and content delivery.



### APIs

List any external sources of data that will be used in your app:

 The project will utilize simple APIs for user interactions with the Learning Styles Assessment, Content Library, and Community Forum. APIs will be created for this project and stored in Json files within the server.

### Sitemap

1. Home Page
2. Learning Styles Assessment Page
3. Content Library
4. Content Visualizer
5. Community Forum


### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches:

![Ignition Learning Logo](/ignitionlearning-capstone/src/assets/Ignite%20Mockups/mockup-1.png "Welcome to Ignition Learning"

![Ignition Landing Page 1](/ignitionlearning-capstone/src/assets/Ignite%20Mockups/mockup-2.png "Landing / Home Page"

![Ignition Assessment Page 2](/ignitionlearning-capstone/src/assets/Ignite%20Mockups/mockup-3.png "Learning Style Assessment Page"

![Ignition Content Library Page 3](/ignitionlearning-capstone/src/assets/Ignite%20Mockups/mockup-4.png "Content Library Page"

![Ignition Content Library Page 4](/ignitionlearning-capstone/src/assets/Ignite%20Mockups/mockup-5.png "Content Visualizer Page"

![Ignition Community Forum 5](/ignitionlearning-capstone/src/assets/Ignite%20Mockups/mockup-6.png "Community Forum Page"

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out… 

Basic user data for forum interactions and assessment results, along with a data of educational content categorized by learning style.

User has up to 4 Main Learning Styles, and the Available Learning Content has different Media Types that correspond to Suit the Best Learning Style Delivery.


### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses: 

/assessment: GET and POST for learning style quiz.
/content: GET for accessing the content library.
/forum: GET and POST for community discussions.



## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build: 

Week 1: Design and frontend development of the Home Page and Learning Styles Assessment Page.

Week 2: Backend setup, API development for Content Library and Community Forum, and basic integration testing.


## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing:


1. User Authentication: For personalized experiences.( Authentication/authorization: Only with mock-up for 1 user and 1 password.)
2. Personalized Dashboard: Customized user interface based on assessment results.
3. User Profile: For individual user settings and preferences.


