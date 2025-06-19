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


//--------------------------------------------------------------------------------
// arror function

let score =0;
let Timer=60;


let Random=()=>{
    console.log("#"+Math.floor(Math.random()*16736278).toString(16));
    return "#"+Math.floor(Math.random()*16736278).toString(16);
    
}


let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let color=Random();
    btn.style.backgroundColor=color;
    
});


let scr=document.getElementById("Score")
btn.addEventListener("click",()=>{
    scr.innerText=Math.floor(Math.random()*100);
    scr.style.backgroundColor=Random();
    

})

let bj=document.getElementById("bj");
btn.addEventListener("click",()=>{
    bj.style.backgroundColor=Random();
})

let timer=document.getElementById("timer");
setInterval(()=>{
    if(Timer>0){
    timer.innerText=Timer--;
    }else if(Timer==0){
        timer.innerText="Time is Over";
        timer.style.color="red";
        Timer=60;
    }
},1000);


///--------------------------------------------------------------------------
// //Callback function
// //higher order function

// function cb(a,b){
//     console.log("callback function");
//     return a+b;
// }


// function parent(a,b,fun){
//     console.log("higher order function");
//     console.log(a+b);
//     let sum = a+b;
//     let result = fun(sum,20);
//     return result;


// }
// let ans=parent(10,20,cb);

//---------------------------------------------------------------------------------

// function square(num){
//     return num*num;
// }

// arr=[];
// for(let i=1;i<=10;i++){
//     arr.push(i);
// }
// let sqr=arr.map(square);
// console.log(sqr);