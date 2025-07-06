# Movie Recommendation System

A full-stack Movie Recommendation System built with **Node.js**, **Express**, **MongoDB** (backend), and **React** (frontend).  
This project supports user authentication, movie management (admin), user profiles, watchlists, and a clean API documented with Swagger.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication:** Register, login, JWT-based auth.
- **User Profiles:** View and update profile, preferences, and watchlist.
- **Movie Management:** Admins can add, update, and delete movies.
- **Movie Listing:** All users can browse movies.
- **Watchlist:** Users can manage their personal watchlist.
- **Responsive Frontend:** Built with React and styled for usability.

---

## Tech Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- **Frontend:** React, Axios, React Router

---

## Project Structure

```
movie-recommendation-system/
│
├── movie-recommendation-system/
│   ├── app.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── .env
│   └── package.json
│
└── movie-recommendation-frontend/
    ├── src/
    │   ├── components/
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [npm](https://www.npmjs.com/)

---

## Backend Setup

1. **Navigate to the backend folder:**
   ```sh
   cd movie-recommendation-system/movie-recommendation-system
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the backend root:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Start the backend server:**
   ```sh
   npm start
   ```
   The server will run at [http://localhost:5000](http://localhost:5000).

---

## Frontend Setup

1. **Navigate to the frontend folder:**
   ```sh
   cd movie-recommendation-system/movie-recommendation-frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the frontend development server:**
   ```sh
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

---

## Usage

### 1. **Register & Login**
- Register a new user or login at [http://localhost:3000/register](http://localhost:3000/register) or [http://localhost:3000/login](http://localhost:3000/login).

### 2. **Browse Movies**
- Visit the home page to see the list of movies.

### 3. **Profile & Watchlist**
- Access your profile and manage your watchlist.

### 4. **Admin Actions**
- If your user is an admin, you can add, update, or delete movies via the API or by extending the frontend.

---

## Deployment

- **Backend:** Deploy to services like Heroku, Render, or your own server.
- **Frontend:** Deploy to Vercel, Netlify, or GitHub Pages (for static builds).
- **Environment Variables:** Set your production MongoDB URI and JWT secret in your deployment environment.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or support, open an issue or contact the repository maintainer.