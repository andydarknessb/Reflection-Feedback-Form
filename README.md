Description

This app is a reflection/feedback form. The app collects feedback over four views and allows users to submit their feedback. Feedback is stored in the database and users can view a submission success page after submitting.

Prerequisites
Node.js

Installation

To set up the app, follow these steps:

Clone the repository to your local machine.
Create a database with the name provided.
Use the data.sql file to create the necessary tables and populate the data.
Install the required dependencies using npm install.
Start the server using npm run server.
Start the client app using npm run client.

Usage

The app is a multi-part form that allows users to leave feedback for the day. Users must complete each step of the form before proceeding to the next step. The four views are:

How are you feeling today?
How well are you understanding the content?
How well are you being supported?
Any comments you want to leave?
Each step of the form should be on its own route. The user should be able to navigate between steps using a next button.

Input validation is included in each step of the form. Users must provide a score to advance to the next step, except for the comments step, which is optional.

After the user completes all steps of the form, they will be taken to the review step. The review step displays the feedback collected and allows the user to submit the feedback. Once the user submits the feedback, it is saved in the database, and the user sees a submission success page.

Built With
The app is built using React, Redux, Material UI, and Node.js.

Acknowledgement
Thanks to Prime Digital Academy for providing the inspiration for this app.

Support If you have suggestions or issues, please email me at cory.anderson6@yahoo.com