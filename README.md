Project Overview – Node.js Render API Integration

A basic Node.js + Express server application that connects to the Render API to fetch and return a list of services (apps) installed in a Render account.

Server Functionality

Built with Node.js and Express.

Exposes a single GET endpoint at /apps.

When accessed, it returns a list of deployed services on the user's Render account in JSON format.

Render API Integration

Created an API Key in the Render dashboard to authorize requests.

Followed the Render API documentation:

Render Docs

Render API Reference

Used the List Services endpoint from the Services section of the Render API.

Made authorized requests using Bearer authentication with the created API Key.

Setup Instructions

Initialize the project:

npm init -y
npm install express axios

Create the API Key in Render as shown in their documentation.

Replace "YOUR_API_KEY_HERE" with your actual API Key in the code.

Run the server:

node index.js

Access the endpoint at http://localhost:3000/apps to see your deployed services.

