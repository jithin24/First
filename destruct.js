const arr  = [1, 2, 3, 4, 5];
let a, b, remain;

var person = {
    "first" : "Jithin", 
    "last" : "George", 
    "hobbies" : ["Football", "Piano", "Coding", "Reading"],
    getFullName () { 
        return this.first + " " + this.last
    },
    showHobbies : function() {
        console.log(this.hobbies);
    }
};

[a, b, ...remain] = arr;
[a=5, b=7] = [1];   

console.log("Value : %o", arr);
console.log(`${a} ~ ${b} ~ ${remain}`);


const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (var {name: n, family: {father: f}, age: a_age} of people) {
  console.log('Name: ' + n + ', Father: ' + f + ',  Age: ' + a_age);
}

({first: firstName, last: lastName} = person); 
console.log(person.getFullName());
person.showHobbies();