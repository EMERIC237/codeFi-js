// Exercise #1
function globalFunc() {
  console.log("global function: ");
  console.log(this);
}

const person = {
  name: "Lydia",
  age: 21,
  printName: function () {
    console.log("object: " + this);
    console.log("My name is " + this.name);
  },
  addNumProperties: function (key, value) {
    if (key == undefined) return;
    if (typeof value != "number") return;
    this[key] = value;
  },
};

const printer = () => {
  console.log("arrow function: ");
  console.log(this);
};

globalFunc();
person.addNumProperties("height", 5.5);
console.log(person);
printer();
/*
The difference between the value of 'this' in these setup are:
globalFunc: the value of 'this' is the window object
person: the value of 'this' is the object person
printer: the value of 'this' is the window object
*/

// Exercise #2
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  }

  static info() {
    return "A person is simply a human being.";
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value != "string") return;
    this._name = value;
  }

  get age() {
    return this._age;
  }

  setAge(value) {
    if (typeof value == "number" && value > 0) {
      this._age = value;
    }
  }
}

const Ashley = new Person("Ashley", 24);
Ashley.greet();

const Emeric = new Person("Emeric", 23);
Emeric.greet();

console.log(Person.info());
// console.log(Ashley.info());

// Exercise #4
/*
Trying to access a static method from an instance of the class give you the error:
`Uncaught TypeError: Ashley.info is not a function`
*/

// Exercise #5

const student = new Person();
student.name = "chris";
student.setAge(-4);
console.log(student);
console.log("name: " + student.name);

// Exercice 6

// Exercice 7(Design a Library)
class Library {
  books = [];

  addBook(book) {
    this.books.push(book);
  }

  addBooks(books) {
    for (const book of books) {
      this.books.push(book);
    }
  }
  removeBook(bookTitle) {
    for (let i = 0; i < this.books.length; index++) {
      const book = this.books[i];
      if (book.title == bookTitle) {
        this.books.splice(i);
      }
    }
  }

  listAllBook(){
    console.log("These are all you books: \n")
    for (const book of this.books) {
      console.log(`${book.title} by ${book.author} published in ${book.yearPublished}`)
    }
  }

  orderByYear(){
    this.books.sort((a,b) => a.yearPublished - b.yearPublished);
  }

  orderByTitle(){
    this.books.sort((a,b) => a.title - b.title);
  }
  orderByTitleISBN(){
    this.books.sort((a,b) => a.ISBN - b.ISBN);
  }

  static welcomeMessage() {
    console.log("Welcome to the library");
  }
}

class Book {
  static #ISBNHandler = 100;
  title;
  author;
  yearPublished;
  #ISBN;
  pages;
  constructor(author,title,yearPublished,pages) {
    this.author = author;
    this.title = title;
    this.yearPublished = yearPublished;
    this.pages = pages;
    this.#ISBN = Book.#ISBNHandler++;
  }

  get ISBN(){
    return this.#ISBN;
  }
  

  updateBookPage(pageNumber, pageText){
    for (const page of this.pages) {
      if (page.pageNumber == pageNumber) {
        page.pageText = pageText;
        return;
      }
    }
  }

}

class Page {
  constructor(pageNumber, pageText) {
    this._pageNumber = pageNumber;
    this._pageText = pageText;
  }
}


/************************TESTING THE LIBRARY******************* */
// Create a library instance
const myLibrary = new Library();

// Create new pages
const firstPage = new Page(1, "This is the first page");
const secondPage = new Page(2, "This is the second page");
const thirdPage = new Page(3, "This is the third page");
// Create new books
const newBook = new Book("Emeric", "The King", 2021, [firstPage, secondPage, thirdPage]);
const newBook2 = new Book("Jordan", "Self-discipline", 2019, [firstPage, secondPage, thirdPage]);
const newBook3 = new Book("Francois", "THE ZONE", 2018, [firstPage, secondPage, thirdPage]);

// Add books to the library
myLibrary.addBook(newBook);
myLibrary.addBooks([newBook2, newBook3]);
myLibrary.listAllBook();



// Exercise #8
class Student {
  name;
  grades = [];
  constructor(name) {
    this.name = name;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  get AverageGrade() {
    let sum = 0;
    for (const grade of this.grades) {
      sum += grade;
    }
    return sum / this.grades.length;
  }

  printAverageAfterDelay() {
    setTimeout(function() {
      console.log(this.AverageGrade);
    }, 1000);
  }

  printAverageAfterDelay() {
    setTimeout(() => {
      console.log(this.AverageGrade);
    }, 1000);
  }

}



// In regular functions, the value of this is determined by how the function is called (dynamic scope).
// In arrow functions, the value of this is taken from the surrounding lexical scope when the function was defined.
// This behavior of arrow functions can be particularly handy in scenarios like event listeners 
// or callbacks where you want to retain the context of the surrounding code, but it can also be a source of confusion if you're not expecting it.

// When dealing with methods that involve callbacks (like in setTimeout, event listeners, etc.),
//  be careful with the choice between arrow functions and regular functions. If you want to refer to the surrounding context, arrow functions are typically the better choice.