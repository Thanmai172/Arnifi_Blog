# MERN Blog Application

This is a full-stack MERN (MongoDB, Express, React, Node.js) blog application that allows users to sign up, log in, create, edit, and manage blog posts. It includes authentication, protected routes, and a user-friendly UI.

---

## Project Structure

mern-blog/
├── backend/ # Backend Node.js & Express server
│ ├── config/ # Database configuration
│ ├── controllers/ # Route controller logic (auth, blog)
│ ├── middleware/ # Middleware (auth verification)
│ ├── models/ # Mongoose schemas (User, Blog)
│ ├── routes/ # API routes (authRoutes, blogRoutes)
│ ├── .env # Environment variables (DB connection, JWT secret)
│ ├── server.js # Express server entry point
│ └── package.json # Backend dependencies
├── frontend/ # React frontend
│ ├── public/ # Public static files
│ ├── src/
│ │ ├── components/ # Reusable React components (Navbar, BlogCard)
│ │ ├── pages/ # React pages (Login, Signup, Home, CreateBlog, EditBlog, MyBlogs)
│ │ ├── App.js # Main React app with routing
│ │ ├── api.js # Axios instance for API calls
│ │ ├── index.js # React entry point
│ │ └── index.css # Global styles
│ ├── .env # Environment variables (API URLs)
│ └── package.json # Frontend dependencies


---

## Features

- **User Authentication:** Signup and Login using JWT-based authentication.
- **Protected Routes:** Secure pages to create, edit, and view personal blogs.
- **Create and Edit Blogs:** Authenticated users can add and update blog posts.
- **View Blogs:** Browse all blogs or filter to see your own posts.
- **Responsive UI:** Simple and intuitive user interface with navigation.
- **State Management:** Uses React state and localStorage for session persistence.

---

## Technology Stack

- **Frontend:** React, React Router DOM, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **Styling:** CSS (custom styles)
- **Database:** MongoDB (NoSQL)

---

## Installation and Setup

### Backend

1. Go to the backend directory:
   cd backend
   npm install
   npm start

### Frontend
Go to the frontend directory:

cd frontend
### Install dependencies:

npm install
Create a .env file in the frontend folder for frontend-specific environment variables (e.g., REACT_APP_API_URL).

Start the frontend development server:
npm start

### Usage
Access the app via http://localhost:3000.
Register a new account or log in.
Create, edit, and manage blog posts.
View all blogs or your own blogs.


### Future Improvements
Add commenting system on blog posts.
User profiles with avatars.
Rich text editor for creating blog content.
Search and pagination features.
Deployment on cloud platforms like Heroku, Vercel, or AWS.



