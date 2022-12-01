var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

class Teacher {
    name;
    constructor(name) {
      this.name = name;
    }
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject)
{
    console.log(this.name + " teaches " + subject);
}

var him = new Teacher();

him.initialize("John", 25);
him.teach("Inheritance");