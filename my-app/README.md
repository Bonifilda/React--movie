# MovieFlix - React Movie Explorer

A single-page application (SPA) built with React that allows users to explore movies, view details, search, filter by category, and save favorites.

## Features

- **Movie Browsing**: Browse a collection of movies fetched from the TVMaze API
- **Movie Details**: View detailed information about each movie
- **Search Functionality**: Search movies by title
- **Category Filtering**: Filter movies by genre
- **Favorites Management**: Add/remove movies to favorites (stored in localStorage)
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- React 
- React Router for navigation
- Custom React Hooks
- Axios for API requests
- CSS for styling
- LocalStorage for favorites persistence

## Installation

1. Clone the repository
```
git clone <repository-url>
```

2. Navigate to the project directory
```
cd my-app
```

3. Install dependencies
```
npm install
```

4. Start the development server
```
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
/src
  /components
    Navbar.jsx
    MovieCard.jsx
    SearchBar.jsx
    CategoryFilter.jsx
  /pages
    Home.jsx
    MovieDetails.jsx
    Favorites.jsx
  /hooks
    useFetchMovies.js
    useFavorites.js
  /utils
    api.js
  App.jsx
  main.jsx
```

## API

This project uses the [TVMaze API](https://api.tvmaze.com/shows) to fetch movie data.

## Live Demo

[View Live Demo](#) <!-- Add your live demo link here when deployed -->
