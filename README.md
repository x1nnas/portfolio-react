Portfolio React + Express Backend
A full-stack portfolio website with a blog feature, built using React (Vite) for the frontend and Express with PostgreSQL for the backend. The application supports viewing blog posts, a user system, and features a responsive, modern UI styled with Tailwind CSS, including subtle gold gradient and pattern overlays.
Features

React Frontend: Built with Vite for fast development and optimized builds.
Express Backend: Serves REST API endpoints for blog posts and user management.
PostgreSQL Database: Managed via the pg package for robust data storage.
Tailwind CSS: Provides modern, responsive styling with gold gradient and pattern overlays.
Blog Functionality: Supports listing blog posts and viewing individual posts.
Proxy Setup: Enables seamless frontend-backend communication during development.
Concurrent Development: Uses concurrently to run frontend and backend simultaneously.
Production-Ready: Express serves the React build for deployment.

Project Structure
/frontend        # React app (Vite)
/server          # Express backend
  /routes        # API routes
  /db            # Database connection and queries
.env             # Environment variables for DB connection

Getting Started
Prerequisites

Node.js: Version 18 or higher (recommended).
PostgreSQL: Running locally or remotely.

Clone the Repository
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo

Development

Set Up Environment Variables
Create a .env file in the /server folder with the following:
DB_USER=bloguser
DB_PASS=yourpassword
DB_NAME=blogdb
DB_HOST=localhost
DB_PORT=5432


Install Dependencies
For the backend:
cd server
npm install

For the frontend:
cd ../frontend
npm install


Run Backend and Frontend Concurrently
From the project root folder, run:
npx concurrently "npm run dev --prefix server" "npm run dev --prefix frontend"

This starts:

Backend on http://localhost:3000
Frontend on http://localhost:3001



Building for Production

Build Frontend Production Assets
From the /frontend folder:
npm run build

This generates static files in frontend/dist.

Serve Frontend with Express Backend
The backend is configured to serve static files from frontend/dist in production mode.

Run Backend in Production Mode
From the /server folder:
npm run prod

This sets NODE_ENV=production and starts the backend server.


Environment Variables Reference
Create a .env.example file in the /server folder with the following content for reference:
DB_USER=your_db_username
DB_PASS=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_PORT=5432

Scripts Summary
Frontend (frontend/package.json)

dev: Runs the development server with Vite on port 3001.
build: Builds production assets in the dist folder.
preview: Previews the production build locally.

Backend (server/package.json)

dev: Runs the backend with nodemon on port 3000.
start: Starts the backend server normally.
prod: Starts the backend in production mode (NODE_ENV=production).

Technologies Used

React 19 with Vite
Express 5
PostgreSQL
Tailwind CSS
Concurrently
Node.js & npm
