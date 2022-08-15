// reguler function

function sayHello(name = "Stranger", greet = "Hello") {
  console.log(`${greet} ${name}!`);
}

sayHello("Dimas", "Hai");
sayHello();

/* Output:
Hai Dimas!
Hello Stranger!
*/

// arrow function

const sayHello = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);

sayHello("Dimas", "Hai");
sayHello();

/* Output:
Hai Dimas!
Hello Stranger!
*/
