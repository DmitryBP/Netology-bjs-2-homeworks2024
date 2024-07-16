function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks)
  }
};

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') && this.marks.length) {
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
  } else {
    return 0
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

const student1 = new Student('Ivan', 'man', 16);
const student2 = new Student('Valeriy', 'man', 15);
const student3 = new Student('Ulia', 'woman', 17);
