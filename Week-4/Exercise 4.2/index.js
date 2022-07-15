var person = function () {};

person.prototype.initialize = function (name, age) {

	this.name = name;
	this.age = age;

};

var teacher = function () {

	// Person.call(this);

	this.teach = function (subject) {

		console.log(`${this.name} is now teaching ${subject}`);

	};
};

Object.setPrototypeOf(teacher.prototype, person.prototype);

var him = new teacher();
him.initialize("Adam",45);
him.teach("Inheritance");