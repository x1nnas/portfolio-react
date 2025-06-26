# Portfolio React + Express Backend

A full-stack portfolio website with a blog feature, built using **React** (Vite) for the frontend and **Express** with **PostgreSQL** for the backend. The application supports blog post viewing, user management, and a responsive, modern UI styled with Tailwind CSS, featuring subtle gold gradients and pattern overlays.

## Features

- **React Frontend**: Powered by Vite for fast development and optimized builds.
- **Express Backend**: Provides REST API endpoints for blog posts and users.
- **PostgreSQL Database**: Managed via the `pg` package for reliable data storage.
- **Tailwind CSS**: Delivers modern, responsive styling with gold gradient and pattern overlays.
- **Blog Functionality**: Supports listing and viewing individual blog posts.
- **Proxy Setup**: Enables seamless frontend-backend communication during development.
- **Concurrent Development**: Uses `concurrently` to run frontend and backend simultaneously.
- **Production-Ready**: Express serves the React build for deployment.

## Project Structure

```
frontend/        # React app (Vite)
server/          # Express backend
  routes/        # API routes
  db/            # Database connection and queries
.env             # Environment variables for DB connection
```

## Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher (recommended).
- **PostgreSQL**: Running locally or remotely.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/yourrepo.git
   cd yourrepo
   ```

2. **Set Up Environment Variables**

   Create a `.env` file in the `server/` directory with the following:

   ```ini
   DB_USER=bloguser
   DB_PASS=yourpassword
   DB_NAME=blogdb
   DB_HOST=localhost
   DB_PORT=5432
   ```

3. **Install Dependencies**

   For the backend:
   ```bash
   cd server
   npm install
   ```

   For the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Run Development Servers**

   From the project root directory, run:
   ```bash
   npx concurrently "npm run dev --prefix server" "npm run dev --prefix frontend"
   ```

   This starts:
   - Backend on `http://localhost:3000`
   - Frontend on `http://localhost:3001`

### Building for Production

1. **Build Frontend Assets**

   From the `frontend/` directory:
   ```bash
   npm run build
   ```

   This generates static files in `frontend/dist`.

2. **Serve with Express**

   The backend is configured to serve static files from `frontend/dist` in production mode.

3. **Run Backend in Production**

   From the `server/` directory:
   ```bash
   npm run prod
   ```

   This sets `NODE_ENV=production` and starts the backend server.

### Environment Variables Reference

Create a `.env.example` file in the `server/` directory for reference:

```ini
DB_USER=your_db_username
DB_PASS=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_PORT=5432
```

## Scripts

### Frontend (`frontend/package.json`)

- `npm run dev`: Starts the Vite development server on port 3001.
- `npm run build`: Generates production assets in the `dist` directory.
- `npm run preview`: Previews the production build locally.

### Backend (`server/package.json`)

- `npm run dev`: Starts the backend with `nodemon` on port 3000.
- `npm run start`: Runs the backend server normally.
- `npm run prod`: Runs the backend in production mode (`NODE_ENV=production`).

## Technologies

- **React 19** with **Vite**
- **Express 5**
- **PostgreSQL**
- **Tailwind CSS**
- **Concurrently**
- **Node.js** & **npm**
