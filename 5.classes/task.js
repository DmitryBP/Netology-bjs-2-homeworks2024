class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    if (this._state < 75) {
      this._state *= 1.5;
    } else this._state = 100;
  }
  set state(value) {
    value < 0
      ? (this._state = 0)
      : value > 100
      ? (this._state = 100)
      : (this._state = value);
  }
  get state() {
    return this._state;
  }
}

const sherlock = new PrintEditionItem(
  'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

const picknick = new FantasticBook(
  'Аркадий и Борис Стругацкие',
  'Пикник на обочине',
  1972,
  168
);
console.log(picknick);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

class Library {
  constructor(name = '', books = []) {
    this.name = name;
    this.books = books;
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    let res = this.books.find((book) => book[type] === value);
    return res ? res : null;
  }

  giveBookByName(bookName) {
    let index = this.books.findIndex((book) => {
      return book.name == bookName;
    });
    if (index >= 0){
      let findedBook = this.books.splice(this.books[index], 1)
      return findedBook[0];
    }
    return null;
  }
}

const library = new Library('Библиотека имени Ленина');
library.addBook(new PrintEditionItem('Типовой школьный журнал', 2019, 102))
const firstBook = library.giveBookByName('Типовой школьный журнал')
console.log(firstBook);


/*
// Задача 3. Журнал успеваемости *
*/



class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    } else {
      const subjects = Object.keys(this.marks);
      if (!subjects.includes(subject)) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    const subjects = Object.keys(this.marks);
    if (!subjects.includes(subject)) {
      return 0;
    } else {
      let marksBySubjectArr = Object.entries(this.marks).filter(
        (el) => el[0] == subject
      );
      let marksBySubject = marksBySubjectArr[0][1];
      if (marksBySubject.length == 0) return 0;
      let sumMarksBySubject = marksBySubject.reduce((sum, el) => sum + el, 0);
      return sumMarksBySubject / marksBySubject.length;
    }
  }
  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length == 0) return 0;
    let sumAverege = subjects.reduce((sum, subject) => {
      return sum + this.getAverageBySubject(subject);
    }, 0);
    return sumAverege / subjects.length;
  }
}

const student = new Student('Иван Петров');

console.log(student);

student.addMark(5, 'биология');
student.addMark(5, 'биология');
student.addMark(4, 'Химия');
student.addMark(3, 'Физкультура');

console.log(student.getAverageBySubject('Физкультура'));

console.log(student.getAverage());
