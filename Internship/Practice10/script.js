const { response } = require("express");
const { get } = require("http");

const container = document.getElementById("container");
const btn = document.getElementById("btn");


function createCard(userData) {
    container.innerHTML = "";
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card-body");
    card.classList.add("text-center");
    card.classList.add("mt-5");
    card.classList.add("shadow");
    card.classList.add("p-3");
    card.classList.add("bg-[#1e1e1e]");
    card.classList.add("text-white");
    card.classList.add("font-serif");
    card.classList.add("flex");
    card.classList.add("flex-col");
    card.classList.add("text-lg");
    card.classList.add("font-bold");

    card.classList.add("rounded");
    card.innerHTML = `
        <img src="${userData.picture.large}" alt="${userData.name.first}">
        <h2>${userData.name.first} ${userData.name.last}</h2>
        <p>ID: ${userData.login.uuid}</p>
        <p>Email: ${userData.email}</p>
    `;
    container.appendChild(card);
}

btn.addEventListener("click", async () => {
    const response = await axios.get("https://randomuser.me/api/");
    const userData = response.data.results[0];  // single user object
        localStorage.setItem("userData", JSON.stringify(userData));
        createCard(userData);
});

const saved = localStorage.getItem("userData");
if (saved) {
    const userData = JSON.parse(saved);
    createCard(userData);
}

const getQR = async (url, container) => {
  try {
    const res = await axios.get(`https://api.api-ninjas.com/v1/qrcode?format=png&data=${encodeURIComponent(url)}`, {
      headers: { "X-Api-Key": "QfTNVKYOsxo+rItExjnynA==UZgxCK9yVmqkwdTh" },
      responseType: "arraybuffer"
    });

    const base64 = btoa(
      new Uint8Array(res.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    const img = document.createElement("img");
    img.src = `data:image/png;base64,${base64}`;
    img.classList.add("w-24", "h-24");

    container.appendChild(img);
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
};





