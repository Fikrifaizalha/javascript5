const sayHello = (language) => {
  if (language.toUpperCase() === "INDONESIA") {
    return "Selamat Pagi!";
  } else {
    return "Good Morning!";
  }
};

console.log(sayHello("Indonesia"));

/* Output:
Selamat Pagi!
*/
