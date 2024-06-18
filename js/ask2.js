const managers = ["Petro", "Viktor", "Anna", "Olga"];
const sales = [20000, 34000, 17000, 23000];
let manager_sale = [];

for (i = 0; i < managers.length; i++) {
  manager_sale.push(`${managers[i]} - ${sales[i]}`);
}

console.log(manager_sale);
