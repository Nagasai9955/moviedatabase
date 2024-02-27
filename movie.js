// scripts.js
const moviesContainer = document.getElementById('movies');
const addMovieForm = document.getElementById('addMovieForm');

const movies = [];

function renderMovies() {
  moviesContainer.innerHTML = '';

  movies.forEach((movie, index) => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie';
    movieElement.innerHTML = `<strong>${movie.title}</strong> (${movie.year}) 
                              <button onclick="removeMovie(${index})">Remove</button>`;
    moviesContainer.appendChild(movieElement);
  });
}

function openForm() {
  addMovieForm.style.display = 'block';
}

function closeForm() {
  addMovieForm.style.display = 'none';
}

function addMovie() {
  const title = document.querySelector('input[name="title"]').value;
  const year = document.querySelector('input[name="year"]').value;

  if (title && year) {
    movies.push({ title, year });
    renderMovies();
    closeForm();
  }
}

function removeMovie(index) {
  movies.splice(index, 1);
  renderMovies();
}
