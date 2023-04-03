const API_KEY = "b4cdfba7";

async function fetchMovieData(title) {
  const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
}

function renderMovieData(movieData) {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";

  const posterImg = document.createElement("img");
  posterImg.src = movieData.Poster;
  
  resultDiv.appendChild(posterImg);

  const titleEl = document.createElement("h2");
  titleEl.textContent = movieData.Title;
  resultDiv.appendChild(titleEl);

  const directorEl = document.createElement("p");
  directorEl.textContent = `Director: ${movieData.Director}`;
  resultDiv.appendChild(directorEl);

  const yearEl = document.createElement("p");
  yearEl.textContent = `Year: ${movieData.Year}`;
  resultDiv.appendChild(yearEl);

  const imdbRatingEl = document.createElement("p");
  imdbRatingEl.textContent = `IMDB Rating: ${movieData.imdbRating}`;
  resultDiv.appendChild(imdbRatingEl);
}

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", async () => {
  const titleInput = document.getElementById("title");
  const title = titleInput.value.trim();
  if (title) {
    const movieData = await fetchMovieData(title);
    renderMovieData(movieData);
  }
});
