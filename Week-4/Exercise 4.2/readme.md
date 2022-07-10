# Week 4 : JavaScript

## Exercise 4.2

Create an object calledTeacherderived from thePersonclass, and implement a method calledteachwhich receives a string calledsubject, andprints out:

[teacher's name]is now teaching[subject]

### Guidelines:
1. The expected output should be achieved using the keyword .prototype.
2. Reference:

```
Var Person = function() {};

Person.prototype.initialize=function(name,age)
{
    this.name=name;
    this.age=age;
}
    
// TODO: create the class Teacher and a method teach
var him=newTeacher();
him.initialize("Adam",45);
him.teach("Inheritance");

```

## Outcomes:
1. The candidates will understand how inheritance works in JS.
2. The candidates will understand what a prototype keyword is in JS.