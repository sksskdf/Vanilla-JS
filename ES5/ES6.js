"use strict"; //strict mode


const person = {age:20,height:189}; //object

document.write(person.age);
document.write(person["age"]);

let txt = "";
for (let x in person) { //for in
  txt += person[x] + " ";
}

document.write(txt);

//(let f = () => alert('hi');)();
//(function () { alert('hi');})();
//let a = (() => { alert('hi'); })(); //arrow function & invoking function

class Car { //Classes
  constructor(name,year) {
    this.name = name;
    this.year = year;
   }
   age(){
     let date = new Date();
     return date.getFullYear() - this.year;
   }
}

let myCar1 = new Car("Ford",2014);
let myCar2 = new Car("Audi",2019);

document.write(myCar1.name + myCar1.year);
document.write(myCar1.age());

class Car2 {
  constructor(brand) {
    this.carname = brand;
  }
  present=()=> 'I have a ' + this.carname;
  get cnam(){
    return this.carname;
  }
  set cnam(x){
    this.carname=x;
  }
}

class Model extends Car2 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show=()=>this.present() + ', it is a ' + this.model; 
}

let myCar3 = new Model("Ford","Mustang");
document.write(myCar3.show());
myCar3.cnam = "BMW";
document.write(myCar3.cnam);






