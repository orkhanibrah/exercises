//Exercise 1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// result = ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

const country = "USA";
console.log([...country]);
// will console log an array ['U', 'S', 'A']

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// newArray would be an array of 2 dots?


//Exercise 2
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(item => 
    `Hello ${item.firstName}`
);
console.log(welcomeStudents);

const fullStack = users.filter(item => 
    item.role == 'Full Stack Resident'
);
console.log(fullStack)

// Bonus
const lastNames = users.filter(item => 
    item.role == 'Full Stack Resident'
).map(item => item.lastName);
console.log(lastNames);


// Exercise 3
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((acc, item) => acc + ' ' + item)
console.log(sentence);


//Exercise 4
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedStudents = students.filter(item => item.isPassed);
console.log(passedStudents);
// Bonus
const congratulations = students.filter(item => item.isPassed).forEach(item => {
    console.log(`Good job ${item.name}, you passed the course in ${item.course}.`)
})
