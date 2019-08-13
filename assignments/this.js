console.log("=======");
console.log("this.js");
console.log("=======");

/* The for principles of "this";
* in your own words, explain the four principles for the "this" keyword below:
*
* 1. Window binding is the global scope which will be the `window` or `console` object, depending on where it is being run from. It is the default context unless you're in strict mode in which case undefined is returned.
* 2. Implicit binding is the most common rule and is used in about 80% of use cases. It refers to whatever object is to the left of the dot when called. When x.this is called, x would be the resulting object returned by `this`.
* 3. New binding applies when a constructor is used to create the object and refers to the object created.
* 4. Explicit binding is applicable when the .call(), .apply(), or .bind() methods are used. Here, `this` refers to the object referenced within the aforementioned method.
*
* write out a code example of each explanation above
*/

console.log("\n");  //Double blank line


console.log("Principle 1");
console.log("code example for Window Binding\n");
console.log("this: "+this);

console.log("\n");  //Double blank line


console.log("Principle 2");
console.log("code example for Implicit Binding\n");
const me = {
  greetings: [ 'Hello', 'Howdy', 'Hi', 'Hey', 'Yo' ],
  sayHello: function(name) {
    let r = Math.floor(Math.random() * this.greetings.length);
    console.log(`${this.greetings[r]}, my name is ${name}.`);
    console.log(this);
  }
};
me.sayHello('Paul');

console.log("\n");  //Double blank line


console.log("Principle 3");
console.log("code example for New Binding\n");
function Person(greet) {
  this.greeting = 'Hello';
  this.greeted = greet;
  this.end = [ '.', '...', '!', '?' ];
  this.greet = function() {
    let r = Math.floor(Math.random() * this.end.length);
    if(this.greeted.toLowerCase() == 'groot') {
      console.log(`I am ${this.greeted}${this.end[r]}`);
    } else {
      console.log(`${this.greeting}, ${this.greeted}${this.end[r]}`);
    }
    console.log(this);
  };
}

const jerry = new Person('Newman');
const newman = new Person('Jerry');
const groot = new Person('Groot');

jerry.greet();
newman.greet();
groot.greet();

console.log("\n");  //Double blank line


console.log("Principle 4");
console.log("code example for Explicit Binding\n");
jerry.greet.call(newman);
newman.greet.apply(jerry);
groot.greet.apply(groot);