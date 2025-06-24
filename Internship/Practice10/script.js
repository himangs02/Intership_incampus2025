const container = document.getElementById("container");
const btn = document.getElementById("btn");
function createCard(userData){
    
    userData.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}">
        <h2>user login: ${user.login}</h2>
        <p>userId=>${user.id}</p>
        `;
        localStorage.setItem("userData", JSON.stringify(userData));
        container.appendChild(card);
    });}
    
    btn.addEventListener("click", async () => {
        // container.innerHTML = "";
        const response = await axios.get("https://api.github.com/users");
        const userData = response.data;
        if (userData) {
        localStorage.setItem("userData", JSON.stringify(userData));
        createCard(userData);
    } else {
        container.innerHTML = "<p>No results found.</p>";
        localStorage.removeItem("userData");
    }
    });

    const saved =localStorage.getItem("userData");
    if (saved) {
    const userData = JSON.parse(saved);
    createCard(userData);
    }