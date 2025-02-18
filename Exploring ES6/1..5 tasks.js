//#region Self-Invoking Function to Alert the Sum of Two Numbers
(function(a, b) {
  alert(`The sum is: ${a + b}`);
})(3, 4);
//#endregion

//#region Iterating with for...in, for...of, and .forEach()
let arr = [1, 2, 3, 4, 5];

// for...in
for (let index in arr) {
  console.log(`for...in: ${index} -> ${arr[index]}`);
}

// for...of
for (let value of arr) {
  console.log(`for...of: ${value}`);
}

// .forEach()
arr.forEach((value, index) => {
  console.log(`forEach: ${index} -> ${value}`);
});

//Differences between for...in, for...of, and .forEach():

// for...in: Iterates over enumerable property names (keys) of an object or array.
// for...of: Iterates over iterable objects (arrays, strings, maps, sets) and returns their values.
// .forEach(): Calls a provided function once for each element in an array, in order.

//#endregion

//#region Spread Operator with an Array
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6]
//#endregion

//#region Student Class and Printing Data
class Student {
    constructor(name, university, faculty, finalGrade) {
      this.name = name;
      this.university = university;
      this.faculty = faculty;
      this.finalGrade = finalGrade;
    }
  
    printStudentData() {
      console.log(`${this.name} is a student in faculty of ${this.faculty} in university ${this.university}`);
    }
  }
  
  let student = new Student('ABdulrahman Muhammad', 'Fayoum Uni', 'Computer Science', 'A');
  student.printStudentData();
//#endregion
