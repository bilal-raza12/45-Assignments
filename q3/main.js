var person_name = "Bilal Raza";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
