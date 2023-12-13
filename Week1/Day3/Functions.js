// //Function Decalaration

// function Add(a,b){
//     console.log(`${a} + ${b} = ${a+b}`);
// }
// Add(10,20)
// function Sub(a,b){
//     console.log(`${a} - ${b} = ${a-b}`);
// }
// Sub(10,20)

// //Function Expression

// let Add = function(a,b){
//     console.log(`${a} + ${b} = ${a+b}`);
// }
// Add(20,30)
// let Sub = function(a,b){
//     console.log(`${a} - ${b} = ${a-b}`);
// }
// Sub(20,10)

// //Arrow Function
// let Add = (a,b)=>{
//     console.log(`${a} + ${b} = `,a+b);
// }
// let sub = (a,b)=>{
//     console.log(`${a} - ${b} = `,a-b);
// }
// let calculator = ()=>{
//     let num1 = parseInt(prompt("Enter the num1 value"))
//     let num2 = parseInt(prompt("Enter the num2 value"))
//     let ope = prompt("Enter the Operation to perform")
//     switch(ope)
//     {
//         case "Add":{
//                     Add(num1,num2)
//                     break;
//                 }
//         case "sub":{
//                     sub(num1,num2)
//                     break;
//                 }
//         default: {
//             console.log(" Enter the valid Operation")
//             break
//         }

                
//     }
// }
// calculator()


// //Rest Operater

// function Details(...D){
//     for(let i of D){
//         console.log(i);
//     }
// }
// Details("Vijay",9063055729,"vijaysuryaganapa@gmail.com","Id-435")

// Spreed Operater

// let D = ["Vijay",9063055729,"vijaysuryaganapa@gmail.com","Id-435"]
// let fun = (name,ph,email,id)=>{
//     console.log(name,ph,email,id);
// }
// fun(...D)


// //Hoisting 

// console.log(val);
// console.log(Data());
// function Data(){
//     return "Vijay"
// }
// var val = Data()
// console.log(val);

// //Array Implementation and Manipulation

//let arr = [22,76,9,23,54,77]
// console.log(arr);
//let r = arr.push(33)
// console.log(arr,r);
//let p = arr.pop()
// console.log(arr,p);
//arr[9] = 11
// console.log(arr);
// // Converting array to string
// console.log(arr.toString());
// console.log("Array length - ",arr.length);
// console.log(arr.sort(function(a,b){return a-b}));
// for(let ele of arr)
// {
//     console.log(ele);
// }
// console.log(arr);
// console.log(arr.splice(2,2));
// console.log(arr);
// arr.splice(2,2,34,45)
// console.log(arr);
// console.log(arr.slice(3,));

// //Task1

// let student = []
// student.push({name:"vijay",age:10})
// student.push({name:"Surya",age:15})
// student.push({name:"vinod",age:20})
// console.log(student);
// console.log(student.filter((ele,index,student)=>ele.age%2 == 0));

//console.log(age);
// for(let i of student)
// {
//     console.log(i.age);
// }


// //Task2

// let products = []
// products.push({name:"Shoes",price:2000})
// products.push({name:"watches",price:3200})
// products.push({name:"Glasses",price:1500})
// console.log(products);
// let newPricelist = products.map((items,index,products)=> items.price-5)
// console.log(newPricelist);

// let totalPrice = products.reduce((acc,ele,indx,products)=> acc+ele.price,0)
// console.log(totalPrice);


// let str1 = "  Manipulating String using String methods  "
// let str2 = "hey there how are you"
// console.log(str1.length);
// console.log(str1.slice(9,13));
// console.log(str1.substring(0,4));
//console.log(str1.substr(13,6));
// console.log(str1.replace('p','P'));
// console.log(str1.replaceAll(' ','&_'));
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.concat(str2));
// console.log(str1.length);
// console.log(str1.trim(),str1.trim().length);
// console.log(str2.charAt(5));
// console.log(str2.charCodeAt(5));
// let x = str2.split(' ');
// console.log(x);
// console.log(str1.indexOf('i'));
// console.log(str1.lastIndexOf('i'));

// // Task
// let str3 = "hey there how are you"
// let a = str3.split(' ')
// let b =[]
// for(let i of a)
// {
//     b.push(i[0].toUpperCase()+i.slice(1));
// }
// console.log(b.toString().replaceAll(',',' '));