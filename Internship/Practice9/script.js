const form = document.getElementById("form");
const input = document.getElementById("input");
const container = document.getElementById("card-container");

// ✅ Global createCard function
function createCard(movies) {
    container.innerHTML = ""; // Clear previous cards
    movies.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
        `;
        container.appendChild(card);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await axios.get(`https://www.omdbapi.com/?s=${input.value}&apikey=9b92318a`);
    const movies = response.data.Search;

    if (movies) {
        localStorage.setItem("movies", JSON.stringify(movies));
        createCard(movies);
    } else {
        container.innerHTML = "<p>No results found.</p>";
        localStorage.removeItem("movies");
    }
});

// ✅ Immediately load from localStorage (only works if script is placed at the end of <body>)
const saved = localStorage.getItem("movies");
if (saved) {
    const movies = JSON.parse(saved);
    createCard(movies); // ✅ Use global function
}
