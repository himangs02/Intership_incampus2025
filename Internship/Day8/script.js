// arr=[{
//     name:"Himangshu",
//     age:18,
//     gender:"male"
// },{
//     name:"Raj",
//     age:18,
//     gender:"male"
// },{
//     name:"budhhi",
//     age:119,
//     gender:"female"
// }];


// arr1=arr.filter((person)=>{
//     return (person.age>18);
// })

// console.log(arr1);
//------------------------------------------------------------



// let arr =[1,2,3,4,5,6,7];

// let sum = arr.reduce((accum,id)=>{
//     return id+accum;
// },0)
// let mul = arr.reduce((accum,id)=>{
//     return id*accum;
// },1)

// console.log(sum);
// console.log(mul);

//-------------------------------------------------------------------
// let personSalary=[{
//     month:"January",
//     salary:10000,
// },
// {
//     month:"February",
//     salary:20000,
// },
// {
//     month:"March",
//     salary:30000,
// }];

// let grossSalary=personSalary.reduce((accum,id)=>{
//     return accum+id.salary;
// },0);
// console.log(grossSalary);
// //------------------------------------------------------------------
// let find =personSalary.find((id)=>{
//     return id.month=="January";    
// })
// console.log(find);
// //------------------------------------------------------------------

// personSalary.forEach((element)=>{
//     console.log(element);


// })
//------------------------------------------------------------------

//Asynchronous javascript

// const id=setTimeout(()=>{
//     console.log("Hello");
// },2000);

// setTimeout(()=>{
//     clearTimeout(id);
// },2000*2);

//------------------------------------------------------------------------
//PROMISES
// const myPromsie=new Promise((resolve,rej)=>{
//     let num =Math.floor(Math.random()*10);
//     if(num<5){
//         resolve(num);
//     }
//     else{
//         rej("Number is greater than 5");
//     }
// })
// console.log(myPromsie);
//.then and cath also taught

//Async and Await

// const arrowFunc=async()=>{
//     console.log("async arrow function");
//     const res=await fetch("https://official-joke-api.appspot.com/random_joke");
//     result =await res.json();
//     console.log(result.setup.concat(result.punchline));
//     console.log("End of async arrow function");
// };
// arrowFunc();
// const arrowFunc=async()=>{
//     let res=await axios.get("https://randomuser.me/api/");
//     console.log(res.info);
// }
// arrowFunc();

// let menu = ["roti","sabji","chawal","dal","rice","curd","chicken","panner","egg"];
// let Nonveg = menu.filter((item)=>{
//     return item.includes("chicken")||item.includes("egg");
// })
// let Veg= menu.filter((item)=>{
//     return !(item.includes("chicken")&&item.includes("egg"));
// })
// console.log(Nonveg);
// console.log(Veg)

let products = [
  {
    name: "product 1 name",
    category: "wearable",
    color: ["red", "white"]
  },
  {
    name: "product 2 name",
    category: "playable",
    color: ["black", "silver"]
  },
  {
    name: "product 3 name",
    category: "wearable",
    color: ["blue", "white"]
  },
  {
    name: "product 4 name",
    category: "playable",
    color: ["white", "gray"]
  },
  {
    name: "product 5 name",
    category: "playable",
    color: ["gold", "black"]
  },
  {
    name: "product 6 name",
    category: "wearable",
    color: ["orange", "black"]
  },
  {
    name: "product 7 name",
    category: "wearable",
    color: ["purple", "pink"]
  }
];

const pro=products.filter((item)=>{
    return (item.category=="wearable"&&item.color.includes("white"));
})
console.log(pro);
