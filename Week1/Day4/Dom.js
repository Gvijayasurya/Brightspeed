// let sum = (a,b)=>{
//     return cal(a+b)
// }
// let cal=(c)=>{
//     console.log(`The sum is ${c}`);
// }
// sum(10,2)

let fun = ()=>{
    let h = document.getElementsByTagName("h1")
    h[0].innerText="Dom Topic"
    h[0].style.color="brown"
}

let fon=()=>{
    let p = document.getElementById('para')
    p.style.color="green" 
    p.style.backgroundColor="whitesmoke"
    p.style.fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
}
let b = document.getElementsByClassName('block')
//console.log(b[0].innerHTML="<h2>heading Tag </h2>");


let sub=()=>{
    let s = document.getElementsByTagName('input')[0].value
    console.log(s);
}


let arr=[{name:"vijay",city:"Banglore",age:22},{name:"surya",city:"Anantapur",age:21},{name:"vinod",city:"Chennai",age:20}]
let data = ()=>{
    for(let i in arr)
    {
        let d = document.getElementsByClassName('obj')
        let ele = document.createElement('h1')
        ele.innerText=`${arr[i].name}`
        d[0].append(ele)
    }
}

let fo=(event)=>{
    event.preventDefault();
    let u = document.getElementById('un')
    let p = document.getElementById('ps')
    console.log(u.value);
    console.log(p.value);
}



let details = ["apple","mango",'orange']

let disp=()=>{
    let k = document.getElementById('info')
    k.innerHTML=''
    for(let ele of details)
    {
     let c = document.createElement('h3')
     c.innerText=`${ele}`
     c.addEventListener("click",function(){
         operation(ele)
     })
     k.append(c)
    }
}

function operation(a){
    details.splice(a,1)
    disp()
}