var Hyodae = {
    favFood: "beef",
    favMoive: "LaLa Land"
};

var Person = Hyodae;
Person.favFood = "salad";

console.log(Hyodae.favFood);    // salad
console.log(Person.favFood);    // salad

console.log(19=='19');  // true
console.log(19==='19'); // false
