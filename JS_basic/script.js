/***********************************
*Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


//Naming 
var _3year = 3;
var johnMark = 'John and Mark';



/***********************************
* Variable mutation type coercion
*/

//Type coercion
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);


var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is her married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is her married? ' + isMarried);


var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);


/***********************************
* Basic operators
*/

var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33;


yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical oprators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof oprator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);


/***********************************
* Basic operators
*/


var now = 2008;
var yearJohn = 1989;
var fullAge = 18;


var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;

console.log(average);

//Multiple assignments
var x, y;

x = y = ( 3 + 5 ) * 4 - 6;
console.log(x, y);


//More operators
x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);



// CODING CHJALLENGE 

var massMark = 78; 
var massJohn = 92;
var heightMark = 1.69;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

//var isHigher = BMIMark > BMIJohn;
//console.log('Is Mark\'s  BMI highr than John\'s ? ' + isHigher); //escaping

if (BMIMark > BMIJohn) {
    console.log('Mark\'s  BMI highr than John\'s');
} else {
    console.log('John\'s  BMI highr than Mark\'s');
}



var John = {
    name : 'John' ,
    mass :  110,
    height: 95,
    calculate: function (){
        this.BMI = this.mass/(this.height * this.height);
        return this.BMI;
    }
}

var Mark = {
    name : 'Mark' ,
    mass :  78,
    height: 1.69,
    calculate: function (){
        this.BMI = this.mass/(this.height * this.height);
        return this.BMI;
    }
}

//console.log(John.calculate());
console.log(John.BMI);

if (Mark.calculate() > John.calculate()) {
    console.log(Mark.name + '\' s  BMI '+
                Mark.BMI+ ' highr than '+John.name+'\'s ' + John.BMI);
} else if (Mark.calculate() < John.calculate()){
    console.log(John.name + '\' s  BMI '+
                John.BMI+ ' highr than '+Mark.name+'\'s ' + Mark.BMI);
} else {
    console.log('They have same BMI');
}


/***********************************
* If / else statements
*/

var firstName ='Jhon';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMArried = true;

if(isMArried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}





// CODING CHJALLENGE 

var scoreJohn1 = 89;
var scoreJohn2 = 120;
var scoreJohn3 = 103;
var scoreMike1 = 116;
var scoreMike2 = 94;
var scoreMike3 = 123;

var scoreAvergeJohn = (scoreJohn1 + scoreJohn2 + scoreJohn3)/3;
var scoreAvergeMike = (scoreMike1 + scoreMike2 + scoreMike3)/3;

/*if (scoreAvergeJohn > scoreAvergeMike) {
    console.log('winner is John team with ' + scoreAvergeJohn + ' points');
} else if (scoreAvergeJohn < scoreAvergeMike) {
    console.log ('winner is Mike team' + scoreAvergeMike + ' points');
} else {
    console.log ('They have same average score');
}
*/

var scoreMary1 = 97;
var scoreMary2 = 134;
var scoreMary3 = 105;

var scoreAvergeMary = (scoreMary1 + scoreMary2 +scoreMary3)/3;

if (scoreAvergeJohn > scoreAvergeMike && scoreAvergeJohn > scoreAvergeMary) {
    console.log('winner is John team with ' + scoreAvergeJohn + ' points');
} else if (scoreAvergeMike > scoreAvergeJohn && scoreAvergeMike > scoreAvergeMary) {
    console.log ('winner is Mike team' + scoreAvergeMike + ' points');
} else if (scoreAvergeMary > scoreAvergeMike && scoreAvergeMike > scoreAvergeMike) {
    console.log ('winner is Mary team' + scoreAvergeMary + ' points');     
} else {
    console.log ('They have same average score');        
}

/***********************************
* Functions
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);

console.log(ageJohn);

 
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement >0) {
        console.log(firstName + 'retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + 'is already retired.');
    }
}



/***********************************
* Functions Statements and Expressions
*/

// Function declaration
//function whatDoYouDo (job, firstName) {}

// Functions Expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lison.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}



/***********************************
* Arrays
*/

var names = ['John', 'Mike', 'Jane'];
var years = new Array(1990, 1969,1948);


console.log(names[0]);
console.log(names.length);


names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 1990, false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();// remove last element
john.shift();// remove 0 element


console.log(john.indexOf(1990));//1

var isDesigner = 
john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


//CODING CHJALLENGE 2

/*function calculator (bill) {
    if (bill < 50) {
        return 0.2 * bill;
    } else if (bill >= 50 && bill <=200) {
        return 0.15 * bill;
    } else {
        return 0.1 * bill;
    }
}*/

function calculator (bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <=200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];

/*var tips = [calculator(124), calculator(48), calculator(268)];
var amounts = [calculator(124) + 124, calculator(48) + 48, calculator(268) +268 ];*/

var tips = [calculator(bills[0]),
            calculator(bills[1]),
            calculator(bills[2])];
var amounts = [bills[0] + tips[0],
               bills[0] + tips[0],
               bills[0] + tips[0]];
               
console.log(tips, amounts);

/***********************************
* Objects and properties
*/

// Object literal
var john = {
    firstName: 'John',
    lastname: 'Smith',
    birthYear : 1990,
    family: ['Jane', 'Mark', 'Bon'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

console.log(john.calcAge());
console.log(john.firstName);
console.log(john['lastname']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarred'] = true;


//new Object syntax
var jane = new Object();
jane.firstname ='Jane';
jane['lastName'] = 'Smith';



/***********************************
* Loops and iteration
*/

for (var i = 1; i <= 20; i++) {
    console.log(i);
}


var names = ['John', 'Mike', 'Jane'];

//continue and break statements
for (var i = 0; i < names.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(names[i]);
}

for (var i = 0; i < names.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(names[i]);
}

//While loop
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// Looping backwards
for(var i = names.length -1; i >=0 ; i --) {
    console.log(names[i]);
}



// CODING CHALLENGE 5

var tips = [];
var amounts = [];

function calculator (bills) {

    var tip;
    var amount;
    var bill;
    
    console.log(bills.length);
    
    for ( var i = 0; i < bills.length; i++) {
        bill = bills[i];
        if (bill < 50) {
            tip = bill * .2;
        } else if (bill >= 50 && bill <=200) {
            tip = bill * .15;
        } else {
            tip = bill * .1;
        }
        
        amount = tip + bill;
        console.log(tip, amount);
        
        tips.push(tip);
        amounts.push(amount);
    }
    
/*    console.log(tips);
    console.log(amounts);*/
    return {
        tips: tips,
        amounts: amounts,  
    };
}

var bills = [124, 48, 268, 180, 42];

/*var tips = [calculator(124), calculator(48), calculator(268)];
var amounts = [calculator(124) + 124, calculator(48) + 48, calculator(268) +268 ];

var tips = [calculator(bills[0]),
            calculator(bills[1]),
            calculator(bills[2])];
var amounts = [bills[0] + tips[0],
               bills[0] + tips[0],
               bills[0] + tips[0]];*/
               
console.log(calculator(bills));


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i< this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                 percentage = .2;
            } else if (bill>= 50 && bill <=200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;       
        }
    }
}

john.calcTips();
console.log(john);



var mark = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i< this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                 percentage = .2;
            } else if (bill>= 100 && bill < 300) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;       
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    
    return sum / tips.length;
}


john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john,mark);


if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (john.average < mark.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);            
}



//Lecture: The this keyword

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 -
        this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }     
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
