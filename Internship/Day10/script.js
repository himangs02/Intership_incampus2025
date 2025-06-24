localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));

const obj = {
  name: "John",
  arr:[1,2,3,"4"]
};

localStorage.setItem("obj", JSON.stringify(obj));

console.log("Storage-",localStorage.getItem("obj"));
let storeobj = localStorage.getItem("obj");
let storedObj = JSON.parse(localStorage.getItem("obj"));
console.log(storedObj);