//Task item #1
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  // this.subject = null;
  // this.marks = []; 
  // this.excluded = ''; reason = '';
}

//Task item #2
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

//Task item #3
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
    // this.marks = [...this.marks, mark];
  }
}

//Task item #4
Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks.push(...marks);
    // this.marks = [...this.marks, ...marks];
  }
}

//Task item #5
Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    return null;
  } else if (this.marks.length === 0) {
    return 0;
  } else {
    return this.marks.reduce((sum, mark) => sum + mark) / this.marks.length;
  }
}

//Task item #6
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2.getAverage());
console.log(student2)