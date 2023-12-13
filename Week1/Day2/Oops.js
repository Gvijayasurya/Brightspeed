// encapsulation 
class Laptop{
    constructor(brand,Gen,ram){
        this.brand=brand
        this.Gen = Gen
        this.Ram = ram
    }
}
let L = new Laptop("Dell","i5","512-SSD")
console.log(L.brand,L.Gen,L.Ram);

//inheritance and Method Overriding

class Teacher{
    skills(){
        console.log("Teacher Sharing His knowledge to students");
    }
}
class student extends Teacher{
    skills(){
        console.log("Students Receving knowledge from teacher");
    }
}

let T = new Teacher()
T.skills()
let S = new student()
S.skills()


let sum = (a,b)=>{
    return a+b
}

let Calculation = (x,y)=>{
    let res = sum(x,y)
    console.log(res);
}
let x = 10
let y = 22
Calculation(x,y)