function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);

console.log(programmer.name);
console.log(programmer.age);
console.log(programmer.hobby);

/* Output:
John
18
['Coding', 'Read book', 'Ping-pong']
*/
