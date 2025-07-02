const form = document.getElementById("form");
const input = document.getElementById("input");
const container = document.getElementById("container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  container.innerHTML = "<p class='text-white text-xl'>Loading...</p>";

  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=461dfe4efa9243baa221577fc9e321db`);
    const recipes = response.data.results;

    if (recipes.length === 0) {
      container.innerHTML = "<p class='text-white text-xl'>No recipes found. Try something else!</p>";
      return;
    }

    container.innerHTML = "";

    // Fetch detailed info for each recipe
    for (const recipe of recipes) {
      const detailsRes = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
        params: {
          apiKey: "461dfe4efa9243baa221577fc9e321db"
        }
      });

      const details = detailsRes.data;
      const ingredientsList = details.extendedIngredients.map((ing) => `<li>${ing.original}</li>`).join("");

      const card = document.createElement("div");
      card.className = "bg-white rounded-xl shadow-md p-6 w-full max-w-md";

      card.innerHTML = `
        <h2 class="text-2xl font-bold mb-2">${details.title}</h2>
        <img src="${details.image}" alt="${details.title}" class="rounded-xl w-full h-56 object-cover mb-4" />
        <p class="text-sm text-gray-600 mb-1"><strong>Cook Time:</strong> ${details.readyInMinutes} min</p>
        <p class="text-sm text-gray-600 mb-1"><strong>Servings:</strong> ${details.servings}</p>
        <p class="text-sm text-gray-600 mb-1"><strong>Health Score:</strong> ${details.healthScore}/100</p>
        ${details.dairyFree ? '<p class="text-sm text-green-600 font-semibold mb-1">🧈 Dairy Free</p>' : ''}
        <h3 class="text-md font-semibold mt-3 mb-1">🧾 Ingredients:</h3>
        <ul class="list-disc list-inside text-sm text-gray-700 mb-3">${ingredientsList}</ul>
        <a href="${details.sourceUrl}" target="_blank" class="text-blue-500 underline font-semibold">🔗 View Full Recipe →</a>
      `;

      container.appendChild(card);
    }

  } catch (error) {
    console.error("Error fetching recipes:", error);
    container.innerHTML = "<p class='text-red-200 text-xl'>Failed to fetch recipes. Try again later.</p>";
  }
});
