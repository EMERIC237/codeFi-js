// Exercise #1
class SubjectOne {
  constructor() {
    this.observers = [];
  }

  // Add observers
  addObserver(observer) {
    this.observers.push(observer);
  }
  // remove obserser
  removeObserver(obserser) {
    this.observers = this.observers.filter((obs) => obs != obserser);
  }

  notifyObservers() {
    this.observers.forEach((obserser) => obserser.update());
  }
}

class ObserverOne {
  update() {
    console.log("Observer update");
  }
}
//-----------TEST---------------/
emailSubject = new SubjectOne();
appObserver = new ObserverOne();
apiObserver = new ObserverOne();
testObserver = new ObserverOne();

// add observers
emailSubject.addObserver(appObserver);
emailSubject.addObserver(apiObserver);
emailSubject.addObserver(testObserver);
// remove api observer
emailSubject.removeObserver(apiObserver);

emailSubject.notifyObservers();

// Exercise #2
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const fruits = ["apple", "banana", "cherry", "date"];

const { name, age } = person;
console.log("The name is: " + name);
console.log("The age is: " + age);

const [, second, , fourth] = fruits;
console.log("The second fruit is: " + second);
console.log("The fourth fruit is: " + fourth);

// Exercise #3
async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  // Your async/await code here
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.table(data);
  } catch (error) {
    console.error(error);
  }
}

// Call the function to fetch posts
fetchPosts();

// Exercise #4
class Subject {
  constructor() {
    this.observers = [];
  }

  // Add observers
  addObserver(observer) {
    this.observers.push(observer);
  }
  // remove obserser
  removeObserver(obserser) {
    this.observers = this.observers.filter((obs) => obs != obserser);
  }

  notifyObservers(data) {
    this.observers.forEach((obs) => obs.update(data));
  }

  async fetchAndNotify() {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    let data;
    try {
      const res = await fetch(url);
      data = await res.json();

    } catch (error) {
      data = error;
      console.error(error);
    }
    this.notifyObservers(data);
  }
}

class Observer {
  update(data) {
    if (typeof data == String) {
      console.log("Error: " + data);
    } else {
      const [{ title: firstPostTitle }] = data;
      console.log("The first post title is: " + firstPostTitle);
    }
  }
}

//-----------TEST---------------/
weatherSubject = new Subject();
phoneObserver = new Observer();
machineObserver = new Observer();
testerObserver = new Observer();

// add observers
weatherSubject.addObserver(phoneObserver);
weatherSubject.addObserver(machineObserver);
weatherSubject.addObserver(testerObserver);

weatherSubject.fetchAndNotify();
