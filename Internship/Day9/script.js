// const allParagraphs = document.getElementsByTagName("p");
// console.log(allParagraphs);

// const constParagraphs = document.getElementsByClassName("para");
// console.log(constParagraphs);

// const singleElement = document.getElementById("head");
// console.log(singleElement);

// const elementByQuery = document.querySelector(".para");
// const elementByQuery2 = document.querySelector("#head");

// console.log(elementByQuery);
// console.log(elementByQuery2);

// const elementsBYQueryAll = document.querySelectorAll(".para");
// console.log(elementsBYQueryAll);


// //getter Setter
// //innerText,innerHTML,textContent
// //setters
// //innerText="soeme text";
// // allParagraphs.innerText = "This is changed by js ";
// // const change=allParagraphs.innerHTML = "This is changed by js ";
// // console.log(change);


// //Getter\
// const container=document.getElementById("container");
// container.className="background";
// console.log(container.className);

// const firstElement=document.querySelector("p");
// elementByQuery.classList.add("cl4");
// elementByQuery.classList.remove("cl2");
// elementByQuery.classList.toggle("cl2");

// console.log(firstElement.classList);
// console.log(container.children[1].nextSibling);
// console.log(container.children[1].nextElementSibling);
// console.log(container.children[1].previousElementSibling);


//-------------------------------------------------------

//Creating Elements in js 
// const container=document.getElementById("container");

// const div=document.createElement("div");
// const val="This is dynamic Array"
// div.className="cl1 cl2";
// div.id="dynamic-container";

// div.innerHTML=`<h1>${val}</h1>`;
// console.log(div);

//push element in html
//append(push text && element)
//appendchild(push only element)

// container.appendChild(div)
// container.append(div)
// container.prepend(div);
// container.before(div);
// container.after(div);

// const btn = document.getElementById("btn");
// const btn2 = document.getElementById("btn2");
// const bg=document.getElementById("bg");

// btn.addEventListener("click",()=>{
//     bg.style.backgroundColor="#1e1e1e";
//     bg.style.color="white"
// })
// btn2.addEventListener("click",()=>{
//     bg.style.backgroundColor="white";
//     bg.style.color="#1e1e1e"
// })
// const h3=document.querySelector("h3");
// h3.addEventListener("click",()=>{
//     h3.style.color="red";
//     prompt("Enter your name");
//     console.log("span clicked")
// })

// const SearchhInput = document.getElementById("searchInput");
// const SearchBtn = document.getElementById("searchBtn");

// const fetchData = async () => {
//   const response = await fetch(
//     `https://www.omdbapi.com/?s=${SearchhInput.value}&apikey=9b92318a`
//   );
//   const data = await response.json();
//   console.log(data);
// };
// SearchBtn.addEventListener("click", () => {
//   fetchData();
// });


const form = document.getElementById("search-form");
const appendcard = document.getElementById("card");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    let res = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=9b92318a");
    const movie = res.data;

    // Create a simple card with movie info
    const cardDiv = document.createElement("div");
    cardDiv.className = "movie-card";
    cardDiv.innerHTML = `
      <h3>${movie.Title}</h3>
      <p>Year: ${movie.Year}</p>
      <p>Genre: ${movie.Genre}</p>
      <img src="${movie.Poster}" alt="Movie Poster" width="200">
    `;

    appendcard.innerHTML = ""; // Clear any existing content
    appendcard.appendChild(cardDiv);
  } catch (error) {
    console.error("Error fetching movie data:", error);
    appendcard.innerHTML = "<p>Oops! Couldn’t fetch movie data.</p>";
  }
});