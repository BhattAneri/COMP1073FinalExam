// JavaScript Document

//created a class with constructor using this keyword to store values in the given variables.
class Person {
  constructor(name, age, gender, classes) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

//created a function greeting which would display a message along with the name passed to the constructor at the console.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

    //This is another function which would when called display console message and the name would be fetched from the constructor when the function would be called.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

// These are the two instantiated objects for the constructor person to pass values to the variables passed in the constructor.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//Created na new subclass which extends all the properties of the Person Class constructors.
//we use super keyword to access the variables of the parent class in the sub/child class
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

//To instantiate object for the teacher class accessing the variables from the parent class.
let teacher = new Teacher('Aneri','Bhatt',21,'Female',['Reading','Dancing'],'PHP',90);