# MUI Travel Blog - Fullstack Application

A fullstack travel blog built with React, Material UI, Redux, Express, and MongoDB. This project allows users to browse, add, edit, and delete posts while offering secure user authentication.

## Features

- **User Authentication**: Secure login and registration with JWT (JSON Web Tokens) for authentication.
- **CRUD Operations**: Users can create, read, update, and delete their posts.
- **Responsive Design**: The application is fully responsive, adapting seamlessly to different screen sizes using Material UI components.
- **Interactive UI**: Smooth navigation through React Router with Material UI for modern, user-friendly design.
- **State Management**: Redux is used for global state management, ensuring consistent state across the app.
- **Database Integration**: MongoDB is used to store travel destinations and user data.

## Technologies Used

### Frontend

- **React**: The main JavaScript library used to build the user interface.
- **Material UI**: A React UI framework providing modern, customizable components.
- **React Router**: For navigation between different pages of the blog.
- **Redux**: For managing global state (including user authentication and travel destinations).

### Backend

- **Node.js**: JavaScript runtime for building the backend API.
- **Express.js**: A fast, unopinionated web framework for building the API.
- **MongoDB**: NoSQL database for storing travel destinations and user data.

## Installation

### Backend

1. Clone the repository:

```bash
git clone https://github.com/nadiia-dev/mui-travel-blog.git
```

2. Navigate to the backend directory:

```bash
cd mui-travel-blog/backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file and fill it with environment variables according to .env.example file.

5. Run the backend server:

```bash
npm run dev
```

The backend will be available at http://localhost:5000.

### Frontend

1. Navigate to the frontend directory:

```bash
cd mui-travel-blog/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file and fill it with environment variables according to .env.example file.

4. Run the frontend development server:

```bash
npm run dev
```

The frontend will be available at http://localhost:5173.

# Deployment

Backend server is deployed via [Render](https://render.com/).

Frontend is deployed via [Vercel](https://vercel.com/)
