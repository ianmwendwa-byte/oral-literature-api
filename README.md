Oral Literature REST API
Overview
The Oral Literature REST API is a Node.js and Express.js-based RESTful API designed for managing oral literature content for a website dedicated to preserving cultural narratives. It supports CRUD (Create, Read, Update, Delete) operations for various types of oral literature, such as stories, poems, proverbs, and songs, enabling users to store, retrieve, and manage cultural content efficiently.
Features

CRUD Operations: Create, read, update, and delete oral literature entries (e.g., stories, poems, proverbs).
Authentication: Optional JWT-based authentication for protected routes (e.g., for admin or contributor roles).
Search and Filter: Query literature by category, language, region, or keyword.
RESTful Design: Well-structured endpoints following REST principles for easy integration with frontends.
Database Integration: Supports a database (e.g., MongoDB, PostgreSQL) for persistent storage of literature entries.

Prerequisites

Node.js (v16 or higher)
npm (v8 or higher)
Database (e.g., MongoDB, PostgreSQL, or MySQL, depending on implementation)
Environment Variables: Configure .env file for sensitive data (e.g., database URI, JWT secret)

Installation

Clone the repository:git clone <repository-url>
cd oral-literature-api


Install dependencies:npm install


Create a .env file in the root directory and configure the following:PORT=3000
DATABASE_URL=<your-database-connection-string>
JWT_SECRET=<your-jwt-secret> # Optional, for authenticated routes


Start the server:npm start

The API will be available at http://localhost:3000.

Project Structure
oral-literature-api/
├── config/              # Configuration files (e.g., database connection)
├── controllers/         # Request handlers for API endpoints
├── models/              # Database models (e.g., Story, Poem, Proverb)
├── routes/              # API route definitions
├── middleware/          # Authentication and validation middleware
├── utils/               # Utility functions (e.g., search, validation)
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

API Endpoints
Below is a summary of key endpoints (replace /api with your base route if different):
Authentication (Optional)

POST /api/auth/register - Register a new user (e.g., admin or contributor).
POST /api/auth/login - Login and receive a JWT token.
GET /api/auth/me - Get authenticated user details (requires token).

Literature Entries

GET /api/literature - List all literature entries (supports query parameters for filtering).
POST /api/literature - Create a new literature entry (requires authentication).
GET /api/literature/:id - Get a specific literature entry by ID.
PUT /api/literature/:id - Update a literature entry (requires authentication).
DELETE /api/literature/:id - Delete a literature entry (requires authentication).

Example Query Parameters for Filtering

GET /api/literature?category=proverb&language=Swahili - Filter by category and language.
GET /api/literature?search=wisdom - Search entries containing the keyword "wisdom".

Example Request
Create a Literature Entry
curl -X POST http://localhost:3000/api/literature \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <your-jwt-token>" \
-d '{
  "title": "The Wise Tortoise",
  "category": "story",
  "language": "English",
  "region": "East Africa",
  "content": "Once upon a time, a tortoise outsmarted a hare..."
}'

Response
{
  "id": "12345",
  "title": "The Wise Tortoise",
  "category": "story",
  "language": "English",
  "region": "East Africa",
  "content": "Once upon a time, a tortoise outsmarted a hare...",
  "createdAt": "2025-07-18T13:46:00Z"
}

Usage

Public Users: Access public endpoints to retrieve and browse oral literature entries (e.g., GET /api/literature).
Authenticated Users (Admins/Contributors):
Log in to create, update, or delete literature entries.
Use tools like Postman or cURL to test authenticated endpoints with a JWT token.


Frontend Integration: Connect the API to a frontend (e.g., React, Vue) to display and manage literature content.

Running Tests
To run tests (if implemented):
npm test

Contributing

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m "Add feature").
Push to the branch (git push origin feature-branch).
Create a Pull Request.

License
This project is licensed under the MIT License.
Contact
For issues or inquiries, please contact the project maintainer at ianmwendwa5@gmail.com.
