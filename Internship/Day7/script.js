// let a = 10;
// let b = 5;

// if(a==b){
//     console.log(true);

// }else{
//     console.log(false);
// }// == only check value  

// if(a==b && b==a){
//     console.log(true);
// }else{
//     console.log(false);
// }

// if(a===b  ||b==a){
//     console.log(true);
// }else{
//     console.log(false);
// }

// if((a===b||b==a)||(a===b&&b==a)){
//     console.log(false);
// }else{
//     console.log(true);
// }

//ternary operartor
/*
let c = a>b?"a is greater than b ":"b is greater than a ";
console.log(c);
*/

//loops
//FOR OF LOOP
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0 ;
// for (let element of arr) {
//     sum +=element;
    
    
// }
// console.log(sum);'


//FOR IN LOOP 
// let person = {
//     name : "Himangshu",
//     age : 18,
//     gender : "male"
// }
// for (let key in person) {
//     console.log(key,person[key]);

// }


// let arr = [1,2,3,4,5,6,7,8,9,10];

// for (let key in arr){
//     console.log(key,"=>",arr[key]);
// }

//FUNCTION

// functions it is a set of instruction that can be used repeatedly

// let a = 10;
// let b = 5;
// function add(){
//     return a+b;
// }

// console.log(add());



// arror function

let score =0;
let scr=document.getElementById("Score")

let Random=()=>{
        console.log("#"+Math.floor(Math.random()*16736278).toString(16));
        return "#"+Math.floor(Math.random()*16736278).toString(16);

    }


let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let color=Random();
    btn.style.backgroundColor=color;
    
});


btn.addEventListener("click",()=>{
    scr.innerText=Math.floor(Math.random()*100);
    scr.style.backgroundColor=Random();
    

})

