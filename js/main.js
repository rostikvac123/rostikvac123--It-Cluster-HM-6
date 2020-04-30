//                                                      1
//  Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км.
//  (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну.

// let dog = {
//   name: "Dog",
//   weight: 50,
//   years: 4,
//   speed: 30,
// };

// function animalInfo() {
//   for (let val in dog) {
//     alert(`${val} : ${dog[val]}`);
//   }
// }
// function timeGo() {
//   let distance = 1000;
//   let time = distance / this.speed;
//   let days = Math.floor(time / 12);
//   let hour = (time % 12).toFixed(2);
//   alert(
//     `${this.name} needs ${days} days and ${hour} hour in order to run 1000 km`
//   );
// }

// function detailedName() {
//   this.name = prompt("Input new name!");
//   alert(`New name: ${dog.name}`);
// }
// animalInfo();
// timeGo.call(dog);
// detailedName.call(dog);

//                                                              2

// Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури,
// периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

// let reversingFigures = {
//   side1: 40,
//   side2: 80,
//   area() {
//     alert(`Area : ${this.side1 * this.side2}`);
//   },
//   perimetr() {
//     alert(`Perimetr: ${2 * (this.side1 + this.side2)}`);
//   },
//   a3d() {
//     this.side3 = +prompt("Enter a side 3", " ");
//     alert(`Side 3: ${this.side3}`);
//   },
//   figureName() {
//     this.name = prompt("Enter a shape name", " ");
//     alert(`Shape name: ${this.name}`);
//   },
//   conversion() {
//     this.side1 = this.side1 / 100;
//     this.side2 = this.side2 / 100;
//     this.side3 = this.side3 / 100;
//     alert(
//       `SIde 1: ${this.side1} m,SIde 2: ${this.side2} m,SIde 3: ${this.side3} m `
//     );
//   },
// };
// reversingFigures.area();
// reversingFigures.perimetr();
// reversingFigures.a3d();
// reversingFigures.figureName();
// reversingFigures.conversion();

//                                                 3

// Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
// {
//  tomato: {
//      count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true
//  } , ...
// }
//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

// const shoppingList = {
//   tomato: {
//     count: 5,
//     price: 50,
//     buy: false,
//     outOfStore: true,
//   },
//   milk: {
//     count: 1,
//     price: 30,
//     buy: true,
//     outOfStore: true,
//   },
//   rice: {
//     count: 2,
//     price: 20,
//     buy: true,
//     outOfStore: false,
//   },
//   butter: {
//     count: 3,
//     price: 28,
//     buy: false,
//     outOfStore: true,
//   },
//   sourСream: {
//     count: 2,
//     price: 25,
//     buy: false,
//     outOfStore: false,
//   },
// };

// // Виводимо список покупок - спочатку ті які є в магазині потім яких немає
// function shoppingSheet() {
//   let availableProducts = [];
//   let notAvailableProducts = [];
//   for (let key in shoppingList) {
//     if (shoppingList[key].outOfStore === false) {
//       availableProducts.push(key);
//     } else {
//       notAvailableProducts.push(key);
//     }
//   }
//   let allProducts = availableProducts.concat(notAvailableProducts);
//   console.log(allProducts);
// }

// //Виводимо список покупок які ми купили.
// function purchased() {
//   let items = [];
//   for (let key in shoppingList) {
//     if (shoppingList[key].buy === true) {
//       items.push(key);
//     }
//   }
//   console.log(items);
//   return items;
// }

// //Додаємо функцію яка дозволить купити продукт.
// //Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// function allItemsSum() {
//   let sum = 0;
//   for (let _key in shoppingList) {
//     if (shoppingList[_key].buy === true) {
//       sum += shoppingList[_key].price * shoppingList[_key].count;
//     }
//   }
//   console.log(sum);
//   return sum;
// }

// // Додаємо можливість збільшувати кількість товару.
// function increaseOfGoods(product, quantity) {
//   for (let key in shoppingList) {
//     if (product == key) {
//       shoppingList[key].count += quantity;
//     } else {
//       console.log("no such products");
//     }
//   }
// }

// //Додаємо можливість зменшувати кількість товару.
// function decreaseeOfGoods(product, quantity) {
//   for (let key in shoppingList) {
//     if (product == key) {
//       if (shoppingList[key].count >= quantity) {
//         shoppingList[key].count -= quantity;
//       } else {
//         console.log("you don't have that many items");
//       }
//     }
//   }
// }

// shoppingSheet();
// purchased();
// allItemsSum();
// increaseOfGoods("milk", 20);
// decreaseeOfGoods("milk", 20);
// console.log(shoppingList.milk.count);

//                                                               4
//        Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}].
//        Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.
// let collection = [
//   {
//     name: "Yura",
//     age: 55,
//     hobby: ["films", "game", "hiking"],
//     type: "admin",
//   },
//   {
//     name: "Oleg",
//     age: 33,
//     hobby: ["films", "football", "running"],
//     type: "engineer",
//   },
//   {
//     name: "Taras",
//     age: 28,
//     hobby: ["swimming", "boxing", "driving"],
//     type: "artist",
//   },
//   {
//     name: "Vova",
//     age: 48,
//     hobby: ["boxing", "football", "hiking"],
//     type: "engineer",
//   },
//   {
//     name: "Stas",
//     age: 32,
//     hobby: ["game", "running", "football"],
//     type: "admin",
//   },
// ];

//Вивести всіх адмінів.
// function chooseAdmins() {
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].type === "admin") {
//       console.log(collection[i]);
//     } else {
//       continue;
//     }
//   }
// }
// chooseAdmins();

//the second way "Вивести всіх адмінів."
// let chooseAdmins = collection.filter((item) => item.type == "admin");
// console.log(chooseAdmins);

// Вивести середній вік усіх працівників.

// let totalAge = 0;
// let peopleNumber = 0;
// let averageYear = 0;
// for (let i of collection) {
//   peopleNumber++;
//   totalAge += i.age;
//   averageYear = totalAge / peopleNumber;
// }
// console.log(averageYear);

//Вивести тільки унікальні хоббі працівників.

//ось тут не впевнений що правельно

// let professionArr = [];
// let allProf = [];
// collection.filter((item) => allProf.push(item.hobby));
// console.log(allProf);
// for (let i = 0; i < allProf.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (allProf[i][j] != undefined) {
//       professionArr.push(allProf[i][j]);
//     }
//   }
// }
// console.log(professionArr);
// function Work(value, index, self) {
//   return self.indexOf(value) == index;
// }
// const uniqueWork = professionArr.filter(Work);
// console.log(uniqueWork);
