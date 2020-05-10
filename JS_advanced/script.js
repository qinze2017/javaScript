//Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, 
    yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
}

Person.prototype.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
    }

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//Object.create
/*
var PersonProto = {
    calculateAge : function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(PersonProto);
john.name = 'Jhon';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(PersonProto,
{
    name: {value: 'Jane'},
    yearOfBirth: {vale: 1969},
    job: {value: 'designer'}
})
*/

//Primitives vs objects
/*var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'Ze',
    age: 30
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'abc',
    city: 'Sherbrooke'
};

function change(a,b) {
    a =30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);*/

//Passing functions as arguments
var years = [1990, 1995,1385, 2020, 2018];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i= 0, i < arr.length; i ++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){
    
    if (el >= 18 && el <= 81 ) {
        return Math.round(206.9 - (0.67 * el));
    } lese {
        return -1;
    }
    
}

var ages = arrayCalc(years,calculateAge);
console.log(ages);

var fullAges = arrayCalc(years,isFullAge);
console.log(fullAges);

var rates = arrayCalc(years,maxHeartRate);
console.log(rates);